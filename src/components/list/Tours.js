import { useEffect, useState } from "react"

import { fetchTours } from "../../data/index"
import Tour from "../../components/item/Tour"
import Loading from "../../components/item/Loading"
import Error from "../../components/item/Error"

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
        {tours && tours.map(tour => {
          return <Tour key={tour.id} name={tour.name} handleDelete={() => handleDelete(tour.id)}/>
        })}
        {error && <Error />}
      </div>
    );
}

export default Tours