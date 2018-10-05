import { TextInput } from 'Components';

class SaveDialog extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleNazivChange = this.handleNazivChange.bind(this);

        this.state = {
            validationMsgType: 'none',
            validationMsg: ''
        };
    }

    handleNazivChange(ev) {
        this.props.onNazivChange(ev.target.value);
    }

    handleClick(ev) {
        ev.preventDefault();
        this.hideMsg();

        switch(ev.target.name) {
            case "save":
                this.spremiNalog();
                break;
            case "download":
            this.downloadNalog();
            break;
        }
    }

    spremiNalog() {
        let naziv = this.props.naziv_naloga.trim();
        if(this.validateNaziv(naziv)) {

            let nalogJson = JSON.stringify({ naziv_naloga: naziv, nalog: this.props.nalog }),
                recordName = naziv.replace(/\s+/g,'-').toLocaleLowerCase();

            localStorage.setItem(recordName, nalogJson);

            this.showMsg('Nalog je uspješno spremljen na vaše računalo!','ok');
            window.dispatchEvent(new Event('popisNalogaChanges'));
        }
    }

    downloadNalog() {
        let naziv = this.props.naziv_naloga.trim();

        if(this.validateNaziv(naziv)) {

            const nalogJson = JSON.stringify({ naziv_naloga: naziv, nalog: this.props.nalog }, null, 2),
                fileName = naziv.replace(/\s+/g,'-').toLocaleLowerCase(),
                blob = new Blob([nalogJson], {type : 'application/json'});
            
            this.saveFile(blob, fileName);
        }
    }
    
    saveFile(blob, fileName) {
        const url = window.URL.createObjectURL(blob),
              a = document.createElement('a');

        document.body.appendChild(a);
        a.style = "display: none";

        a.href = url;
        a.download = fileName;
        a.click();

        window.URL.revokeObjectURL(url);
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
                <TextInput id="naziv_naloga" label="Naziv naloga" value={this.props.naziv_naloga} onChange={this.handleNazivChange}>
                    <button name="save" onClick={this.handleClick}>Spremi u web preglednik</button>&nbsp;
                    <button name="download" onClick={this.handleClick}>Spremi u datoteku</button>
                </TextInput>
                <span className="fieldset-save-dialog__hint">Ako popunjeni nalog planirate još koji puta koristiti možete ga trajno <strong>spremiti</strong> u memoriju web preglednika ili <strong>preuzeti</strong> u obliku datoteke na lokalno računalo.</span>
                <span className={"fieldset-validation-msg fieldset-validation-msg-"+this.state.validationMsgType}>{this.state.validationMsg}</span>
            </fieldset>
        );
    }
}

export { SaveDialog }