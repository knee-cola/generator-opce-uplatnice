import { PaymentModels, IntentCodes, TextInput, NumericInput, TextAreaInput } from 'Components';
import { Uplatnica } from 'Uplatnica';
import { LoadDialog } from 'LoadDialog';
import { SaveDialog } from 'SaveDialog';

const _defaultState = {
    nalog: {
        platitelj__ime: '',
        platitelj__adresa: '',
        platitelj__postanskiBroj: '',
        platitelj__gradMjesto: '',
        primatelj__ime: '',
        primatelj__adresa: '',
        primatelj__postanskiBroj: '',
        primatelj__gradMjesto: '',
        primatelj__iban: '',
        iznos: '',
        primatelj__model: '',
        primatelj__pozivNaBroj: '',
        sifra__namjene: '',
        opis_placanja: ''
    },
    invalid: {
        platitelj__ime: true,
        platitelj__adresa: true,
        platitelj__postanskiBroj: true,
        platitelj__gradMjesto: true,
        primatelj__ime: true,
        primatelj__adresa: true,
        primatelj__postanskiBroj: true,
        primatelj__gradMjesto: true,
        primatelj__iban: true,
        iznos: true,
        primatelj__model: true,
        primatelj__pozivNaBroj: true,
        sifra__namjene: true,
        opis_placanja: true
    }
};

class InputForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNalogLoad = this.handleNalogLoad.bind(this);
        this.handleFormValidation = this.handleFormValidation.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

        this.state = _defaultState;
    }

    handleInputChange(event) {
        const target = event.target;
        const nalog = this.state.nalog;

        nalog[target.id] = target.value;

        this.setState({ nalog: nalog });
    }

    handleNalogLoad(nalog) {
        this.setState({nalog:nalog});
    }

    handleOnClick(ev) {
        ev.preventDefault();
        switch(ev.target.name) {
            case 'novi-nalog':
                this.setState(_defaultState);
                break;
            case 'print':
                window.print();
                break;
        }
    }

    handleFormValidation(resultCode) {

        const resultEnum = BarcodePayment.ValidationResult;
        
        this.setState({
            invalid: {
                platitelj__ime: (resultCode & resultEnum.PayerNameInvalid || resultCode & resultEnum.PayerNameMaxLengthExceeded),
                platitelj__adresa: (resultCode & resultEnum.PayerAddressInvalid || resultCode & resultEnum.PayerAddressMaxLengthExceeded),
                platitelj__postanskiBroj: (resultCode & resultEnum.PayerHQInvalid || resultCode & resultEnum.PayerHQMaxLengthExceeded),
                platitelj__gradMjesto: (resultCode & resultEnum.PayerHQInvalid || resultCode & resultEnum.PayerHQMaxLengthExceeded),
                primatelj__ime: (resultCode & resultEnum.ReceiverNameInvalid || resultCode & resultEnum.ReceiverNameMaxLengthExceeded),
                primatelj__adresa: (resultCode & resultEnum.ReceiverAddressInvalid || resultCode & resultEnum.ReceiverAddressMaxLengthExceeded),
                primatelj__postanskiBroj: (resultCode & resultEnum.ReceiverHQInvalid || resultCode & resultEnum.ReceiverHQMaxLengthExceeded),
                primatelj__gradMjesto: (resultCode & resultEnum.ReceiverHQInvalid || resultCode & resultEnum.ReceiverHQMaxLengthExceeded),
                primatelj__iban: (resultCode & resultEnum.IBANInvalid || resultCode & resultEnum.IBANMaxLengthExceeded),
                iznos: (resultCode & resultEnum.PricePatternInvalid || resultCode & resultEnum.PriceMaxLengthExceeded),
                primatelj__model: (resultCode & resultEnum.PaymentModelInvalid || resultCode & resultEnum.PaymentModelMaxLengthExceeded),
                primatelj__pozivNaBroj: (resultCode & resultEnum.CalloutNumberInvalid || resultCode & resultEnum.CalloutNumberMaxLengthExceeded),
                sifra__namjene: (resultCode & resultEnum.IntentCodeInvalid || resultCode & resultEnum.IntentCodeMaxLengthExceeded),
                opis_placanja: (resultCode & resultEnum.DescriptionInvalid || resultCode & resultEnum.DescriptionMaxLengthExceeded)
            }
        });
    }
    
    
    render() {
        const nalog=this.state.nalog,
              invalid=this.state.invalid;

        return(
        <form>
            <LoadDialog onNalogLoad={this.handleNalogLoad} />
            <SaveDialog nalog={nalog} />
            <fieldset className="fieldset-platitelj">
                <h2>Platitelj</h2>
                <TextInput id="platitelj__ime" label="Ime i prezime / Naziv:" onChange={this.handleInputChange} value={nalog.platitelj__ime} invalid={invalid.platitelj__ime} />
                <TextInput id="platitelj__adresa" label="Adresa:" onChange={this.handleInputChange} value={nalog.platitelj__adresa} invalid={invalid.platitelj__adresa}/>
                <TextInput id="platitelj__postanskiBroj" label="Poštanski broj:" onChange={this.handleInputChange} value={nalog.platitelj__postanskiBroj} invalid={invalid.platitelj__postanskiBroj}/>
                <TextInput id="platitelj__gradMjesto" label="Grad/mjesto:" onChange={this.handleInputChange} value={nalog.platitelj__gradMjesto} invalid={invalid.platitelj__gradMjesto}/>
            </fieldset>
            <fieldset className="fieldset-primatelj">
                <h2>Primatelj</h2>
                <TextInput id="primatelj__ime" label="Ime i prezime / Naziv:" onChange={this.handleInputChange} value={nalog.primatelj__ime} invalid={invalid.primatelj__ime}/>
                <TextInput id="primatelj__adresa" label="Adresa:" onChange={this.handleInputChange} value={nalog.primatelj__adresa} invalid={invalid.primatelj__adresa}/>
                <TextInput id="primatelj__postanskiBroj" label="Poštanski broj:" onChange={this.handleInputChange} value={nalog.primatelj__postanskiBroj} invalid={invalid.primatelj__postanskiBroj}/>
                <TextInput id="primatelj__gradMjesto" label="Grad/mjesto:" onChange={this.handleInputChange} value={nalog.primatelj__gradMjesto} invalid={invalid.primatelj__gradMjesto}/>
            </fieldset>
            <fieldset className="fieldset-brojke">
                <TextInput id="primatelj__iban" label="IBAN / Račun primatelja:" className="fieldset-brojke__racun" onChange={this.handleInputChange} value={nalog.primatelj__iban} invalid={invalid.primatelj__iban}/>
                <NumericInput id="iznos" label="Iznos:" className="fieldset-brojke__iznos" onChange={this.handleInputChange} value={nalog.iznos} invalid={invalid.iznos}/>
                <br/>
                <PaymentModels id="primatelj__model" className="fieldset-brojke__model" onChange={this.handleInputChange} value={nalog.primatelj__model} invalid={invalid.primatelj__model}/>
                <TextInput id="primatelj__pozivNaBroj" label="Poziv na broj:" className="fieldset-brojke__poziv-na-broj" onChange={this.handleInputChange} value={nalog.primatelj__pozivNaBroj} invalid={invalid.primatelj__pozivNaBroj}/>
                <IntentCodes id="sifra__namjene" className="fieldset-brojke__namjena"  onChange={this.handleInputChange} value={nalog.sifra__namjene} invalid={invalid.sifra__namjene}/>
                <TextAreaInput id="opis_placanja" label="Opis plaćanja:" onChange={this.handleInputChange} value={nalog.opis_placanja} invalid={invalid.opis_placanja}/>
            </fieldset>
            <fieldset className="fieldset-novi-nalog">
                <button name="novi-nalog" onClick={this.handleOnClick}>NOVI NALOG</button>
                <button name="print" onClick={this.handleOnClick}>ISPIS NALOGA</button>
            </fieldset>
            <Uplatnica {...nalog} onFormValidation={this.handleFormValidation} />
        </form>
        );
    }
}

export { InputForm };