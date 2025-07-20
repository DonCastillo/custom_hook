import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if(!url) return;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                console.error("Fetch error: ", error)
                setData(null)
            })
    }, [url])

    return [data];
}

export default UseFetch
