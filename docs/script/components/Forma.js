import { PaymentModels, IntentCodes, TextInput, NumericInput, TextAreaInput } from 'Components';

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
            <form>
                <fieldset className="fieldset-platitelj">
                    <h2>Platitelj</h2>
                    <TextInput id="platitelj__ime" label="Ime i prezime / Naziv:" onChange={this.handleInputChange} value={nalog.platitelj__ime} invalid={validation.platitelj__ime} />
                    <TextInput id="platitelj__adresa" label="Adresa:" onChange={this.handleInputChange} value={nalog.platitelj__adresa} invalid={validation.platitelj__adresa}/>
                    <TextInput id="platitelj__postanskiBroj" label="Poštanski broj:" onChange={this.handleInputChange} value={nalog.platitelj__postanskiBroj} invalid={validation.platitelj__postanskiBroj}/>
                    <TextInput id="platitelj__gradMjesto" label="Grad/mjesto:" onChange={this.handleInputChange} value={nalog.platitelj__gradMjesto} invalid={validation.platitelj__gradMjesto}/>
                </fieldset>
                <fieldset className="fieldset-primatelj">
                    <h2>Primatelj</h2>
                    <TextInput id="primatelj__ime" label="Ime i prezime / Naziv:" onChange={this.handleInputChange} value={nalog.primatelj__ime} invalid={validation.primatelj__ime}/>
                    <TextInput id="primatelj__adresa" label="Adresa:" onChange={this.handleInputChange} value={nalog.primatelj__adresa} invalid={validation.primatelj__adresa}/>
                    <TextInput id="primatelj__postanskiBroj" label="Poštanski broj:" onChange={this.handleInputChange} value={nalog.primatelj__postanskiBroj} invalid={validation.primatelj__postanskiBroj}/>
                    <TextInput id="primatelj__gradMjesto" label="Grad/mjesto:" onChange={this.handleInputChange} value={nalog.primatelj__gradMjesto} invalid={validation.primatelj__gradMjesto}/>
                </fieldset>
                <fieldset className="fieldset-brojke">
                    <TextInput id="primatelj__iban" label="IBAN / Račun primatelja:" className="fieldset-brojke__racun" onChange={this.handleInputChange} value={nalog.primatelj__iban} invalid={validation.primatelj__iban}/>
                    <TextInput id="iznos" label="Iznos:" className="fieldset-brojke__iznos" onChange={this.handleInputChange} value={nalog.iznos} invalid={validation.iznos}/>
                    <br/>
                    <PaymentModels id="primatelj__model" className="fieldset-brojke__model" onChange={this.handleInputChange} value={nalog.primatelj__model} invalid={validation.primatelj__model}/>
                    <TextInput id="primatelj__pozivNaBroj" label="Poziv na broj:" className="fieldset-brojke__poziv-na-broj" onChange={this.handleInputChange} value={nalog.primatelj__pozivNaBroj} invalid={validation.primatelj__pozivNaBroj}/>
                    <IntentCodes id="sifra__namjene" className="fieldset-brojke__namjena"  onChange={this.handleInputChange} value={nalog.sifra__namjene} invalid={validation.sifra__namjene}/>
                    <TextAreaInput id="opis_placanja" label="Opis plaćanja:" onChange={this.handleInputChange} value={nalog.opis_placanja} invalid={validation.opis_placanja}/>
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