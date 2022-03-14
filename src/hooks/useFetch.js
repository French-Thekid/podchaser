import { useEffect, useState } from 'react'

/**
 * A react hook created to handle fetch request and return not only the data but loading and errors if
 * any which can be used to render appropriate elements to the dom for better user experience.
 *
 * This somewhat allows us to treat restAPI like GraphQl in terms of extracting, data, loading and errors
 *
 * */

const useFetch = ({ url }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  if (!url) throw Error('useFetch hook missing url!')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(` https://api.podchaser.com/${url}`, {
          headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
          },
        })

        if (res.ok) {
          const json = await res.json()
          setData(json)
        } else setError(res)

        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [])
  return { data, error, loading }
}

export default useFetch
