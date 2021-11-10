import { useState, useEffect } from "react";

const useFetch = (url) => {

    const[data, setData] = useState([]);

    const[loading, setLoading] = useState(true);

    const[error, setError] = useState(null)

    useEffect(()=>{
        const abortcont = new AbortController();
        setTimeout(()=>{
        fetch(url, {signal: abortcont.signal})
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
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                setLoading(false);
                setError(err.message);
                }
            })
        },1000);

        return () => abortcont.abort();
    },[url])
    return {data, loading, error}
}
 
export default useFetch;