import {SelectBase} from 'SelectBase';

class SpremljeniNaloziSelect extends React.Component {
    render() {
        return(
        <SelectBase label="Šifra namjene" {...this.props} buttons={this.props.children} >
            { this.props.popisNaloga.map((el, ix) => <option key={el.key} value={el.key}>{el.naziv}</option>) }
        </SelectBase>);
    }
}

export {SpremljeniNaloziSelect}