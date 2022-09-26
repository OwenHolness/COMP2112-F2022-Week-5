"use strict"; 
// IIFE -- Immediately Invoked Function Expression
// AKA -- Self Executing Function
(function()
{
    function Start()
    {
        console.log("App Started!");

        $.getJSON("./Data/contacts.json", function(DataSource){
            console.log(DataSource.ContactList[2]);
        })
    }

    window.addEventListener("load", Start);

})();