import express from "express";
import Note from "./db/schema.js";
import connect from "./db/index.js";
import cors from "cors";
import { Types } from "mongoose";

const app = express();

// Settting the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");
app.use(cors());

// To get all notes
app.get("/", async (req, res) => {
  console.log(req.query.q);
  try {
    const notes = req.query.q
      ? await Note.find({ title: /req.query.q/ }).exec()
      : /* Note.aggregate([{$match: {title: }}]) */
        await Note.find().exec();

    console.log(notes);
    if (notes.length === 0) {
      return res.sendStatus(204);
    }

    return res.status(200).send(notes);
  } catch (err) {
    console.log(err);
  }
});

// To get one specific note by id
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.find({ _id: id }).exec();

    if (!note) return res.status(404).send("Note not found");

    return res.status(200).send(JSON.stringify(note));
  } catch (err) {
    return res.status(404).send("Note does not exist");
  }
});

// To create a note
app.post("/create", async (req, res) => {
  const { title, content } = req.body;

  if (!title) return res.status(400).send("Title is required");

  const result = await Note.create({ title, content });

  if (!result) return res.status(500).send("Internal server error");

  return res.status(201).send("Note created");
});

// To edit a specific note by id
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title && !content)
    return res.status(400).send("Title and content is required");

  try {
    const note = await Note.findOne({ _id: new Types.ObjectId(id) }).exec();

    const result = await Note.updateOne({ _id: note._id }, { title, content });

    if (!result) return res.status(500).send("Internal server error");

    return res.status(200).send(`Note ${id} updated`);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
});

// To delete a specific note by id
app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await Note.deleteOne({ _id: id });

  if (!result) return res.status(500).send("Internal server error");

  return res.status(200).send(`Note ${id} deleted`);
});

connect()
  .then(() => {
    app.listen(3001, () => {
      console.log("App listening on port 3001");
    });
  })
  .catch((err) => {
    console.log("Cannot connect to db");
    console.error(err);
  });
