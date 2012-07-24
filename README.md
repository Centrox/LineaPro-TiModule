About:
===
	Appcelerator Titanium Module for the LineaPRO iOS Device

Basic Usage:
===
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

Update(s):
===
	July 24, 2012
	- Removing Ti SDK 1.8+ Support
	- Focusing on Ti SDK 2.1+ compatibility
	
	~~~

	June 19, 2012
	NEW VERSION
	- iOS 5.1 Support
 	- Ti SDK 2+ Support
	
	~~~
	
	February 8, 2012
	NEW VERSION RELEASE
	- iOS 5 Support
	- Designed for Ti SDK 1.8+
	- Added new method:
		- isConnected: Checks Linea's connection state
	
	~~~

	December 20, 2011
	Added first SampleApp
	- info.plist is included in the applications root (iOS 5 BUG FIX)
	- Barcode support
		- Scan a barcode and it will appear in the tableView.
		
	COMING SOON:
	- Module update to handle settings/options of the LineaPRO.
	- Magstripe reader BUG FIX for iOS 5.
	- Updated SampleApp to handle Magstripe
	- Updated SampleApp to adjust the LineaPRO settings.
	
	~~~
	
	November 30, 2011
	Add the following to info.plist in your app root.
	
	<key>UISupportedExternalAccessoryProtocols</key>
	<array>
		<string>com.datecs.linea.pro.msr</string>
		<string>com.datecs.linea.pro.bar</string>
	</array>
	
	~~~
	
	November 30, 2011
		iOS 5 breaks info.plist on OBJ-C side.
		Known Resolution: 
			Add the following to info.plist and re-compile module.
			- com.datecs.linea.pro.msrc
			- com.datecs.linea.pro.bar
		This will fix the module so it works with iOS 5.


LICENSE
=======
	Apache Public License version 2


COPYRIGHT
=========
	Copyright (c) 2011 by Paul Nelson. All Rights Reserved.