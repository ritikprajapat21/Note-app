import { Form, useLoaderData } from "react-router-dom";

export default function View() {
  const note = useLoaderData();

  return (
    <>
      <div>
        <h1>{note.title}</h1>
        <p>{note.content || "No content added"}</p>
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form action="delete">
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </>
  );
}
