import config from '../config.json';

export const nahraniObjednavky = async (vybrane, email) => {
    if (vybrane.length > 0) {
        try {
            const obsazene = await nacteniTicketu();

            let isTicketTaken = obsazene.some(obsazenyTicket => vybrane.includes(obsazenyTicket));

            if (isTicketTaken) {
                throw new Error('Vybrané vstupenky jsou obsazené');
            }

            var datum = new Date();
            datum.setDate(datum.getDate() + config.delay_dny); // přidání dní
            datum.setHours(23, 59, 0, 0); // nastavení na půlnoc
            const expireDate = datum.getTime();

            // Příprava pole objektů pro vložení
            const ticketObjects = vybrane.map(ticket => ({
                ticket: ticket,
                email: email,
                notes: "",
                date: expireDate
            }));

            const response = await fetch(process.env.REACT_APP_BACKEND + "/save-ticket", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(ticketObjects) // Odeslání celého pole ticketů
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();

        } catch (error) {
            console.error('Chyba při načítání nebo vkládání ticketů:', error);
            throw error;
        }
    }
};


export const nacteniTicketu = async () => {
    const now = Date.now();
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND + '/get-tickets')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } else {
            const data = await response.json();
            let arr = [];
            data.documents.forEach((ticket) => {
                if (now < ticket.date) {
                    arr = [...arr, ticket.ticket]
                }
            })
            return arr;
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const odeslatEmail = async (to, subject, text, html) => {
    try {
        const body = { to, subject, text, html };
        const response = await fetch(process.env.REACT_APP_BACKEND + '/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        if (response.ok) {
            console.log('E-mail byl úspěšně odeslán:', data);
        } else {
            console.error('Chyba při odesílání e-mailu:', data);
        }
    } catch (error) {
        console.error('Chyba při odesílání e-mailu:', error);
    }
}