import {SelectBase} from 'SelectBase';
import {connect} from 'ReduxConnector';

class PaymentModels extends React.Component {
    render() {
        return(<SelectBase {...this.props}>
            <option key="" value=""></option>
            { BarcodePayment.PaymentModels.map(({model}) => <option key={model} value={"HR"+model}>{"HR"+model}</option>) }
        </SelectBase>);
    }
}

const ConnectedPaymentModels = connect(PaymentModels);

export { PaymentModels, ConnectedPaymentModels }