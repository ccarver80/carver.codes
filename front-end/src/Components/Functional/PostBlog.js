import React from "react";

function PostBlog() {
    return(
        <div className="admin">
            <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" type="text" />

                            <p></p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription"></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Post Blog</button>
                </form>
        </div>
    )
}

export default PostBlog; 