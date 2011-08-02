About:
===
Appcelerator Titanium Module for the LineaPRO iOS Device


Basic usage:
===
	Titanium.UI.setBackgroundColor('#000');
	// load LineaPro-TiModule
	var linea = require('linea');
	var tabGroup = Titanium.UI.createTabGroup();
	var win1 = Titanium.UI.createWindow({  
	    title:'LineaPro-TiModule Example',
	    backgroundColor:'#fff'
	});
	var tableview1 = Titanium.UI.createTableView({
		data:[]
	});
	win1.add(tableview1);
	// barcode listener
	linea.addEventListener('barcodeData', function(e) { 	
		tableview1.appendRow(Ti.UI.createTableViewRow({title:e.source, hasChild:false}));
	});
	var tab1 = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Barcode',
	    window:win1
	});
	var win2 = Titanium.UI.createWindow({  
	    title:'LineaPro-TiModule Example',
	    backgroundColor:'#fff'
	});
	var tableview2 = Titanium.UI.createTableView({
		data:[]
	});
	win2.add(tableview2);
	// magstripe listener
	linea.addEventListener('magneticCardData', function(e) { 	
		alert(e);
		tableview2.appendRow(Ti.UI.createTableViewRow({title:e.source, hasChild:false}));
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Magstripe',
	    window:win2
	});
	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);  
	tabGroup.open();


LICENSE
=======
Apache Public License version 2


COPYRIGHT
=========
Copyright (c) 2011 by Paul Nelson. All Rights Reserved.