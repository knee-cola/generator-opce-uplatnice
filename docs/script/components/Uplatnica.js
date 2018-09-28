import { Barcode } from 'Barcode';
import { FormatCurrency } from 'Format';
class Uplatnica extends React.Component {
    render() {
        return(
        <div>
            <div className="uplatnica">
                <img src="./img/uplatnica.jpg"/>
                <div className="uplatnica__element uplatnica__element-_platitelj">
                    {this.props.platitelj__ime}
                    <br/>{this.props.platitelj__adresa}
                    <br/>{this.props.platitelj__postanskiBroj} {this.props.platitelj__gradMjesto}
                </div>
                <div className="uplatnica__element uplatnica__element-_primatelj">
                    {this.props.primatelj__ime}
                    <br/>{this.props.primatelj__adresa}
                    <br/>{this.props.primatelj__postanskiBroj} {this.props.primatelj__gradMjesto}
                </div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iznos-left">{FormatCurrency(this.props.iznos).replace(',','')}</div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iban-left">{this.props.primatelj__iban}</div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--model">{this.props.primatelj__model}</div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--poziv-na-broj">{this.props.primatelj__pozivNaBroj}</div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--sifra-namjene">{this.props.sifra__namjene}</div>
                <div className="uplatnica__element uplatnica__element--opis-placanja-left">{this.props.opis_placanja}</div>

                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iznos-right">{FormatCurrency(this.props.iznos)}</div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iban-right">{this.props.primatelj__iban}</div>
                <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--model-i-poziv-na-broj">{this.props.primatelj__model} {this.props.primatelj__pozivNaBroj}</div>
                <div className="uplatnica__element uplatnica__element--opis-placanja-right">{this.props.opis_placanja}</div>
                <Barcode {...this.props} />
            </div>
            <div className="uplatnica__disclaimer">
                <p><strong>UPOZORENJE:</strong> kao autor dijelova ove web aplikacije NE jamčim za ispravnost generiranog 2D koda.</p>
                <p>OBAVEZNO prije korištenje ove uplatnice programom za skeniranje 2D koda provjerite jesu li informacije sadržane u kodu ispravne.</p>
                <p>Činom upotrebe ovog generatora preuzimate punu materijalnu i pravnu odgovornost za posljedice koje korištenje generirane uplatnice može imati!</p>
            </div>
        </div>
        );
    }
}

export { Uplatnica }