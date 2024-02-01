import axios from "axios";

export default async function loadNotes() {
  try {
    const response = await axios.get("http://localhost:3001/");

    if (response.status === 204) {
      return [];
    }

    const notes = response.data;
    return notes;
  } catch (err) {
    console.log(err);
    return [];
  }
}
