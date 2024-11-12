import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BreweryInfo() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('http://localhost:8001/brewery', {
                    params: {
                        page: page,
                        perPage: 10
                    }
                });
                setData(prevData => [...prevData, ...response.data.data]);
            } catch (error) {
                setError('데이터를 불러오는 중 오류가 발생했습니다.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

    return (
        <div>
            <h1>Brewery Information</h1>
            <ul>
                {data.map((brewery, index) => (
                    <li key={index}>
                        <h3>{brewery.제조사}</h3>
                        <p>대표자명: {brewery.대표자명}</p>
                        <p>주소: {brewery.주소}</p>
                        <p>주종: {brewery.주종}</p>
                        <p>연락처: {brewery.연락처}</p>
                        <p>홈페이지: {brewery.홈페이지}</p>
                    </li>
                ))}
            </ul>
            {loading && <p>데이터를 불러오는 중입니다...</p>}
            {error && <p>{error}</p>}
            <button onClick={() => setPage(prev => prev + 1)} disabled={loading}>
                Load More
            </button>
        </div>
    );
}

export default BreweryInfo;