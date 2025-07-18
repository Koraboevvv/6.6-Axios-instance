import { useState, useEffect } from "react"
import { api } from "../api"

export const usefetch = (endpoint , params) => {
    const [data ,setData] = useState(null)
    const [error , setError] = useState(null)
    const [loading ,setLoading] = useState(null)

    useEffect(() => {
        api
            .get(endpoint,{params})
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [endpoint , JSON.stringify(params)])
    
    return{data , error , loading}
}
