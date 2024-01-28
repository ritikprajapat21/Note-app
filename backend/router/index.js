import { Router } from "express";
import Note from "../db/schema.js";

const router = Router();

// To get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();

  if (notes.length === 0) {
    return res.status(204).send({ message: "No notes available. Create one" });
  }

  return res.status(200).send(notes);
});

// To get one specific note by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const note = await Note.find({ _id: id }).exec();

  if (!note) return res.status(404).send("Note not found");

  return res.status(200).send(JSON.parse(note));
});

// To create a note
router.post("/create", async (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).send("Title is required");

  const result = await Note.create({ title, content });

  if (!result) return res.status(500).send("Internal server error");

  return res.status(201).send("Note created");
});

// To edit a specific note by id
router.put("/:id/edit", async (req, res) => {
  const id = req.params;
  const { title, content } = req.body;
  if (!title && !content)
    return res.status(400).send("Title and content is required");

  const note = await Note.find({ _id: id }).exec();

  note.title = title;
  note.content = content;
  const result = await note.save();

  if (!result) return res.status(500).send("Internal server error");

  return res.status(200).send(`Note ${id} updated`);
});

// To delete a specific note by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await Note.deleteOne({ _id: id });

  if (!result) return res.status(500).send("Internal server error");

  return res.status(200).send(`Note ${id} deleted`);
});

export default router;
