import { TextInput } from 'Components';

class SaveDialog extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            naziv_naloga: '',
            validationMsgType: '',
            validationMsg: ''
        };
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
          [target.id]: target.value
        });
      }

    handleClick(ev) {
        ev.preventDefault();
        this.hideMsg();
        this.spremiNalog();
    }

    spremiNalog() {
        let naziv = this.state.naziv_naloga.trim();

        if(this.validateNaziv(naziv)) {

            localStorage.setItem(naziv.replace(/\s+/g,'-').toLocaleLowerCase(),
                JSON.stringify({
                    naziv_naloga: naziv,
                    nalog: this.props.nalog
                }));

            this.showMsg('Nalog je uspješno spremljen na vaše računalo!','ok');
            window.dispatchEvent(new Event('popisNalogaChanges'));

            this.setState({naziv_naloga:''});
        }
    }

    validateNaziv(naziv) {
        if(naziv === '') {
            this.showMsg('Naziv ne smije biti prazan. Molimo upišite naziv, pa probaje ponovo...','error');
            return(false);
        }

        return(true);
    }

    hideMsg() {
        this.setState({
            validationMsgType: 'none',
            validationMsg: ''
        });
    }

    showMsg(msgText, msgType) {
        this.setState({
            validationMsgType: msgType,
            validationMsg: msgText
        });

        window.setTimeout(() => this.hideMsg(), 4000);
    }

    render() {
        return(
            <fieldset className="fieldset-save-dialog">
                <TextInput id="naziv_naloga" label="Naziv naloga" value={this.state.naziv_naloga} onChange={this.handleInputChange}>
                    <button onClick={this.handleClick}>Spremi</button>
                </TextInput>
                <span className="fieldset-save-dialog__hint">Opcionalno naloge možete spremati za kasnije korištenje</span>
                <span className={"fieldset-validation-msg fieldset-validation-msg-"+this.state.validationMsgType}>{this.state.validationMsg}</span>
            </fieldset>
        );
    }
}

export { SaveDialog }