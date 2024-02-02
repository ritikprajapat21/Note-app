import { Form, useLoaderData } from "react-router-dom";
import "../styles/view.css";

export default function View() {
  const { status, note } = useLoaderData();

  if (status === 204) {
    return <p>Note does not exist</p>;
  }

  return (
    <>
      <div className="view">
        <h1>{note.title}</h1>
        <p>{note.content || "No content added"}</p>
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            action="delete"
            method="post"
            onSubmit={(e) => {
              if (!confirm("Want to delete this note")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </>
  );
}
