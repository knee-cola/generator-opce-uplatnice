
class GenericSelect extends React.Component {
    render() {
        return(
        <div className={this.props.className}>
            <label>{this.label}</label>
            <select id={this.props.id} onChange={this.props.onChange} value={this.props.value}><option key="blank-option"></option>{ this.optionFactory() }</select>
        </div>
        );
    }
}
class PaymentModels extends GenericSelect {
    constructor() {
        super();
        this.label = "Model";
    }
    optionFactory() {
        return(BarcodePayment.PaymentModels.map(el => <option key={el.model} value={el.model}>{el.model}</option>));
    }
}

class IntentCodes extends GenericSelect {
    constructor() {
        super();
        this.label = "Šifra namjene";
    }
    optionFactory() {
        return(BarcodePayment.IntentCodes.map(el => <option key={el.code} value={el.code}>{el.code+" -  "+el.title}</option>));
    }
}

class GenericInput extends React.Component {
    render() {
        return(
        <div className={this.props.className}>
            <label>{ this.props.label }</label>
            <input id={this.props.id} type={this.type} value={this.props.value} onChange={this.props.onChange} />
        </div>
        );
    }
}
class TextInput extends GenericInput {
    constructor() {
        super();
        this.type = "text";
    }
}
class NumericInput extends GenericInput {
    constructor() {
        super();
        this.type = "number";
    }
}
class TextAreaInput extends React.Component {
    render() {
        return(
        <div className={this.props.className}>
            <label>{ this.props.label }</label>
            <textarea id={this.props.id} cols="34" rows="4" onChange={this.props.onChange} value={this.props.value} />
        </div>
        );
    }
}

export { PaymentModels, IntentCodes, TextInput, NumericInput, TextAreaInput }