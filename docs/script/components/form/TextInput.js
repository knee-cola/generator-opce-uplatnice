import { connect } from 'ReduxConnectionFactory';

class TextInput extends React.Component {
    render() {
        let className = "form-field " + (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(<div>
            <input id={this.props.id} className={className} type="text" value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label} maxLength={this.props.maxLength} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
            {this.props.children}
        </div>);
    }
}

const ConnectedTextInput = connect(TextInput);

export { TextInput, ConnectedTextInput }