import { useEffect, useState } from "react"

import { fetchTours } from "../../data/index"

const Tours = () => {
    const [tours, setTours] = useState(null)

    const fetchData = async () => {
        const result = await fetchTours()
        if (result.length === 0) {
            throw new Error("Empty tours array")
        }
        setTours(result)
    }

    const handleDelete = (id) => {
      const newBlogs = tours.filter(tour => tour.id !== id)
      setTours(newBlogs)
    }

    useEffect(() => {
        fetchData()
    },[])
  
    return (
      <div>
        {tours && tours.map(tour => {
          return (
        <div key={tour.id}>
          <li>{tour.name}</li>
          <button onClick={() => handleDelete(tour.id)}>{"Delete"}</button>
        </div>
          )
        })}
      </div>
    );
}

export default Tours