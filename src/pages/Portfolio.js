import React from 'react'
import Furiendr from '../screenshots/furiendr.png'
import Ponder from '../screenshots/ponder.png'

export default function Portfolio() {
    return (
    <>
        <a href="https://mweyer.github.io/First-Group-Project/">
            <img src={Furiendr} />
        </a>
        <p>Furiendr</p>
        <br></br>
        <a href="https://pacific-ravine-12135.herokuapp.com/">
            <img src={Ponder} />
        </a>
        <p>Ponder</p>
        <br></br>
    </>
    )
}
