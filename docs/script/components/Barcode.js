class Barcode extends React.Component {

    constructor(props) {
        super(props);

        BarcodePayment.Init({
            ValidateIBAN: false, // Validation is not yet implemented
            ValidateModelPozivNaBroj: true // Validation is not yet implemented
        });
    }

    componentDidUpdate() {
        this.updateCanvas();
	}

	componentDidMount() {
        this.updateCanvas();
    }

    getPaymentParams() {
        var paymentParams = new BarcodePayment.PaymentParams();
        
        paymentParams.Iznos = this.props.iznos.replace('.',',');
        paymentParams.ImePlatitelja = this.props.platitelj__ime;
        paymentParams.AdresaPlatitelja = this.props.platitelj__adresa;
        paymentParams.SjedistePlatitelja = this.props.platitelj__postanskiBroj + ' ' + this.props.platitelj__gradMjesto;
        paymentParams.Primatelj = this.props.primatelj__ime;
        paymentParams.AdresaPrimatelja = this.props.primatelj__adresa;
        paymentParams.SjedistePrimatelja = this.props.primatelj__postanskiBroj + ' ' + this.props.primatelj__gradMjesto;
        paymentParams.IBAN = this.props.primatelj__iban;
        paymentParams.ModelPlacanja = this.props.primatelj__model;
        paymentParams.PozivNaBroj = this.props.primatelj__pozivNaBroj;
        paymentParams.SifraNamjene = this.props.sifra__namjene;
        paymentParams.OpisPlacanja = this.props.opis_placanja;
        
        return paymentParams
    }

    updateCanvas() {
		var paymentParams = this.getPaymentParams();
		var textToEncode = BarcodePayment.GetEncodedText(paymentParams);
		
		if (textToEncode == BarcodePayment.ResultCode.InvalidContent) {
			this.handleValidation(paymentParams);
			this.showError('Sadržaj forme nije ispravan!','2D kod ne može biti generiran!');
			return;
		} else if (textToEncode == BarcodePayment.ResultCode.InvalidObject || this.stringNotDefinedOrEmpty(textToEncode)) {
			alert();
			this.showError('Pri generiranju 2D koda','došlo je do tehničke greške!');
			return;
		} 
		
		// Barcode generation sample copied from library sample
		PDF417.init(textToEncode);
		var barcode = PDF417.getBarcodeArray();

		// block sizes (width and height) in pixels
		var bw = 2;
		var bh = 2;

		const canvas = this.refs.canvas;
		canvas.width = bw * barcode['num_cols'];
		canvas.height = bh * barcode['num_rows'];
		
		var ctx = canvas.getContext('2d');
		// graph barcode elements
		var y = 0;
		// for each row
		for (var r = 0; r < barcode['num_rows']; ++r) {
			var x = 0;
			// for each column
			for (var c = 0; c < barcode['num_cols']; ++c) {
				if (barcode['bcode'][r][c] == 1) {
					ctx.fillRect(x, y, bw, bh);
				}
				x += bw;
			}
			y += bh;
		}
	}

	handleValidation(paymentParams) {
		var result = BarcodePayment.ValidatePaymentParams(paymentParams);
		
		// TODO: result is BarcodePayment.ValidationResult, check which validations failed and display appropriate messages
	}

	stringNotDefinedOrEmpty(str) {
		return str == undefined || str == null || str.length == 0;
	}

	showError(errorText1,errorText2) {
		const canvas = this.refs.canvas;
		canvas.width = 238;
		canvas.height = 100;

		const ctx = canvas.getContext('2d');

		ctx.font = "14px Arial";
		ctx.fillStyle = "red";
		ctx.fillText(errorText1,30,35);
		ctx.fillText(errorText2,30,55);
		
	}

    render() {
        return(<canvas className="uplatnica__barcode" ref="canvas" />);
    }
}

export { Barcode }