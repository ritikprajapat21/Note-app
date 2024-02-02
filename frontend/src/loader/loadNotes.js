import axios from "axios";

export default async function loadNotes({ request }) {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    console.log(q);
    const response = await axios.get(
      `http://localhost:3001/${q ? `?q=${q}` : ""}`
    );

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
