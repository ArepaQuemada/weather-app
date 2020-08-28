import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DayPage() {

    useEffect(() => {

    }, [])

    let { id } = useParams();
    console.log(id);
    return (
        <div>
            Pagina de dia
        </div>
    )
}