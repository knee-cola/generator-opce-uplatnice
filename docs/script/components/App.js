import { LoadDialogContainer } from 'LoadDialogContainer';
import { SaveDialogContainer } from 'SaveDialogContainer';
import { Forma } from 'Forma';
import { reducer } from 'reducers';

const store = Redux.createStore(reducer);

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleNalogLoad = this.handleNalogLoad.bind(this);
        this.handleNazivChange = this.handleNazivChange.bind(this);

        BarcodePayment.Init({
            ValidateIBAN: false, // Validation is not yet implemented
            ValidateModelPozivNaBroj: true // Validation is not yet implemented
        });
    }

    handleNazivChange(value) {
        this.setState({
            naziv_naloga: value
        });
    }

    handleNalogLoad(nalogData) {
        this.setState(nalogData);
    }

    render() {

        return(
            <div>
                <SaveDialogContainer {...this.state} onNazivChange={this.handleNazivChange} />
                <LoadDialogContainer onNalogLoad={this.handleNalogLoad} />
                <ReactRedux.Provider store={store}>
                    <Forma />
                </ReactRedux.Provider>
            </div>);
    }
}

export { App };