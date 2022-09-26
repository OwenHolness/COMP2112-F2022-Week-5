"use strict";
// IIFE -- Immediately Invoked Function Expression
// AKA -- Self Executing Function
(function () {
    function Start() {
        console.log("App Started!");
        let contactList;
        $.getJSON("./Data/contacts.json", function (DataSource) {
            // get your data from the data source
            contactList = DataSource.ContactList;
            // Load your data into objects
            // let contact = new Contact();
            // console.log(contact.toString());
            let count = 0;
            for (const contact of contactList) {
                let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
                localStorage.setItem(count.toString(), newContact.toJSON());
                count++;
            }
            let keys = Object.keys(localStorage);
            for (let key of keys) {
                let newContact = new Contact();
                newContact.fromJSON(localStorage.getItem(key));
                console.log(newContact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map