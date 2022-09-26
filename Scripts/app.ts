"use strict"; 
// IIFE -- Immediately Invoked Function Expression
// AKA -- Self Executing Function
(function()
{
    function Start()
    {
        console.log("App Started!");

        let contactList

        $.getJSON("./Data/contacts.json", function(DataSource){
            // get your data from the data source
            contactList = DataSource.ContactList

            // Load your data into objects
            let contact = new Contact();
            console.log(contact.toString());
        });


    }

    window.addEventListener("load", Start);

})();