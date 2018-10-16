import { SaveDialog } from 'SaveDialog';
import { updateValue } from 'actions';

class SaveDialogContainer extends React.Component {

    constructor() {
        super();
        this.handleSave2BrowserClick = this.handleSave2BrowserClick.bind(this);
        this.handleSave2FileClick = this.handleSave2FileClick.bind(this);

        this.state = {
            validationMsgType: 'none',
            validationMsg: ''
        };
    }

    handleSave2BrowserClick(ev) {
        this.hideMsg();
        this.spremiNalog();
    }
    handleSave2FileClick(ev) {
        this.hideMsg();
        this.downloadNalog();
    }

    spremiNalog() {
        let naziv = this.props.nalog.naziv.trim();
        if(this.validateNaziv(naziv)) {

            let nalogJson = JSON.stringify(this.props.nalog),
                recordName = naziv.replace(/\s+/g,'-').toLocaleLowerCase();

            localStorage.setItem(recordName, nalogJson);

            this.showMsg('Nalog je uspješno spremljen na vaše računalo!','ok');
            window.dispatchEvent(new Event('popisNalogaChanges'));
        }
    }

    downloadNalog() {
        let naziv = this.props.nalog.naziv.trim();

        if(this.validateNaziv(naziv)) {

            const nalogJson = JSON.stringify(this.props.nalog, null, 2),
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
        return(<SaveDialog
                naziv_naloga={this.props.nalog.naziv}
                onNazivChange={this.props.onNazivChange}
                validationMsg={this.state.validationMsg}
                validationMsgType={this.state.validationMsgType}
                onSave2BrowserClick={this.handleSave2BrowserClick}
                onSave2FileClick={this.handleSave2FileClick} />);
    }
}


const mapStateToProps = (state, ownProps) => {

    return({
        nalog: state.nalog,
        ...ownProps // ovo su svi ostali property-i koji mogu biti zadani
    });
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNazivChange: (value) => {
            dispatch(updateValue('naziv', value));
        },
        ...ownProps
    }
}

const ConnectedSaveDialog = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SaveDialogContainer);

export { SaveDialogContainer, ConnectedSaveDialog }