import { useState, useEffect } from "react"

import { fetchTours } from "../data/index"

export const useFetch = () => {
    const [tours, setTours] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async (abortSignal, isMounted) => {
      if (isMounted) {
        const result = await fetchTours(abortSignal)
        if (result === false) {
            setError(true)
            setLoading(false)
        } else {
            setTours(result)
            setError(false)
            setLoading(false)
        }
      } 
    }
  
    useEffect(() => {
        const abortController = new AbortController()
        const abortSignal = abortController.signal
        let isMounted = true

        setTimeout(() => fetchData(abortSignal, isMounted), 1000)

        return () => {
          isMounted = false
          abortController.abort()
        }
    }, [])

    return [tours, loading, error, setTours]
}

