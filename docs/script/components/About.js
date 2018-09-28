class About extends React.Component {
    constructor() {
        super();

        this.state = {
            expanded: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {

        let className = 'fieldset-about' + (this.state.expanded ? ' fieldset-about--expanded' : '');

        return(
            <fieldset className={className} >
                <h1 onClick={this.handleClick}>Info</h1>
                <p>Neke tvrtke uz svoje račune šalju uplatnice koje ne sadrže 2D kod, što onemogućuje plaćanje tih računa u Konzumu i Tisku.</p>
                <p>Pomoću ovog generatora možete generirati uplatnicu sa 2D kodom, koju ćete moći uplatiti na blagajnama Konzuma, kioscima Tiska i slično.</p>
                <p>Izvorni kod ove web aplikacije možete pronaći na slijedećoj GitHub stranici: <a href="https://github.com/knee-cola/generator-opce-uplatnice" target="_blank">generator-opce-uplatnice</a> </p>
                <h2>Upute za korištenje</h2>
                <p>Popunite donji formular i uplatnica će biti automatski generirana na dnu stranice.</p>
                <p>Obratite pažnju na polja označenma crvenom bojom. Crvena boja nam govori da polje nije ispravno popunjeno. 2D kod neće biti generiran sve dok sva polja nisu ispravno popunjena.</p>
                <h2>Spremanje naloga</h2>
                <p>Nakon što unesete nalog, možete ga spremiti za kasniju upotrebu. Nalog će biti trajno spremljen na računalo na kojem trenutno radite.</p>
                <h2>UPOZORENJE</h2>
                <p>Kao autor dijelova ove web aplikacije NE jamčim za ispravnost generiranog 2D koda.</p>
                <p>OBAVEZNO prije korištenje ove uplatnice programom za skeniranje 2D koda provjerite jesu li informacije sadržane u kodu ispravne.</p>
                <p>Činom upotrebe ovog generatora preuzimate punu materijalnu i pravnu odgovornost za posljedice koje korištenje generirane uplatnice može imati!</p>
            </fieldset>
        );
    }
}

export { About }