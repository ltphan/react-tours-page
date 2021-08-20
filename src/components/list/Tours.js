import { useFetch } from "../../hooks/useFetch"
import Tour from "../item/Tour"
import Loading from "../item/Loading"
import Error from "../item/Error"

const Tours = () => {
    const [tours, loading, error, setTours] = useFetch()

    const handleDelete = (id) => {
      const newBlogs = tours.filter(tour => tour.id !== id)
      setTours(newBlogs)
    }

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