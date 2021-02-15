import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [age, setAge] = useState(25);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);


    useEffect(() => {
        // console.log("Use Effect Ran");
        // console.log(name); name
        // 'http://localhost:8000/blogs'


        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }).then(res => {
            console.log(res);
            if (!res.ok) {
                throw Error('Could not fetch the data....!');
            }
            return res.json();
        }).then(data => {
            console.log(data);
            setIsPending(false);
            setData(data);
        }).catch(err => {

            if (err.name === "AbortError") {
                console.log("fetch aborted");
            } else {
                // console.log(err.message);
                setIsError(err.message);
                setIsPending(false);
            }


        })

        return () => console.log('cleanup');
    }, [url]);

    return { data, isPending, isError }
}

export default useFetch;