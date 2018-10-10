import {SelectBase} from 'SelectBase';
import {connect} from 'ReduxConnector';

class IntentCodes extends React.Component {
    render() {
        return(<SelectBase {...this.props}>
        <option key="" value=""></option>            
            { BarcodePayment.IntentCodes.map(el => <option key={el.code} value={el.code}>{el.code+" -  "+el.title}</option>) }
        </SelectBase>);
    }
}

const ConnectedIntentCodes = connect(IntentCodes);

export { IntentCodes, ConnectedIntentCodes }