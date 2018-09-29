
class GenericSelect extends React.Component {
    render() {
        return(
        <div className={this.props.className}>
            <label>{this.label}</label>
            <select id={this.props.id} onChange={this.props.onChange} value={this.props.value}>{ this.optionFactory() }</select>
            {this.props.children}
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
        let models = BarcodePayment.PaymentModels.map(el => <option key={el.model} value={el.model}>{el.model}</option>);
        models.unshift(<option key="" value=""></option>);
        return(models);
    }
}

class IntentCodes extends GenericSelect {
    constructor() {
        super();
        this.label = "Šifra namjene";
    }
    optionFactory() {
        let codes = BarcodePayment.IntentCodes.map(el => <option key={el.code} value={el.code}>{el.code+" -  "+el.title}</option>);
        codes.unshift(<option key="" value=""></option>);
        return(codes);
    }
}

class TextInput extends React.Component {
    render() {
        let className = (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')
        return(
        <div className={className}>
            <label>{ this.props.label }</label>
            <input id={this.props.id} type="text" value={this.props.value} onChange={this.props.onChange} />
            {this.props.children}
        </div>
        );
    }
}
class TextAreaInput extends React.Component {
    render() {
        let className = (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(
        <div className={className}>
            <label>{ this.props.label }</label>
            <textarea id={this.props.id} cols="34" rows="4" onChange={this.props.onChange} value={this.props.value} />
            {this.props.children}
        </div>
        );
    }
}

export { GenericSelect, PaymentModels, IntentCodes, TextInput, TextAreaInput }