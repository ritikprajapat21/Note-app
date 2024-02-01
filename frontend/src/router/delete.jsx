import axios from "axios";
import { redirect } from "react-router-dom";

export default async function Delete({ params }) {
  const { id } = params;
  try {
    await axios.delete(`http://localhost:3001/${id}`);
    return redirect("/");
  } catch (error) {
    throw Error("Couldn't delete the note. Please try again");
  }
}
