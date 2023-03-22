sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/JSONModel",
    "sap/ui/core/mvc/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter: formatter,

            onInit: function () {
               
                //Get i18n Model from Component
                var oI18n= this.getOwnerComponent().getModel("i18n");
               
                //Bind i18n to View
               oView.setModel(oI18n, "i18n");
               
                //Instantiate JSONModel
                var oAddressModel = new JSONModel();

                //Define Data
                var oAddress = {
                    "EID": "marian.abergale.tan",
                    "enabled" : true,
                    "Address" : {
                        "Street": "Stardew St.",
                        "City": "Valley City",
                        "Zip": 4023,
                        "Country": "Netherlands" 
                    },
                    "SalesAmount": 100,
                    "CurrencyCode": "EUR"
                };

                //Set the Data to Model
                oAddressModel.setData(oAddress);

                //Get the View
                var oView = this.getView();

                //Bind the Model to View
                oView.setModel(oAddressModel);

            },
            onSelectProduct: function(oEvent){
                //Get the Control (List)
                var oList = oEvent.getSource();

                //Get the selected item
                var oSelItem = oList.getSelectedItem();

                //Get the context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Bind the selected item to the control (SimpleForm in Panel4)
                this.getView().byId("idProductDetails").bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }
        });
    });
