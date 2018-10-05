import { TextInput } from 'Components';

class SaveDialog extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        ev.preventDefault();

        switch(ev.target.name) {
            case "save":
                this.props.onSave2BrowserClick();
                break;
            case "download":
                this.props.onSave2FileClick();
                break;
        }
    }

    render() {
        return(
            <fieldset className="fieldset-save-dialog">
                <TextInput id="naziv_naloga" label="Naziv naloga" value={this.props.naziv_naloga} onChange={this.handleNazivChange}>
                    <button name="save" onClick={this.handleClick}>Spremi u web preglednik</button>&nbsp;
                    <button name="download" onClick={this.handleClick}>Spremi u datoteku</button>
                </TextInput>
                <span className="fieldset-save-dialog__hint">Ako popunjeni nalog planirate još koji puta koristiti možete ga trajno <strong>spremiti</strong> u memoriju web preglednika ili <strong>preuzeti</strong> u obliku datoteke na lokalno računalo.</span>
                <span className={"fieldset-validation-msg fieldset-validation-msg-"+this.props.validationMsgType}>{this.props.validationMsg}</span>
            </fieldset>
        );
    }
}

export { SaveDialog }