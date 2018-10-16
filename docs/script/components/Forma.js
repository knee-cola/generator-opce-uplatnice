import { ConnectedPaymentModels } from 'PaymentModels';
import { ConnectedIntentCodes } from 'IntentCodes';
import { ConnectedTextArea } from 'TextArea';
import { ConnectedTextInput } from 'TextInput';
import { ConnectedPotvrda } from 'Potvrda';
import { ConnectedBarcode } from 'Barcode';
class Forma extends React.Component {
    constructor() {
        super();

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(ev) {
        ev.preventDefault();
        this.props.onAction(ev.target.name);
    }

    render() {

        return(
            <form className="uplatnica" >
                <img className="uplatnica__img" src="./img/uplatnica.jpg"/>
                <fieldset className="fieldset-platitelj">
                    <ConnectedTextInput id="platitelj__ime" label="ime i prezime / naziv" />
                    <ConnectedTextInput id="platitelj__adresa" label="adresa" />
                    <ConnectedTextInput id="platitelj__gradMjesto" label="grad/mjesto" />
                </fieldset>
                <fieldset className="fieldset-primatelj">
                    <ConnectedTextInput id="primatelj__ime" label="ime i prezime / naziv" />
                    <ConnectedTextInput id="primatelj__adresa" label="adresa" />
                    <ConnectedTextInput id="primatelj__gradMjesto" label="grad/mjesto" />
                </fieldset>
                <fieldset className="fieldset-brojke">
                    <ConnectedTextInput id="iznos" label="iznos uplate" className="form-field--iznos"/>
                    <ConnectedTextInput id="primatelj__iban" label="IBAN primatelja" className="form-field--iban" maxLength={21}/>
                    <br/>
                    <ConnectedPaymentModels id="primatelj__model" className="form-field--model" />
                    <ConnectedTextInput id="primatelj__pozivNaBroj" className="form-field--poziv-na-broj" />
                    <ConnectedIntentCodes id="sifra__namjene" className="form-field--sifra-namjene"  />
                    <ConnectedTextArea id="opis_placanja" className="form-field--opis" label="opis plaćanja" />
                </fieldset>
                <ConnectedBarcode {...this.props} />
                <ConnectedPotvrda />
                <fieldset className="fieldset-novi-nalog">
                    <button name="novi-nalog" onClick={this.handleOnClick}>NOVI NALOG</button>
                    <button name="print" onClick={this.handleOnClick}>ISPIS NALOGA</button>
                </fieldset>
            </form>
        );
    }
}

export { Forma };