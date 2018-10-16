import { clearForm } from 'actions';

export const ButtonBox = props => <fieldset className="fieldset-novi-nalog">
    <button name="novi-nalog" onClick={props.onClick}>NOVI NALOG</button>
    <button name="print" onClick={props.onClick}>ISPIS NALOGA</button>
</fieldset>;

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (ev) => {
            ev.preventDefault();

            switch(ev.target.name) {
                case 'novi-nalog':
                    dispatch(clearForm());
                    break;
                case 'print':
                    window.print();
                    break;
            }
        },
        ...ownProps
    }
}

export const ConnectedButtonBox = ReactRedux.connect(null, mapDispatchToProps)(ButtonBox);