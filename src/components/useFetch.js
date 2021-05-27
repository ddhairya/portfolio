import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // purposely making 500 ms delay to display the loading effect.
        setTimeout(() => {


            fetch(url)
            .then( res => { 
                if (!res.ok){
                    throw Error('Could no Fetch the data for that resource path')
                }
                return res.json()
            })
            .then( data => {
                // need to use special type of set data for github pages.
                if(url.includes("github")){
                    setData(data.blogs)
                }else{
                    setData(data)
                }
                setIsLoading(false)
                setError(null)
            })
            .catch( err => {
                setIsLoading(false)
                setError(err.message)
            })


        },500)        
    },[url])

    return { data, isLoading, error}
}
 
export default useFetch;