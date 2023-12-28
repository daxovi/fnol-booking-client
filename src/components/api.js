import config from '../config.json';

export const vlozeniTicketu = async (ticket, email) => {
    const now = Date.now();
    const delay = config.delay;
    const expireDate = now + delay;

    try {
        const response = await fetch(process.env.REACT_APP_BACKEND + "/save-ticket", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                ticket: ticket,
                email: email,
                notes: "",
                date: expireDate
            })
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const nahraniObjednavky = async (vybrane, email) => {
    if (vybrane.length > 0) {
        try {
            const obsazene = await nacteniTicketu();

            let isTicketTaken = obsazene.some(obsazenyTicket => vybrane.includes(obsazenyTicket));

            if (isTicketTaken) {
                throw new Error('vybrané vstupenky jsou obsazené');
            }

            for (const ticket of vybrane) {
                await vlozeniTicketu(ticket, email);
            }
            console.log("DEBUG: vráceno return 1");
        } catch (error) {
            console.error('Chyba při načítání nebo vkládání ticketů:', error);
            throw error; // Znovu vyvolání chyby pro zachycení v nadřazené funkci
        }
    }
}

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
                    console.log(ticket.ticket)
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

export const odeslatEmail = async (to, subject, text) => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND + '/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to, subject, text })
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