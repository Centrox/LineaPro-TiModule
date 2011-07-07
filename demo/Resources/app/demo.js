/**
 * @author Paul Nelson
 * @copyright (c) 2011
 * @created Thu Jul 7 13:08:49 PDT 2011
 */

var demo= {};
(function(){
	demo.start = function() {
		Titanium.UI.setBackgroundColor('#FFF');
		/**
		 * var
		 */
		var mainWindow,
			demoWindow,
			data,
			table,
			nav,
			linea,
			barcode,
			row;
		//----- mainWindow
		mainWindow = Titanium.UI.createWindow();
		//----- demoWindow
		demoWindow = Titanium.UI.createWindow({
		    backgroundColor:"#FFF",
		    title:"LineaPro-TiModule Demo"
		});
		//----- data
		data = [];
		//----- table
		table = Titanium.UI.createTableView({data:data});
		demoWindow.add(table);
		/**
		 * LineaPro-TiModule (connected/disconnected)
		 * @params barcodeData
		 */
		linea = require('linea');
		linea.addEventListener('barcodeData', function(e)
		{ 	
			barcode = e.source;
			row = Titanium.UI.createTableViewRow({
				title:barcode,
				hasChild:false,
				color:'#333',
				height:25,
				backgroundColor:'#FFF'
			});
			table.appendRow(row,{animated:true});
		});
		//----- nav
		nav = Titanium.UI.iPhone.createNavigationGroup({
		   window:demoWindow
		});
		mainWindow.add(nav);
		mainWindow.open();
	};
})();