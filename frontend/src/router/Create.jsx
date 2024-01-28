import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Form method="post">
      <label>
        <span>Note Title</span>
        <input
          type="text"
          name="title"
          placeholder="Enter the title of the note"
        />
      </label>
      <label>
        <span>Note Content</span>
        <textarea
          type="text"
          name="content"
          placeholder="Enter the content of the note"
        />
      </label>
      <button type="submit">Create</button>
    </Form>
  );
}
