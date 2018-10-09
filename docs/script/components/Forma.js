import { ConnectedPaymentModels } from 'PaymentModels';
import { ConnectedIntentCodes } from 'IntentCodes';
import { ConnectedTextArea } from 'TextArea';
import { ConnectedTextInput } from 'TextInput';
import { Barcode } from 'Barcode';
import { FormatCurrency } from 'Format';
class Forma extends React.Component {
    constructor() {
        super();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleInputChange(ev) {
        if(this.props.onUserInput) {
            this.props.onUserInput(ev.target.id, ev.target.value);
        }
    }

    handleOnClick(ev) {
        ev.preventDefault();
        this.props.onAction(ev.target.name);
    }

    render() {

        const nalog = this.props.nalog,
              validation = this.props.validation;

        return(
            <form className="uplatnica" >
                <img className="uplatnica__img" src="./img/uplatnica.jpg"/>
                <fieldset className="fieldset-platitelj">
                    <ConnectedTextInput nalog={nalog} validation={validation} id="platitelj__ime" label="ime i prezime / naziv" onChange={this.handleInputChange} />
                    <ConnectedTextInput nalog={nalog} validation={validation} id="platitelj__adresa" label="adresa" onChange={this.handleInputChange} />
                    <ConnectedTextInput nalog={nalog} validation={validation} id="platitelj__gradMjesto" label="grad/mjesto" onChange={this.handleInputChange} />
                </fieldset>
                <fieldset className="fieldset-primatelj">
                    <ConnectedTextInput nalog={nalog} validation={validation} id="primatelj__ime" label="ime i prezime / naziv" onChange={this.handleInputChange} />
                    <ConnectedTextInput nalog={nalog} validation={validation} id="primatelj__adresa" label="adresa" onChange={this.handleInputChange} />
                    <ConnectedTextInput nalog={nalog} validation={validation} id="primatelj__gradMjesto" label="grad/mjesto" onChange={this.handleInputChange} />
                </fieldset>
                <fieldset className="fieldset-brojke">
                    <ConnectedTextInput nalog={nalog} validation={validation} id="iznos" label="iznos uplate" className="form-field--iznos" onChange={this.handleInputChange}/>
                    <ConnectedTextInput nalog={nalog} validation={validation} id="primatelj__iban" label="IBAN primatelja" className="form-field--iban" onChange={this.handleInputChange} maxLength={21}/>
                    <br/>
                    <ConnectedPaymentModels nalog={nalog} validation={validation} id="primatelj__model" className="form-field--model" onChange={this.handleInputChange} />
                    <ConnectedTextInput nalog={nalog} validation={validation} id="primatelj__pozivNaBroj" className="form-field--poziv-na-broj" onChange={this.handleInputChange} />
                    <ConnectedIntentCodes nalog={nalog} validation={validation} id="sifra__namjene" className="form-field--sifra-namjene"  onChange={this.handleInputChange} />
                    <ConnectedTextArea nalog={nalog} validation={validation} id="opis_placanja" className="form-field--opis" label="opis plaćanja" onChange={this.handleInputChange} />
                </fieldset>
                <Barcode {...this.props} />
                <fieldset className="fieldset-potvrda">
                    <div className="potvrda-field potvrda-field--iznos">{FormatCurrency(nalog.iznos)}</div>
                    <div className="potvrda-field potvrda-field--iban">{nalog.primatelj__iban}</div>
                    <div className="potvrda-field potvrda-field--model-i-poziv-na-broj">{nalog.primatelj__model} {nalog.primatelj__pozivNaBroj}</div>
                    <div className="potvrda-field potvrda-field--opis-placanja">{nalog.opis_placanja}</div>
                </fieldset>
                <fieldset className="fieldset-novi-nalog">
                    <button name="novi-nalog" onClick={this.handleOnClick}>NOVI NALOG</button>
                    <button name="print" onClick={this.handleOnClick}>ISPIS NALOGA</button>
                </fieldset>
            </form>
        );
    }
}

export { Forma };