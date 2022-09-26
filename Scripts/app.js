"use strict";
// IIFE -- Immediately Invoked Function Expression
// AKA -- Self Executing Function
(function () {
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    function LoadContactListData() {
        // Create an empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    function Start() {
        console.log("App Started!");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            // get your data from the data source
            let contactList = DataSource.ContactList;
            SaveContactListData(contactList);
            // Load your data into objects
            // let contact = new Contact();
            // console.log(contact.toString());
            let ContactArray = LoadContactListData();
            for (const contact of ContactArray) {
                console.log(contact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map