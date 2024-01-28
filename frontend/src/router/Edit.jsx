import { Form, useLoaderData } from "react-router-dom";

export default function Edit() {
  const note = useLoaderData();
  console.log(note);

  return (
    <Form method="post">
      <label>
        <span>Note Title</span>
        <input
          type="text"
          name="title"
          placeholder="Enter the title of the note"
          defaultValue={note.title}
        />
      </label>
      <label>
        <span>Note Content</span>
        <textarea
          type="text"
          name="content"
          placeholder="Enter the content of the note"
          defaultValue={note.content}
        />
      </label>
      <button type="submit">Create</button>
    </Form>
  );
}
