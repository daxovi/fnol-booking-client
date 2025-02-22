import React, { useState, useEffect } from 'react';
import ticket from './ticket.jpg';
import './Summary.css'
import { nahraniObjednavky, odeslatEmail } from './components/api';
import config from './config.json';
import textJson from './text.json';

const Summary = ({ vybrane, reset }) => {

    const replaceUnderscore = (string) => {
        return string.replace("_", "/");
    }

    const replaceUnderscoreArray = (array) => {
        const newArray = array.map((x) => replaceUnderscore(x));
        return newArray;
    }

    const listItems = vybrane.map((number) =>
        <li key={number}>{replaceUnderscore(number)}</li>
    );

    var datum = new Date();
    var delay_dny = config.delay_dny;

    for (var i = 0; i < delay_dny; i++) {
        datum.setDate(datum.getDate() + 1); // Přidat jeden den

        // Kontrola, zda je datum víkend (sobota = 6, neděle = 0)
        if (datum.getDay() === 6 || datum.getDay() === 0) {
            delay_dny++; // Pokud ano, přidat další den k celkovému počtu
        }
    }

    datum.setHours(23, 59, 0, 0); // Nastavení na půlnoc
    const expireDate = datum.getTime();

    const [email, setEmail] = useState("")

    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(null);

    const handleSubmit = async (event, vybrane, email) => {
        event.preventDefault();

        setIsSaving(true);
        setSaveSuccess(null);

        try {
            await nahraniObjednavky(vybrane, email, expireDate);
            setSaveSuccess(true);

            const to = email;
            const subject = config['email-predmet'];
            const text = `Vaše vstupenky číslo ${replaceUnderscoreArray(vybrane).join(", ")} jsou rezervované. Vyzvedněte si je po nahlášení vašeho emailu ${email} na pokladně FN Olomouc v budově WA ${textJson.date_from} ${textJson.date_hours}. , nejpozději ${zobrazitDatum(expireDate)}. Po tomto datu bude vaše rezervace stornovaná. Úhradu ceny vstupenek (1.000 Kč/ks) upřednostňujeme platební kartou. Zakoupené vstupenky není možné vracet. Děkujeme za pochopení.`;
            const html = `<h1>Vstupenky na Reprezentační ples FN Olomouc 2025 jsou úspěšně rezervované!</h1><p>Termín konání: pátek 21. 2. 2025</p><p>Místo konání: Výstaviště Flora Olomouc - pavilon A</p><p>Vaše rezervované vstupenky (${replaceUnderscoreArray(vybrane).join(", ")}) si vyzvedněte prosím <b>nejpozději do ${zobrazitDatum(expireDate)}</b> na pokladně FN Olomouc v budově WA nahlášením vašeho emailu ${textJson.date_hours}. <b>Po tomto datu bude vaše rezervace stornovaná.</b></p><p>Úhradu ceny vstupenek (1.000 Kč/ks) upřednostňujeme platební kartou. Zakoupené vstupenky není možné vracet.</p><p>Děkujeme za pochopení.</p>`
            odeslatEmail(to, subject, text, html);
        } catch (error) {
            setSaveSuccess(false);
        } finally {
            setTimeout(() => {
                reset();
                setIsSaving(false);
            }, 300);
        }
    }
    useEffect(() => {
        if (!isSaving && vybrane.length === 1) {
            setIsSaving(false);
            setSaveSuccess(null);
        }
    }, [vybrane])

    const zobrazitDatum = (timestamp) => {
        var datum = new Date(timestamp);
        return datum.toLocaleDateString('cs-CZ'); // pro české formátování
    }

    return (
        <div className="">

            {!isSaving && saveSuccess === null && // Zadávání emailu
                <div className="summary">
                    <div className="title">
                        Vybrané vstupenky ({vybrane.length} vstupenek, číslo stolu/číslo vstupenky)
                    </div>
                    <ul>
                        {listItems}
                    </ul>
                    <form onSubmit={(event) => {
                        handleSubmit(event, vybrane, email);
                    }}>
                        <div>
                            <label for="email">Váš e-mail: </label>
                            <br />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" required />
                        </div>
                        <div>
                            <input type="submit" value="Rezervovat" />
                        </div>
                    </form>
                </div>
            }
            {isSaving && saveSuccess === null &&  // ukládání
                <div className="summary summary-with-icon">
                    <div className="icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="orange" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                        </svg>
                    </div>
                    <div className="status">
                        Vytváření rezervace <br />
                        <strong>Vyčkejte než se dokončí rezervace.</strong>
                    </div>
                </div>
            }
            {saveSuccess && !isSaving && // uloženo
                <div className="summary summary-with-icon">

                    <div className="icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                    <div className="status">
                        Vstupenky jsou úspěšně rezervované! <br />
                        <strong>Vaše rezervované vstupenky si vyzvedněte prosím nejpozději do {`${zobrazitDatum(expireDate)}`} na pokladně FN Olomouc v budově WA nahlášením vašeho emailu {textJson.date_hours}.</strong> <br /> Po tomto datu bude vaše rezervace stornovaná. <br /> Úhradu ceny vstupenek (1.000 Kč/ks) upřednostňujeme platební kartou. Zakoupené vstupenky není možné vracet. <br />Děkujeme za pochopení.
                    </div>
                </div>
            }

            {saveSuccess === false && // neuloženo
                <div className="summary summary-with-icon">
                    <div className="icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                    </div>
                    <div className="status">
                        Vstupenky se nepodařilo rezervovat! <br />

                        Vyberte si nové vstupenky v plánu sálu.
                    </div>
                </div>
            }
        </div>
    )
}

export default Summary