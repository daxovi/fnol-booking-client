import React, { useState, useEffect } from 'react';
import './Booking.css';
import Map from './Map';
import Summary from './Summary';
import Step from './components/Step';
import FloorSelector from './components/FloorSelector';
import { nacteniTicketu } from './components/api';
import text from './text.json';


const Booking = () => {

    const [obsazene, setObsazene] = useState([]);
    const [vybrane, setVybrane] = useState([]);
    const [floor, setFloor] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        nacteniTicketu()
            .then(data => {
                setObsazene(data); // Nastaví získaná data
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const handleClick = (e) => {
        if (checkAvailability(e.target.id)) {
            var index = vybrane.indexOf(e.target.id);
            if (index === -1) {
                setVybrane(arr => [...arr, e.target.id]);
            } else {
                var newArray = [...vybrane];
                newArray.splice(index, 1);
                setVybrane(newArray);
                e.target.style.fill = "#23c258";
            }
        }
    }

    const checkAvailability = (ticket) => {
        return !obsazene.includes(ticket)
    }

    const reset = async () => {
        setIsLoading(true);
        vybrane.forEach(ticket => {
            const place = document.getElementById(ticket);
            place.style.fill = "#23c258";
        });
        try {
            const arr = await nacteniTicketu();
            setObsazene(arr);
            setVybrane([]);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='booking'>
            <div>
            {text.vitejte}
            </div>
            <div className="row">
                <Step number="1" name="Vyberte si podlaží" />
                <p>
                {text.step_one}
                </p>
                <FloorSelector floor={floor} setFloor={setFloor} />
                <Step number="2" name="Vyberte si místa" />
                <p>
                {text.step_two}
                </p>
                <Map click={handleClick} vybrane={vybrane} obsazene={obsazene} floor={floor} isLoading={isLoading} />
                <Step number="3" name="Dokončete rezervaci" />
                <p>
                {text.step_three}
                </p>
                <Summary vybrane={vybrane} reset={reset} />
            </div>
        </div>
    )
}

export default Booking