import axios from "axios";

export default async function loadNotes({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  try {
    const response = await axios.get(
      `http://localhost:3001/${q ? `?q=${q}` : ""}`
    );

    if (response.status === 204) {
      return { notes: [], q };
    }

    const notes = response.data;
    return { notes, q };
  } catch (err) {
    console.log(err);
    return { notes: [], q };
  }
}
