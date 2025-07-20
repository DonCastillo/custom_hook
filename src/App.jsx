import React from 'react'
import FetchData from './Components/FetchData'
import FetchYogaData from './Components/FetchYogaData'

const styles = {
    display: "flex",
    columnGap: 20,
}

function App() {
    return (
        <div style={styles}>
            <FetchData />
            <FetchYogaData />
        </div>
    )
}

export default App