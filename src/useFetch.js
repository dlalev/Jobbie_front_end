import { useState, useEffect } from "react";

const useFetch = () => {

    const [posts, setPosts] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    console.log('use effect ran');
        fetch('http://localhost:8000/posts')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPosts(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            })
}