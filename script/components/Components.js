class PaymentModels extends React.Component {
    render() {
        return(
        <div>
            <label>Model plaćanja:</label>
            <select>{ BarcodePayment.PaymentModels.map(el => <option key={el.model} value={el.model}>{el.model}</option>) }</select>
        </div>
        );
    }
}

class IntentCodes extends React.Component {
    render() {
        return(
        <div>
            <label>Šifra namjene:</label>
            <select>{ BarcodePayment.IntentCodes.map(el => <option key={el.code} value={el.code}>{el.title}</option>) }</select>
        </div>
        );
    }
}

class TextInput extends React.Component {
    render() {
        return(
        <div>
            <label>{ this.props.label }</label>
            <input type="text" defaultValue={this.props.defaultValue} />
        </div>
        );
    }
}

class NumericInput extends React.Component {
    render() {
        return(
        <div>
            <label>{ this.props.label }</label>
            <input type="number" defaultValue={this.props.defaultValue} />
        </div>
        );
    }
}



export { PaymentModels, IntentCodes, TextInput, NumericInput }