import { nalog2params } from 'paymentParamsFacade';

class Barcode extends React.Component {

    componentDidUpdate() {
        this.updateCanvas();
	}

    shouldComponentUpdate(newProps, newState) {
        return(JSON.stringify(newProps) !== JSON.stringify(this.props));
	}

	componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {

		const encodedText = this.props.encodedText;

		if (encodedText == BarcodePayment.ResultCode.InvalidContent) {
			this.showError('Sadržaj forme nije ispravan!','2D kod ne može biti generiran!');
			return;
		} else if (encodedText == BarcodePayment.ResultCode.InvalidObject || this.stringNotDefinedOrEmpty(encodedText)) {
			this.showError('Pri generiranju 2D koda','došlo je do tehničke greške!');
			return;
		} 

		// Barcode generation sample copied from library sample
		PDF417.init(encodedText);
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

const mapStateToProps = (state, ownProps) => {
    return({
		encodedText: BarcodePayment.GetEncodedText(nalog2params(state.nalog)),
        ...ownProps // ovo su svi ostali property-i koji mogu biti zadani
    });
};

const ConnectedBarcode = ReactRedux.connect(mapStateToProps)(Barcode);


export { Barcode, ConnectedBarcode }