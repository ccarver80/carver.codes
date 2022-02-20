import React from "react";

function Admin() {
  return (
    <div className="admin">
      <h1>Admin page</h1>
      <div className="admin-buttons">
        <a href="/admin/post-project">
          <button className="addProject">Add Project</button>
        </a>

        <a href="/admin/post-blog">
          <button className="addProject">Add Blog Post</button>
        </a>
        <button className="addProject">Check Mail</button>
      </div>
    </div>
  );
}

export default Admin;
