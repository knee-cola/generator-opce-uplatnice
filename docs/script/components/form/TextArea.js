import {connect} from 'ReduxConnectionFactory';

class TextArea extends React.Component {
    render() {
        let className = "form-field " + (this.props.className ? this.props.className : '') + (this.props.invalid ? ' form-field-invalid' : '')

        return(
            <textarea className={className} id={this.props.id} cols="33" rows="4" onChange={this.props.onChange} value={this.props.value} placeholder={this.props.label} />
        );
    }
}

const ConnectedTextArea = connect(TextArea);

export {TextArea, ConnectedTextArea}