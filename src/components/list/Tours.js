import { useEffect, useState } from "react"

import mockData from "../../data/index"

const Tours = () => {
    const [blogs, setBlogs] = useState(null)
    console.log(blogs)

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs)
    }

    useEffect(() => {
        setBlogs(mockData)
        console.log("useEffect runs after every render")
    },[])
  
    return (
      <div>
        {blogs && blogs.map(blog => {
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