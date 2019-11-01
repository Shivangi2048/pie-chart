/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/zpieChart/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});