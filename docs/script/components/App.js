import { LoadDialogContainer } from 'LoadDialogContainer';
import { SaveDialogContainer } from 'SaveDialogContainer';
import { Forma } from 'Forma';
import { reducer } from 'reducers';

const store = Redux.createStore(reducer);

class App extends React.Component {

    constructor(props) {
        super(props);

//        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleNalogLoad = this.handleNalogLoad.bind(this);
        this.handleFormAction = this.handleFormAction.bind(this);
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

//    handleUserInput(inputId, inputValue) {
//        const nalog = this.state.nalog;
//
//        nalog[inputId] = inputValue;
//
//        this.setState({ nalog: nalog });
//    }

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

    render() {
//        const nalog=this.state.nalog,
//              paymentParams = this.getPaymentParams(),
//              validation = this.validateParams(paymentParams),
//              encodedText = BarcodePayment.GetEncodedText(paymentParams);
//              // nalog={nalog} validation={validation} encodedText={encodedText};

        return(
            <div>
                <SaveDialogContainer {...this.state} onNazivChange={this.handleNazivChange} />
                <LoadDialogContainer onNalogLoad={this.handleNalogLoad} />
                <ReactRedux.Provider store={store}>
                    <Forma onAction={this.handleFormAction} />
                </ReactRedux.Provider>
            </div>);
    }
}

export { App };