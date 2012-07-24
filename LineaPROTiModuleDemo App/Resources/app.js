var win = Ti.UI.createWindow({
		backgroundColor	: 'white',
		title			: 'LineaPROTiModule Demo App',
		barColor		: 'black'
	}),
	barcode = Ti.UI.createLabel();

win.add(barcode);

win.open({modal:true,animated:false});

var lineaprotimodule = require('lineaprotimodule');
Ti.API.info("module is => " + lineaprotimodule);

lineaprotimodule.addEventListener('barcodeData', function(e) {     
    barcode.text = e.source;
});