import { Suspense, useEffect } from "react";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

export default function Root() {
  const { notes, q } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      {/* For search form and create button */}
      <Suspense fallback={<Fallback />}>
        <div id="sidebar">
          <h1>Notes App</h1>
          <div>
            <Form role="search">
              <input
                type="search"
                placeholder="Search"
                id="q"
                name="q"
                defaultValue={q}
                onChange={(e) => submit(e.currentTarget.form)}
              />
            </Form>
            <Form method="post" action="create">
              <Link to="create">New</Link>
            </Form>
          </div>
          <nav>
            {notes.length > 0 ? (
              <ul>
                {notes.map((note) => {
                  return (
                    <li key={note._id}>
                      <NavLink to={note._id}>{note.title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <>
                <Link to="/create">No note available. Create a note</Link>
              </>
            )}
          </nav>
        </div>
        <div id="children">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
}

function Fallback() {
  return <p>Content is loading...</p>;
}
