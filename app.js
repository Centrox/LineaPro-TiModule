//
// LineaPro-TiModule Demo
// Created 2012-07-24 by Paul Nelson
// Updated 2012-07-25 by Paul Nelson
//

var styles = {
	Window 		: {backgroundColor:'#FFF'},
	TableView	: {backgroundColor:'#FFF'},
	TableViewRow: {font:{fontSize:14},hasChild:true},
	Title		: {font:{fontSize:18},top:20,width:320,color:'#333',height:40,textAlign:'center'},
	State		: {font:{fontSize:14},top:60,width:320,color:'#336699',height:40,textAlign:'center'},
	TestAgain	: {width:200,height:40,bottom:40}
};
var $$ = styles;

var App = Ti.UI.createWindow();

var RootWindow		= Ti.UI.createWindow($$.Window);
	RootWindow.title= 'LineaPro-TiModule Demo';
	
var RootTableView = Ti.UI.createTableView($$.TableView);

var Nav = Ti.UI.iPhone.createNavigationGroup({window:RootWindow});
	
var data = [];

	data[0] 		= Ti.UI.createTableViewRow($$.TableViewRow);
	data[0].title 	= 'Check Connection State';
	
	data[1] 		= Ti.UI.createTableViewRow($$.TableViewRow);
	data[1].title 	= 'Check Battery Level';
	
	data[2] 		= Ti.UI.createTableViewRow($$.TableViewRow);
	data[2].title 	= 'Scan a Barcode!';
	
	RootTableView.setData(data);
		
	RootWindow.add(RootTableView);
	
	App.add(Nav);
	
	App.open();

// Require lineaprotimodule after application has loaded.	
var lineaprotimodule = require('lineaprotimodule');

// Check Connection State
data[0].addEventListener('click', function() {
	var w = Ti.UI.createWindow($$.Window);
	
	var title		= Ti.UI.createLabel($$.Title);
		title.text	= 'Checking Connection State...';
		
	var state 		= Ti.UI.createLabel($$.State);
	
	var testAgainButton 		= Ti.UI.createButton($$.TestAgain);
		testAgainButton.title	= 'Run Test Again';
		
		w.add(title);
		w.add(state);
		w.add(testAgainButton);
		
		Nav.open(w);
	
	if (Titanium.Platform.model == 'Simulator') {
		state.text	= 'N/A';
	} else {
		state.text	= lineaprotimodule.checkConnectionState();
	}
	
	testAgainButton.addEventListener('click', function() {
		if (Titanium.Platform.model == 'Simulator') {
			state.text	= 'N/A';
		} else {
			state.text	= lineaprotimodule.checkConnectionState();
		}
	});
});

// Check Battery Level
data[1].addEventListener('click', function() {
	var w = Ti.UI.createWindow($$.Window);
	
	var title		= Ti.UI.createLabel($$.Title);
		title.text	= 'Checking Battery Level...';
		
	var state 		= Ti.UI.createLabel($$.State);
	
	var testAgainButton 		= Ti.UI.createButton($$.TestAgain);
		testAgainButton.title	= 'Run Test Again';
		
		w.add(title);
		w.add(state);
		w.add(testAgainButton);
		
		Nav.open(w);
	
	if (Titanium.Platform.model == 'Simulator') {
		state.text	= 'N/A';
	} else {
		state.text	= lineaprotimodule.checkBatteryLevel();
	}
	
	testAgainButton.addEventListener('click', function() {
		if (Titanium.Platform.model == 'Simulator') {
			state.text	= 'N/A';
		} else {
			state.text	= lineaprotimodule.checkBatteryLevel();
		}
	});
});

// Scan a Barcode!
data[2].addEventListener('click', function() {
	var w = Ti.UI.createWindow($$.Window);
	
	var title		= Ti.UI.createLabel($$.Title);
		title.text	= 'Scan a Barcode!';
		
	var state 		= Ti.UI.createLabel($$.State);
	
		w.add(title);
		w.add(state);
		
		Nav.open(w);
	
	if (Titanium.Platform.model == 'Simulator') {
		state.text	= 'N/A';
	} else {
		lineaprotimodule.addEventListener('scannedBarcode', function(e) {
			Ti.API.info(e);
			state.text = e.barcode + ' ( '+e.barcodeType+' )';
		});
	}
});