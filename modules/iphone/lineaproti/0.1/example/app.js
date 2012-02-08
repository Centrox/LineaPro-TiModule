// Author: Paul Nelson (iampnelson[at]gmail[dot]com)
// Follow me on twitter. @iampnelson

// Created: 2012-02-07
// Modified: 2012-02-07

// About: For use with LineaPRO and iPhone/iPod

// Supported Devices (tested with the following):
//	- iPhone 3Gs
//	- iPhone 4
//	- iPhone 4s
//	- iPod Touch 3rd Generation
//	- iPod Touch 4th Generation
			
// Requirements:
//	- iOS 5 SDK
//	- Titanium SDK 1.8.1

(function() {
	
	var win 		= Ti.UI.createWindow({
			backgroundColor	: '#FFF'
		}),
		title		= Ti.UI.createLabel({
			text		: 'LineaProTi',
			color		: '#333',
			textAlign	: 'center',
			font		: {fontSize:30},
			height		: 60,
			top			: 0
		}),
		tableView 	= Ti.UI.createTableView({
			backgroundColor	: '#333',
			height			: 400,
			bottom			: 0,
			rowHeight		: 50
		}),
		isConnectedButton = Ti.UI.createButton({
			title		: 'Check Connection State => ',
			width		: 250,
			height		: 40,
			left		: 5,
			style		: 'none',
			borderWidth	: 1,
			borderColor	: '#FFF'
		}),
		isConnectedLabel = Ti.UI.createLabel({
			text		: '',
			width		: 70,
			font		: {fontSize:12},
			right		: 0,
			textAlign	: 'center',
			color		: '#FFF'
		}),
		row1 = Ti.UI.createTableViewRow(),
		data = [];
		
		row1.add(isConnectedButton);
		row1.add(isConnectedLabel);
		data[0] = row1;
		
		tableView.setData(data);
	
	win.add(title);
	win.add(tableView);
	win.open();

	// Require LineaProTi Module
	var lineaproti = require('LineaProTi');
	Ti.API.debug("The following module loaded successfully => " + lineaproti);

	Ti.API.debug("LineaPro isConnected => " + lineaproti.isConnected);
	isConnectedLabel.text = lineaproti.isConnected;

	isConnectedButton.addEventListener('click', function() {
		Ti.API.debug("LineaPro isConnected => " + lineaproti.isConnected);
		isConnectedLabel.text = lineaproti.isConnected;
	});
	
})();