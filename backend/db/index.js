import mongoose from "mongoose";
import fs from "fs/promises";
import NoteModel from "./schema.js";

export default async function connect() {
  console.log("Connecting to database");
  const conn = await mongoose.connect("mongodb://172.18.0.2:27017/mongodb", {
    authSource: "admin",
    user: "root",
    pass: "password",
  });

  if (!conn) return console.log("Cannot connect to Database");

  console.log("Connected to database");

  await fs.readFile("./db/seed.json", "utf-8", async (err, data) => {
    if (err) return console.log(err);
    const entries = JSON.parse(data);
    console.log(entries);
    await NoteModel.insertMany(entries);
    console.log("Enteries inserted");
  });

  return conn;
}
