import { useEffect, useState } from "react"

import { fetchTours } from "../../data/index"
import Tour from "../item/Tour"
import Loading from "../item/Loading"
import Error from "../item/Error"

const Tours = () => {
    const [tours, setTours] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
      try {
        const result = await fetchTours()
        setTours(result)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
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
        {error && <Error />}
        {tours && tours.map(tour => {
          return <Tour key={tour.id} name={tour.name} handleDelete={() => handleDelete(tour.id)}/>
        })}
      </div>
    );
}

export default Tours