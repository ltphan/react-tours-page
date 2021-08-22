import { useState, useEffect } from "react"

import { fetchTours } from "../data/index"

export const useFetch = () => {
    const [tours, setTours] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        const result = await fetchTours()
        if (result === false) {
            setError(true)
            setLoading(false)
        } else {
            setTours(result)
            setError(false)
            setLoading(false)
        }
    }
  
    useEffect(() => {
        let isMounted = true
        
        if (isMounted) {
          setTimeout(() => fetchData(), 1000)
        }

        return () => {
          isMounted = false
          console.log("fetch aborted")
        }
    }, [])

    return [tours, loading, error, setTours]
}

