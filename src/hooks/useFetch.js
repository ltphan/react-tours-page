import { useState, useEffect } from "react"

import { fetchTours } from "../data/index"

export const useFetch = () => {
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

    useEffect(() => {
        setTimeout(fetchData, 1000)
    }, [])

    return [tours, loading, error, setTours]
}

