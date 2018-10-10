import { FormatCurrency } from 'Format';

const Potvrda = (props) => 
        <fieldset className="fieldset-potvrda">
            <div className="potvrda-field potvrda-field--iznos">{props.iznos}</div>
            <div className="potvrda-field potvrda-field--iban">{props.primatelj__iban}</div>
            <div className="potvrda-field potvrda-field--model-i-poziv-na-broj">{props.primatelj__model} {props.primatelj__pozivNaBroj}</div>
            <div className="potvrda-field potvrda-field--opis-placanja">{props.opis_placanja}</div>
        </fieldset>;

const mapStateToProps = (state, ownProps) => {

    let nalog = state.nalog;

    return({
        iznos: FormatCurrency(nalog.iznos),
        primatelj__iban: nalog.primatelj__iban,
        primatelj__model: nalog.primatelj__model,
        primatelj__pozivNaBroj: nalog.primatelj__pozivNaBroj,
        opis_placanja: nalog.opis_placanja,

        ...ownProps // ovo su svi ostali property-i koji mogu biti zadani
    });
};

const ConnectedPotvrda = ReactRedux.connect(mapStateToProps)(Potvrda);

export { Potvrda, ConnectedPotvrda }