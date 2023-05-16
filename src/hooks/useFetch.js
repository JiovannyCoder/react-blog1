import { useState, useEffect } from "react";

const useFetch = (url) => {
    const abortConst = new AbortController();

    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch(url, { signal: abortConst.signal })
        .then(res => {
            if(!res.ok) {
                throw new Error('Failed to load the resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setError(null)
            setIsPending(false)
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message)
                setIsPending(false)
            }
        })
        // return () => abortConst.abort();
    },[url])
    
    return { data, isPending, error };
}

export default useFetch;
