import { Uplatnica } from 'Uplatnica';
import { LoadDialog } from 'LoadDialog';
import { SaveDialog } from 'SaveDialog';
import { About } from 'About';
import { Forma } from 'Forma';

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

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleNalogLoad = this.handleNalogLoad.bind(this);
        this.handleFormValidation = this.handleFormValidation.bind(this);
        this.handleFormAction = this.handleFormAction.bind(this);

        this.state = _defaultState;
    }

    handleNalogLoad(nalog) {
        this.setState({nalog:nalog});
    }

    handleUserInput(inputId, inputValue) {
        const nalog = this.state.nalog;

        nalog[inputId] = inputValue;

        this.setState({ nalog: nalog });
    }

    handleFormAction(action) {
        switch(action) {
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
        <div>
            <About />
            <LoadDialog onNalogLoad={this.handleNalogLoad} />
            <SaveDialog nalog={nalog} />
            <Forma onAction={this.handleFormAction} onUserInput={this.handleUserInput} nalog={nalog} invalid={invalid} />
            <Uplatnica {...nalog} onFormValidation={this.handleFormValidation} />
        </div>
        );
    }
}

export { App };