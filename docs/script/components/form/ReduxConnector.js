// Metoda komponentu spaja na Redux store i vraća takvu novu spojenu komponentu
// Pri tome kreira closure putem kojeg parametrizira koje varijable će biti
// iščupane iz store-a
const createConnection = (id, Component) => {
/*
    const mapStateToProps = (state, ownProps) => {
        return {
            value: state.nalog[id],
            invalid: state.validation[id],

            ...ownProps // ovo su svi ostali property-i koji mogu biti zadani
        }
    }
    
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onChange: (ev) => {
                dispatch(setFieldValue(id, ev.target.value))
            },
            ...ownProps
        }
    }

    return(ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Component));
*/
    return((props) => {
        return(<Component value={props.nalog[id]} invalid={props.validation[id]} {...props} />)
    });
}

const _cache = { };

// Konstruktor funkcija koja vraća instancu <TextInput/> komponente spojene na Redux store
// > ovu funkciju je moguće koristiti kao klasičnu React komponentu
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