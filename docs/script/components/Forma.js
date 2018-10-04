import { PaymentModels, IntentCodes, TextInput, NumericInput, TextAreaInput } from 'Components';
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
                    <TextInput id="platitelj__ime" label="ime i prezime / naziv" onChange={this.handleInputChange} value={nalog.platitelj__ime} invalid={validation.platitelj__ime} />
                    <TextInput id="platitelj__adresa" label="adresa" onChange={this.handleInputChange} value={nalog.platitelj__adresa} invalid={validation.platitelj__adresa}/>
                    <TextInput id="platitelj__gradMjesto" label="grad/mjesto" onChange={this.handleInputChange} value={nalog.platitelj__gradMjesto} invalid={validation.platitelj__gradMjesto}/>
                </fieldset>
                <fieldset className="fieldset-primatelj">
                    <TextInput id="primatelj__ime" label="ime i prezime / naziv" onChange={this.handleInputChange} value={nalog.primatelj__ime} invalid={validation.primatelj__ime}/>
                    <TextInput id="primatelj__adresa" label="adresa" onChange={this.handleInputChange} value={nalog.primatelj__adresa} invalid={validation.primatelj__adresa}/>
                    <TextInput id="primatelj__gradMjesto" label="grad/mjesto" onChange={this.handleInputChange} value={nalog.primatelj__gradMjesto} invalid={validation.primatelj__gradMjesto}/>
                </fieldset>
                <fieldset className="fieldset-brojke">
                    <TextInput id="iznos" label="iznos uplate" className="form-field--iznos" onChange={this.handleInputChange} value={nalog.iznos} invalid={validation.iznos}/>
                    <TextInput id="primatelj__iban" label="IBAN primatelja" className="form-field--iban" onChange={this.handleInputChange} value={nalog.primatelj__iban} invalid={validation.primatelj__iban} maxLength={21}/>
                    <br/>
                    <PaymentModels id="primatelj__model" className="form-field--model" onChange={this.handleInputChange} value={nalog.primatelj__model} invalid={validation.primatelj__model}/>
                    <TextInput id="primatelj__pozivNaBroj" className="form-field--poziv-na-broj" onChange={this.handleInputChange} value={nalog.primatelj__pozivNaBroj} invalid={validation.primatelj__pozivNaBroj}/>
                    <IntentCodes id="sifra__namjene" className="form-field--sifra-namjene"  onChange={this.handleInputChange} value={nalog.sifra__namjene} invalid={validation.sifra__namjene}/>
                    <TextAreaInput id="opis_placanja" className="form-field--opis" label="opis plaćanja" onChange={this.handleInputChange} value={nalog.opis_placanja} invalid={validation.opis_placanja}/>
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