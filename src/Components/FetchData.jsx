import React from 'react'
import UseFetch from './UseFetch'
import "./FetchData.css"


const DataCard = ({ index, benefits, best_time_to_intake, image, importance, name }) => {
    return <li key={index} className='list_data'>
        <h3>{name}</h3>
        <p><strong>Importance: </strong>{importance}</p>
        <p><strong>Benefits: </strong>{benefits}</p>
        <p><strong>Time to eat: </strong>{best_time_to_intake}</p>
    </li>
}

const FetchData = () => {
    const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15")
    console.log("fetchData: ", data)
    return (
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
                {data && data.map((e, index) => <><DataCard index={index} {...e} /></>)}
            </ul>
        </>
    )
}

export default FetchData