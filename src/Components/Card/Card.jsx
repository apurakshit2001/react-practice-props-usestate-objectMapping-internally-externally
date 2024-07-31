import React, { useState } from 'react'
import './Card.css'

const Card = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1); };
    
    return (
        <div className='card'>
            <h1 className='cardName'>{props.cardName}</h1>

            <p className='carddescription'>{props.cardDescription}</p>

            <p className='cardCounter'>Clicked : <span>{count}</span></p>

            <button className="button-64" role="button" onClick={increment}>
                <span className="text">{props.buttonName}</span>
            </button>
        </div>
    )
}

export default Card
