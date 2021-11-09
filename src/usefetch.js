import { useState, useEffect } from "react";

const useFetch = (url) => {

    const[data, setData] = useState([]);

    const[loading, setLoading] = useState(true);

    const[error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('couldn\'t fetch the data for that resourse');
                };
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
        },1000);
    },[url])
    return {data, loading, error}
}
 
export default useFetch;