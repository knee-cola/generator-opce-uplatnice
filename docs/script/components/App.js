import { ConnectedLoadDialog } from 'LoadDialogContainer';
import { SaveDialogContainer } from 'SaveDialogContainer';
import { Forma } from 'Forma';
import { reducer } from 'reducers';

const store = Redux.createStore(reducer);

class App extends React.Component {

    constructor(props) {
        super(props);

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

    render() {

        return(
            <div>
                <SaveDialogContainer {...this.state} onNazivChange={this.handleNazivChange} />
                <ReactRedux.Provider store={store}>
                    <div>
                        <ConnectedLoadDialog />
                        <Forma />
                    </div>
                </ReactRedux.Provider>
            </div>);
    }
}

export { App };