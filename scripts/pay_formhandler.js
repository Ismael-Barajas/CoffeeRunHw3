/* jshint esversion: 6 */
(function (window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }

            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }

        addSubmitHandler(what_goes_here) {
            console.log('Setting submit handler for form');
            this.$formElement.on('submit', function (event) {
                event.preventDefault();

                var data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                
                //used checklist method
                var $div = $('<div></div>', {
                    'id': 'div',
                    'class': 'modal',
                    'modal': 'open'
                });

                var paymessage = 'Thank you for your payment, ' + data.title + ' ' + data.username;
                $div.append(paymessage);
                this.reset();
                this.elements[0].focus();
            });
        }
    }

    App.PayHandler = FormHandler;
    window.App = App;

})(window);