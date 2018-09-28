import { PaymentModels, IntentCodes, TextInput, NumericInput, TextAreaInput } from 'Components';
import { Uplatnica } from 'Uplatnica';
import { LoadDialog } from 'LoadDialog';
import { SaveDialog } from 'SaveDialog';

class InputForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            platitelj__ime: 'Marija Derežić',
            platitelj__adresa: 'Oboj 16/1',
            platitelj__postanskiBroj: '10.000',
            platitelj__gradMjesto: 'Zagreb',
            primatelj__ime: 'Geosfera d.o.o.',
            primatelj__adresa: 'Nikola Cara 4',
            primatelj__postanskiBroj: '51.000 Rijeka',
            primatelj__gradMjesto: 'Rijeka',
            primatelj__iban: 'HR8424840081103381985',
            iznos: '6250.00',
            primatelj__model: '00',
            primatelj__pozivNaBroj: '105-1-1',
            sifra__namjene: '',
            opis_placanja: 'Uplata po računu 105-1-1'
        };
//        this.state = {
//            platitelj__ime: '',
//            platitelj__adresa: '',
//            platitelj__postanskiBroj: '',
//            platitelj__gradMjesto: '',
//            primatelj__ime: '',
//            primatelj__adresa: '',
//            primatelj__postanskiBroj: '',
//            primatelj__gradMjesto: '',
//            primatelj__iban: '',
//            iznos: '',
//            primatelj__model: '',
//            primatelj__pozivNaBroj: '',
//            sifra__namjene: '',
//            opis_placanja: ''
//        };
//    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNalogLoad = this.handleNalogLoad.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;

        this.setState({
          [target.id]: target.value
        });
      }

      handleNalogLoad(nalog) {
        this.setState(nalog);
      }
    
    
    render() {
        const state=this.state;

        return(
        <form>
            <LoadDialog onNalogLoad={this.handleNalogLoad} />
            <SaveDialog nalog={state} />
            <fieldset className="fieldset-platitelj">
                <h2>Platitelj</h2>
                <TextInput id="platitelj__ime" label="Ime i prezime / Naziv:" onChange={this.handleInputChange} value={this.state.platitelj__ime} />
                <TextInput id="platitelj__adresa" label="Adresa:" onChange={this.handleInputChange} value={this.state.platitelj__adresa}/>
                <TextInput id="platitelj__postanskiBroj" label="Poštanski broj:" onChange={this.handleInputChange} value={this.state.platitelj__postanskiBroj}/>
                <TextInput id="platitelj__gradMjesto" label="Grad/mjesto:" onChange={this.handleInputChange} value={this.state.platitelj__gradMjesto}/>
            </fieldset>
            <fieldset className="fieldset-primatelj">
                <h2>Primatelj</h2>
                <TextInput id="primatelj__ime" label="Ime i prezime / Naziv:" onChange={this.handleInputChange} value={this.state.primatelj__ime}/>
                <TextInput id="primatelj__adresa" label="Adresa:" onChange={this.handleInputChange} value={this.state.primatelj__adresa}/>
                <TextInput id="primatelj__postanskiBroj" label="Poštanski broj:" onChange={this.handleInputChange} value={this.state.primatelj__postanskiBroj}/>
                <TextInput id="primatelj__gradMjesto" label="Grad/mjesto:" onChange={this.handleInputChange} value={this.state.primatelj__gradMjesto}/>
            </fieldset>
            <fieldset className="fieldset-brojke">
                <TextInput id="primatelj__iban" label="IBAN / Račun primatelja:" className="fieldset-brojke__racun" onChange={this.handleInputChange} value={this.state.primatelj__iban}/>
                <NumericInput id="iznos" label="Iznos:" className="fieldset-brojke__iznos" onChange={this.handleInputChange} value={this.state.iznos}/>
                <br/>
                <PaymentModels id="primatelj__model" className="fieldset-brojke__model" onChange={this.handleInputChange} value={this.state.primatelj__model}/>
                <TextInput id="primatelj__pozivNaBroj" label="Poziv na broj:" className="fieldset-brojke__poziv-na-broj" onChange={this.handleInputChange} value={this.state.primatelj__pozivNaBroj}/>
                <IntentCodes id="sifra__namjene" className="fieldset-brojke__namjena"  onChange={this.handleInputChange} value={this.state.sifra__namjene}/>
                <TextAreaInput id="opis_placanja" label="Opis plaćanja:" onChange={this.handleInputChange} value={this.state.opis_placanja}/>
            </fieldset>
            <Uplatnica {...this.state} />
        </form>
        );
    }
}

export { InputForm };