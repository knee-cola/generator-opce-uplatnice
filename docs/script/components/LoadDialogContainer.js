import { LoadDialog } from 'LoadDialog';
import { loadNalog } from 'actions';
class LoadDialogContainer extends React.Component {

    constructor() {
        super();
        this.ucitajNalog = this.ucitajNalog.bind(this);
        this.brisiNalog = this.brisiNalog.bind(this);
        this.handleNalogSelected = this.handleNalogSelected.bind(this);
        this.loadFile = this.loadFile.bind(this);

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

    handleNalogSelected(noviNaziv) {
        this.setState({ selectedKey: noviNaziv });
    }

    // source: https://www.html5rocks.com/en/tutorials/file/dndfiles/
    loadFile(selectedFile) {

        const reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = progressEv => {
            const jsonString = progressEv.target.result;
            let loadedObject;

            try {
                loadedObject = JSON.parse(jsonString)
            } catch(ev) {
                this.showMsg('Greška kod učitavanja datoteke. Format datoteke nije prepoznat...','error');
                return;
            }
            
            this.props.onNalogLoad(loadedObject);

            this.showMsg('Nalog uspješno učitan iz datoteke','ok');
        }

        reader.readAsText(selectedFile);
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
            <LoadDialog
                onNalogUcitaj={this.ucitajNalog}
                onNalogBrisi={this.brisiNalog}
                onFileSelected={this.loadFile}
                onNalogSelected={this.handleNalogSelected}

                popisNaloga={this.state.popisNaloga}
                selectedKey={this.state.selectedKey}
                validationMsg={this.state.validationMsg}
                validationMsgType={this.state.validationMsgType}
             />
        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onNalogLoad: (loadedData) => {
            dispatch(loadNalog(loadedData));
        },
        ...ownProps
    }
}

const ConnectedLoadDialog = ReactRedux.connect(null, mapDispatchToProps)(LoadDialogContainer);


export { LoadDialogContainer, ConnectedLoadDialog };