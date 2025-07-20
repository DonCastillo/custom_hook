import UseFetch from "./UseFetch";

const DataCard = ({ index, name, benefits, time_duration }) => {
    return <li key={index} className='list_data'>
        <h3>{name}</h3>
        <p><strong>Benefits: </strong>{benefits}</p>
        <p><strong>Duration: </strong>{time_duration}</p>
    </li>
}

const FetchYogaData = () => {
    const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
    return (
        <>
            <ul className="list_data_main">
                <h1 className='usefetch_heading'>Fetching Yoga Data</h1>
                {data && data.map((e, index) => <><DataCard index={index} {...e} /></>)}
            </ul>
        </>
    )
}

export default FetchYogaData;