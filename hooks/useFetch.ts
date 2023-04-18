import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint: string, query: any) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': "11e2df8f24mshb3910dea1fc6637p1fb135jsnfabf3efc268a",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;