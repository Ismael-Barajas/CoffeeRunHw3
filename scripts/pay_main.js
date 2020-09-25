(function (window){
    'use strict';
    var PAYMENT_FORM = '[payment-form="form"]';
    var App = window.App;
    var PayHandler = App.PayHandler;
    var formHandler = new PayHandler(PAYMENT_FORM);


    formHandler.addSubmitHandler();

})(window);