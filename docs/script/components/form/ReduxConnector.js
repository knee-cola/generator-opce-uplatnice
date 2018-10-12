import { updateValue } from 'actions';
import { paramName } from 'paymentParamsFacade';

/**
 * Metoda za zadanu komponentu kreira connected verziju, pri čemu je način mapiranja state-a na property-e parametriziran putem `id`-a
 * @param {*} id jedinstvena oznaka instance komponente - odgovara nazivu varijable (key) u Redux store-u
 * @param {*} Component komponenta koju treba spojiti na Redux
 */
// 
const createConnection = (id, Component) => {

    // map metode su kreirane unutar closure-a kako
    // bi bila sačuvana vrijednost `id` parametra
    // > ID komponente odgovara nazivu varijable (key) u Redux store-u
    const mapStateToProps = (state, ownProps) => {
        const value = state.nalog[id],
              validationFn = BarcodePayment.validate[paramName[id]],
              invalid = validationFn(value)!==0; // < ova vrijednost se dinamički određuje

        return {
            value,
            invalid,

            ...ownProps // ovo su svi ostali property-i koji mogu biti zadani
        }
    }
    
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onChange: (ev) => {
                dispatch(updateValue(id, ev.target.value))
            },
            ...ownProps
        }
    }

    return(ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Component));

// slijedeće je klasičan način spajanja komponente ... korišten privremeno kao priprema za uvođenje Redux-a
//    return((props) => {
//        return(<Component value={props.nalog[id]} invalid={props.validation[id]} {...props} />)
//    });
}

const _cache = { };

/**
 * Memoized Higher order funkcija koja za zadanu komponentu vraća,
 * connected komponentu, koja se izravno može koristi u JSX-u
 * @param {*} Component komponenta koju treba spojiti na Redux
 */
const connect = Component => (props) => {

    let ConnectedComponent = _cache[props.id];
    
    if(!ConnectedComponent) {
    // AKO već ne posjeduješ connected varijatnu zadane komponente
    // > kreiraj je
        ConnectedComponent = _cache[props.id] = createConnection(props.id, Component);
    }

    // vraćam instancu spojene komponente
    return(<ConnectedComponent {...props} />)
}

export { connect };