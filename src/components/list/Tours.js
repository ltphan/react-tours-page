import { useState } from "react"

import mockData from "../../data/index"

const Tours = () => {
    const [blogs, setBlogs] = useState(mockData)

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs)
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

export default Tours