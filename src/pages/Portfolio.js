import React from 'react'
import Furiendr from '../screenshots/furiendr.png'
import Ponder from '../screenshots/ponder.png'
import BrowserParty from '../screenshots/browser-party.png'

export default function Portfolio() {
    return (
    <>
        <ul className="portfolio">
            <li>
                <a href="https://mweyer.github.io/First-Group-Project/">
                    <img className="portfolio-pics" src={Furiendr} />
                </a>
            </li>
            <li>
                <a href="https://pacific-ravine-12135.herokuapp.com/">
                    <img className="portfolio-pics" src={Ponder} />
                </a>
            </li>
            <li>
                <a href="https://browser-party.herokuapp.com/">
                    <img className="portfolio-pics" src={BrowserParty} />
                </a>
            </li>
        </ul>
    </>
    )
}
