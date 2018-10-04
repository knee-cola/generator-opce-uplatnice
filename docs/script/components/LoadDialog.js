import { GenericSelect } from 'Components';

class TemplateList extends GenericSelect {
    constructor() {
        super();
        this.label = "Spremljeni nalozi";
    }
    optionFactory() {
        return(this.props.popisNaloga.map((el, ix) => <option key={el.key} value={el.key}>{el.naziv_naloga}</option>));
    }
}

class LoadDialog extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        const popisNaloga = this.getPopisNaloga();

        this.state = {
            validationMsgType: 'none',
            validationMsg: '',
            selectedKey: popisNaloga.length > 0 ? popisNaloga[0].key : void 0,
            popisNaloga: popisNaloga
        }
        
        // na svaku promjenu u storage-u ažuriraj listu
        window.addEventListener('popisNalogaChanges', () => {
            let popisNaloga = this.getPopisNaloga();
            
            switch(popisNaloga.length) {
                case 1:
                    this.setState({ selectedKey: popisNaloga[0].key });
                    break;
            }

            this.setState({ popisNaloga: popisNaloga });
        });
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            selectedKey: target.value
        });
    }

    handleClick(ev) {
        ev.preventDefault();

        this.hideMsg();
        
        switch(ev.target.id) {
            case 'fieldset-load-dialog__load':
                this.ucitajNalog();
                break;
            case 'fieldset-load-dialog__delete':
                this.brisiNalog();
                break;
        }
    }

    getPopisNaloga() {
        return(Object.entries(localStorage).map(el => { return({ key:el[0], naziv_naloga:JSON.parse(el[1]).naziv_naloga });}));
    }

    ucitajNalog() {
        if(this.props.onNalogLoad) {
            this.props.onNalogLoad(JSON.parse(localStorage.getItem(this.state.selectedKey)));
        }
        
        this.showMsg('Nalog uspješno učitan','ok');
    }

    brisiNalog() {
        localStorage.removeItem(this.state.selectedKey);
        this.showMsg('Nalog uspješno obrisan sa vašeg računala ...','ok');
        window.dispatchEvent(new Event('popisNalogaChanges'));
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
            <fieldset className="fieldset-load-dialog">
                <TemplateList popisNaloga={this.state.popisNaloga} value={ this.state.selectedKey } onChange={this.handleInputChange} >
                    <button id="fieldset-load-dialog__load" onClick={this.handleClick} disabled={this.state.popisNaloga.length==0}>Učitaj</button>
                    <button id="fieldset-load-dialog__delete" onClick={this.handleClick} disabled={this.state.popisNaloga.length==0}>Obriši</button>
                </TemplateList>
                <span className={"fieldset-validation-msg fieldset-validation-msg-"+this.state.validationMsgType}>{this.state.validationMsg}</span>
            </fieldset>
        );
    }
}

export { LoadDialog };