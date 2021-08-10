import { useState } from "react"

function App() {
  const [blogs, setBlogs] = useState([
    {id: 1, name: "Blog1", body: "Blah blah blah"},
    {id: 2, name: "Blog2", body: "Blah blah blah"},
    {id: 3, name: "Blog3", body: "Blah blah blah"}
  ])
  console.log("blogs", blogs)


  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
    console.log("blogs filtered", blogs)
  }

  return (
    <div>
      {blogs.map(blog => {
        return (
      <div key={blog.id}>
        <li>{blog.name}</li>
        <button onClick={() => handleDelete(blog.id)}>{"Delete"}</button>
      </div>
        )
      })}
    </div>
  );
}

export default App;
