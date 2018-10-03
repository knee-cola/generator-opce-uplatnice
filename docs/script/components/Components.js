
class GenericSelect extends React.Component {
    render() {
        let className = "form-field " + this.props.className;
        return(
            <div>
                <select className={className} id={this.props.id} onChange={this.props.onChange} value={this.props.value} placeholder={this.label}>{ this.optionFactory() }</select>
                {this.props.children}
            </div>);
    }
}
class PaymentModels extends GenericSelect {
    constructor() {
        super();
        this.label = "Model";
    }
    optionFactory() {
        
        let models = BarcodePayment.PaymentModels.map(el => 
        {
            let modelCode = "HR"+el.model;
            return(<option key={modelCode} value={modelCode}>{modelCode}</option>);
        });
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
        let className = "form-field " + (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(<div>
            <input id={this.props.id} className={className} type="text" value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label} maxLength={this.props.maxLength} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
            {this.props.children}
        </div>);
    }
}
class TextAreaInput extends React.Component {
    render() {
        let className = "form-field " + (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(
            <textarea className={className} id={this.props.id} cols="33" rows="4" onChange={this.props.onChange} value={this.props.value} placeholder={this.props.label} />
        );
    }
}

export { GenericSelect, PaymentModels, IntentCodes, TextInput, TextAreaInput }