import { useState, useEffect } from "react"
import axios from "axios"
import { useAppContext } from "./useAppContext"

export const useFetch = (url) => {
  const { baseURL, accessToken } = useAppContext()
  const [response, setResponse] = useState({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    const { token, cancel } = axios.CancelToken.source()
    ;(async () => {
      try {
        const { data } = await axios({
          baseURL,
          url,
          headers: { "Access-Token": accessToken },
          cancelToken: token,
        })

        setResponse(data)
      } catch (error) {}
    })()

    return () => cancel()
  }, [url, accessToken, baseURL])

  return response
}
