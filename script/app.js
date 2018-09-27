import { PaymentModels, IntentCodes, TextInput, NumericInput } from 'Components';
import { Uplatnica } from 'Uplatnica';

ReactDOM.render(
    <fieldset>
        <NumericInput label="Iznos:" />
        <TextInput label="Račun primatelja:" />
        <TextInput label="Poziv na broj:" />
        <TextInput label="Opis plaćanja:" />
        <PaymentModels />
        <IntentCodes />
        <h2>Platitelj</h2>
        <TextInput label="Ime i prezime:" />
        <TextInput label="Adresa:" />
        <TextInput label="Poštanski broj i mjesto:" />
        <h2>Primatelj</h2>
        <TextInput label="Ime i prezime:" />
        <TextInput label="Adresa:" />
        <TextInput label="Poštanski broj i mjesto:" />
        <Uplatnica />

    </fieldset>
, document.getElementById('container') );