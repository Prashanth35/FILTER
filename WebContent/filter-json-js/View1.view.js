sap.ui.jsview("filter-json-js.View1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf filter-json-js.View1
	*/ 
	getControllerName : function() {
		return "filter-json-js.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf filter-json-js.View1
	*/ 
	createContent : function(oController) {
		var oTable = new sap.m.Table("table",{ 
            headerText: "Product List",
            columns : [ 
                        new sap.m.Column({
                                  header :[ new sap.m.Label({text : "Product Id"}) ]
                                         }),
                        new sap.m.Column({
                                  header :[ new sap.m.Label({text : "Name"}) ]
                                         }),
                       
                         new sap.m.Column({
                                   header :[ new sap.m.Label({text : "Type"}) ]
                                          }),
                          new sap.m.Column({
                                    header :[ new sap.m.Label({text : "Price"}) ]
                                            })
                      ]
});
		
		
oTable.setMode(sap.m.ListMode.SingleSelectMaster);
		
oTable.bindItems("/Products", new sap.m.ColumnListItem("listItem",{
                        cells : [ 
                                  new sap.m.Text({text : "{id}"}),
                                  new sap.m.Text({text : "{name}"}),
                                 
                                  new sap.m.Text({text : "{type}"}),
                                  new sap.m.Text({text : "{price}"})
                                  
                                ]
}));
 
var oPage = new sap.m.Page({
		title : "Sample Table Application",
		content : [oTable],
		footer : [sap.m.Bar({
						design : sap.m.BarDesign.Footer,
						contentMiddle : [
						                 new sap.m.Select({
						                	 id : "groupSelect",
						                	 change : oController.handleGroup,
						                	 icon : "sap-icon://filter",
						                	 type : "IconOnly",
						                	 selectedKey : "None",
						                	 autoAdjustWidth : true,
						                	 items : [ new sap.ui.core.Item({
						                		 key : "All",
						                		 text : "All"
						                	 }), 
						                	 		new sap.ui.core.Item({
						                	 			key : "Fruit",
						                	 			text : "Fruit"
						                	 		}),
						                	 		new sap.ui.core.Item({
						                	 			key : "Vegetable",
						                	 			text : "Vegetable"
						                	 		}),
						                	 		new sap.ui.core.Item({
														key : "Flower",
														text : "Flower"
													})
	        	
										        ]
											
									}),
 
									new sap.m.Text({
											text : "Filter"
										})
										]
		})]
	});
 
return oPage;
	}


});