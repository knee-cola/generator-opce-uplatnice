class Uplatnica extends React.Component {
    render() {
        return(
        <div className="uplatnica">
            <img src="./img/uplatnica.jpg"/>
            <div className="uplatnica__element uplatnica__element-_platitelj">
                Marija Derežić
                <br/>Oboj 16/1
                <br/>10.000 Zagreb
            </div>
            <div className="uplatnica__element uplatnica__element-_primatelj">
                Geosfera d.o.o.
                <br/>Nikole Cara 4
                <br/>51.0000 Rijeka
            </div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iznos-left">625000</div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iban-left">HR8424840081103381985</div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--model">00</div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--poziv-na-broj">105-1-1</div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--sifra-namjene">ABCD</div>
            <div className="uplatnica__element uplatnica__element--opis-placanja-left">Uplata po računu 105-1-1</div>

            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iznos-right">6250,00</div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--iban-right">HR8424840081103381985</div>
            <div className="uplatnica__element uplatnica__element--numeric uplatnica__element--numeric--model-i-poziv-na-broj">00 105-1-1</div>
            <div className="uplatnica__element uplatnica__element--opis-placanja-right">Uplata po računu 105-1-1</div>
            
        </div>
        );
    }
}

export { Uplatnica }