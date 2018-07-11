sap.ui.controller("filter-json-js.View1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf filter-json-js.View1
*/
	onInit: function() {
		
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("model/mock.json");
        sap.ui.getCore().setModel(oModel);
	
	},

handleGroup : function (oEvent) {
		var item = oEvent.getParameter("selectedItem").mProperties.key;
			var list = sap.ui.getCore().byId("table");
			var oBinding = list.getBinding("items");
			
			console.log(item);
			if(item == "All"){
				oBinding.filter([]);
			}else {
				oBinding.filter(new sap.ui.model.Filter("type", "EQ", item ));
			}
		
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf filter-json-js.View1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf filter-json-js.View1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf filter-json-js.View1
*/
//	onExit: function() {
//
//	}

});