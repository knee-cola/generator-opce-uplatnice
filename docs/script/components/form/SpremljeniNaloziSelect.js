import {SelectBase} from 'SelectBase';
import {connect} from 'ReduxConnector';

class SpremljeniNaloziSelect extends React.Component {
    render() {
        return(
        <SelectBase label="Šifra namjene" className={this.props.className} buttons={this.props.children}>
            { this.props.popisNaloga.map((el, ix) => <option key={el.key} value={el.key}>{el.naziv_naloga}</option>) }
        </SelectBase>);
    }
}

const ConnectedSpremljeniNaloziSelect = connect(SpremljeniNaloziSelect);

export {SpremljeniNaloziSelect, ConnectedSpremljeniNaloziSelect}