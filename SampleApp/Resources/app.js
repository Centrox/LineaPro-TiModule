//-------------------------)>
// LineaPRO-TiModule SampleApp
// Author: 	Paul Nelson
// Created: December 20, 2011
//-------------------------)>

	//-> Require LineaPRO-TiModule
var LineaPRO 	= require('linea'),
	win 		= Ti.UI.createWindow(),
	//-> tableView where LineaPRO scans will append
	tableView 	= Ti.UI.createTableView();

win.add(tableView);
win.open();

//-> Counter for tableView.scrollToIndex
var i = 0;
//-> LineaPRO Barcode eventListener
LineaPRO.addEventListener('barcodeData', function(e) { 	
	//-> Keep your iPhone/LineaPRO plugged into your Mac (after sync) and open XCode and watch the console of your device.
	//-> 'BARCODE SCANNED->' should appear everytime the LineaPRO successfully scans something.
	Ti.API.info('BARCODE SCANNED-> '+e.source);
	tableView.appendRow(Ti.UI.createTableViewRow({title:e.source}));
	tableView.scrollToIndex(i);
	i++;
});