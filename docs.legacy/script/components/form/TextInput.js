import { connect } from 'ReduxConnector';

const TextInput = (props) => {
        let className = "form-field " + (props.className ? props.className : '') + (props.invalid ? ' form-field-invalid' : '')

        return(<div>
            <input id={props.id} className={className} type="text" value={props.value} onChange={props.onChange} placeholder={props.label} maxLength={props.maxLength} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
            {props.children}
        </div>);
};

const ConnectedTextInput = connect(TextInput);

export { TextInput, ConnectedTextInput }