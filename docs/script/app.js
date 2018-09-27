import { PaymentModels, IntentCodes, TextInput, NumericInput, TextAreaInput } from 'Components';
import { Uplatnica } from 'Uplatnica';

ReactDOM.render(
    <form>
        <fieldset className="fieldset-platitelj">
            <h2>Platitelj</h2>
            <TextInput label="Ime i prezime / Naziv:" />
            <TextInput label="Adresa:" />
            <TextInput label="Poštanski broj:" />
            <TextInput label="Grad/mjesto:" />
        </fieldset>
        <fieldset className="fieldset-primatelj">
            <h2>Primatelj</h2>
            <TextInput label="Ime i prezime / Naziv:" />
            <TextInput label="Adresa:" />
            <TextInput label="Poštanski broj:" />
            <TextInput label="Grad/mjesto:" />
        </fieldset>
        <fieldset className="fieldset-brojke">
            <TextInput label="IBAN / Račun primatelja:" className="fieldset-brojke__racun" />
            <NumericInput label="Iznos:" className="fieldset-brojke__iznos" />
            <br/>
            <PaymentModels className="fieldset-brojke__model" />
            <TextInput label="Poziv na broj:" className="fieldset-brojke__na-broj" />
            <IntentCodes clasName="fieldset-brojke__namjena" />
            <TextAreaInput label="Opis plaćanja:" />
        </fieldset>
        <Uplatnica />
    </form>
, document.getElementById('container') );