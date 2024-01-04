import React, { useState, useEffect } from 'react';
import './Booking.css';
import Map from './Map';
import Summary from './Summary';
import Step from './components/Step';
import FloorSelector from './components/FloorSelector';
import { nacteniTicketu } from './components/api';

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
            Vítejte v rezervačním systému pro 23. reprezentační ples Fakultní nemocnice Olomouc! Máme radost, že máte zájem strávit tento výjimečný večer spolu s námi. Aby pro vás bylo zajištění vstupenek co nejpohodlnější, připravili jsme pro vás jednoduchý rezervační proces. V několika krocích si budete moci vybrat z různých typů míst, ať už upřednostňujete být v srdci dění na tanečním parketu nebo si užívat večer s výhledem z galerie. Postupujte krok po kroku a rezervujte si místa, která preferujete.
            </div>
            <div className="row">
                <Step number="1" name="Vyberte si podlaží" />
                <p>
                Začněte výběrem typu místa. Volit můžete mezi přízemím, tedy přímo u tanečního parketu, nebo galerií, která nabízí klidnější prostředí s výhledem na celý sál.
                </p>
                <FloorSelector floor={floor} setFloor={setFloor} />
                <Step number="2" name="Vyberte si místa" />
                <p>
                Nyní přejděte k výběru konkrétních míst. Na interaktivním plánu sálu klikněte na místa, která si přejete rezervovat. Při výběru můžete vidět dostupnost míst a jejich vazbu na taneční parket. Každé vybrané místo bude automaticky přidáno do vaší rezervace. Pokud si chcete vybrat více míst vedle sebe, jednoduše na ně postupně klikněte.
                </p>
                <Map click={handleClick} vybrane={vybrane} obsazene={obsazene} floor={floor} isLoading={isLoading} />
                <Step number="3" name="Dokončete rezervaci" />
                <p>
                    Téměř hotovo! Zkontrolujte svůj výběr vstupenek níže. Pro dokončení rezervace zadejte svůj email a klikněte na 'Rezervovat'.
                </p>
                <Summary vybrane={vybrane} reset={reset} />
            </div>
        </div>
    )
}

export default Booking