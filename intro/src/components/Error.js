import React, { Fragment } from 'react'
import useJsonFetch from '../hooks/useJsonFetch';
export default function Data() {
    const [data, loading, error] = useJsonFetch(
        'http://localhost:7070/error',
        {}
    );
    console.log(error)
    return (
        <div>{loading ? 'Загрузка' : data.status}</div>
    );
}















