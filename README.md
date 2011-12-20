Update(s):
===
	December 20, 2011 8:35AMPDT
	Added first SampleApp
	- info.plist is included in the applications root (iOS 5 BUG FIX)
	- Barcode support
		- Scan a barcode and it will appear in the tableView.
		
	COMING SOON:
	- Module update to handle settings/options of the LineaPRO.
	- Magstripe reader BUG FIX for iOS 5.
	- Updated SampleApp to handle Magstripe
	- Updated SampleApp to adjust the LineaPRO settings.
	

	November 30, 2011 3:15PMPDT
	Add the following to info.plist in your app root.
	
	<key>UISupportedExternalAccessoryProtocols</key>
	<array>
		<string>com.datecs.linea.pro.msr</string>
		<string>com.datecs.linea.pro.bar</string>
	</array>
	
	November 30, 2011 9:00AMPDT
		iOS 5 breaks info.plist on OBJ-C side.
		Known Resolution: 
			Add the following to info.plist and re-compile module.
			- com.datecs.linea.pro.msrc
			- com.datecs.linea.pro.bar
		This will fix the module so it works with iOS 5.

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