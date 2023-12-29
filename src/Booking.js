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

    useEffect(() => {
        nacteniTicketu()
            .then(data => {
                setObsazene(data); // Nastaví získaná data
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
        vybrane.forEach(ticket => {
            const place = document.getElementById(ticket);
            place.style.fill = "#23c258";
        });
        try {
            const arr = await nacteniTicketu();
            console.log("DEBUG: nacteni ticketu v reset");
            console.log(arr);
            setObsazene(arr);
            setVybrane([]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='booking'>
            <div>
                Vítejte v online rezervačním systému pro nadcházející ples Fakultní nemocnice Olomouc! Jsme nadšeni, že máte zájem strávit tento výjimečný večer spolu s námi. Abychom vám zajištění vstupenek učinili co nejpohodlnějším, připravili jsme pro vás tento jednoduchý rezervační proces. V následujících krocích si budete moci vybrat z různých typů míst, ať už preferujete být v srdci dění na tanečním parketu nebo si užívat večer s výhledem z galerie. Postupujte podle jednotlivých kroků a rezervujte si místa, která vám zajistí nezapomenutelný zážitek z našeho plesu. Děkujeme, že jste si pro váš speciální večer vybrali právě nás a těšíme se na vaši účast!
            </div>
            <div className="row">
                <Step number="1" name="Vyberte si podlaží" />
                <p>
                    Začněte výběrem typu místa. Máte na výběr mezi místem v přízemí přímo u tanečního parketu, kde budete mít bezprostřední zážitek z plesu a budete v centru dění, nebo si můžete vybrat místo na galerii, které nabízí klidnější prostředí s fantastickým výhledem na taneční parket a celý sál.
                </p>
                <FloorSelector floor={floor} setFloor={setFloor} />
                <Step number="2" name="Vyberte si místa" />
                <p>
                    Nyní přejděte k výběru vašich konkrétních míst. Na interaktivní mapě sálu klikněte na místa, která si přejete rezervovat. Při výběru můžete vidět dostupnost jednotlivých míst a jejich umístění ve vztahu k tanečnímu parketu. Každé vybrané místo bude automaticky přidáno do vaší rezervace. Pokud si chcete vybrat více míst vedle sebe, jednoduše na ně postupně klikněte.
                </p>
                <Map click={handleClick} vybrane={vybrane} obsazene={obsazene} floor={floor} />
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