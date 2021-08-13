import { useEffect, useState } from "react"

import { fetchTours } from "../../data/index"
import Tour from "../../components/item/Tour"
import Loading from "../../components/item/Loading"


const Tours = () => {
    const [tours, setTours] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const result = await fetchTours()
        setTours(result)
        setLoading(false)
    }

    const handleDelete = (id) => {
      const newBlogs = tours.filter(tour => tour.id !== id)
      setTours(newBlogs)
    }

    useEffect(() => {
        setTimeout(fetchData, 1000)
    },[])
  
    return (
      <div>
        {loading && <Loading />}
        {tours && tours.map(tour => {
          return <Tour key={tour.id} name={tour.name} handleDelete={() => handleDelete(tour.id)}/>
        })}
      </div>
    );
}

export default Tours