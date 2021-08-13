import { useEffect, useState } from "react"

import { fetchTours } from "../../data/index"
import Tour from "../../components/item/Tour"

const Tours = () => {
    const [tours, setTours] = useState(null)

    const fetchData = async () => {
        const result = await fetchTours()
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
          return <Tour key={tour.id} name={tour.name} handleDelete={() => handleDelete(tour.id)}/>
        })}
      </div>
    );
}

export default Tours