import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* For search form and create button */}
      <div id="sidebar">
        <h1>Notes App</h1>
        <div>
          <form>
            <input type="search" placeholder="Search" name="q" />
          </form>
          <form>
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a>Note1</a>
            </li>
            <li>
              <a>Note2</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="children">
        <Outlet />
      </div>
    </>
  );
}
