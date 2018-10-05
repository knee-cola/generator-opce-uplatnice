import { SpremljeniNaloziSelect } from 'Components';

class LoadDialog extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loadFileRef = React.createRef();
    }

    handleInputChange(event) {
        this.props.onNalogSelected(event.target.value);
    }

    handleClick(ev) {
        ev.preventDefault();

        switch(ev.target.id) {
            case 'fieldset-load-dialog__load':
                this.props.onNalogUcitaj();
                break;
            case 'fieldset-load-dialog__delete':
                this.props.onNalogBrisi();
                break;
            case 'fieldset-load-dialog__load-file-button':
                // simuliram klik na skrivenu tipku
                this.loadFileRef.current.click();
                break;
        }
    }

    // source: https://www.html5rocks.com/en/tutorials/file/dndfiles/
    handleFileSelected(ev) {
        this.props.onFileSelected(ev.target.files[0]);
        // resetiran sadržaj inputa tako da ako korisnik
        // još jednom odabere istu datoteku stvar generira `change` događaj
        ev.target.value = null;
    }

    render() {
        const popisNaloga = this.props.popisNaloga;

        return(
            <fieldset className="fieldset-load-dialog">
                <SpremljeniNaloziSelect popisNaloga={popisNaloga} value={ this.props.selectedKey } onChange={this.props.handleInputChange} >
                    <button id="fieldset-load-dialog__load" onClick={this.handleClick} disabled={popisNaloga.length==0}>Učitaj odabrani nalog</button>
                    <button id="fieldset-load-dialog__delete" onClick={this.handleClick} disabled={popisNaloga.length==0}>Obriši odabrani nalog</button>
                    <input className="fieldset-load-dialog__load-file" type="file" id="load-file" name="load-file" onChange={this.handleFileSelected} accept=".json" ref={this.loadFileRef} />
                    <button className="fieldset-load-dialog__load-file-button" id="fieldset-load-dialog__load-file-button" onClick={this.handleClick}>Učitaj nalog iz datoteke</button>
                </SpremljeniNaloziSelect>
                <span className={"fieldset-validation-msg fieldset-validation-msg-"+this.props.validationMsgType}>{this.props.validationMsg}</span>
            </fieldset>
        );
    }
}

export { LoadDialog };