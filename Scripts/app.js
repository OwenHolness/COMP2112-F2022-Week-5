"use strict"; 
// IIFE -- Immediately Invoked Function Expression
// AKA -- Self Executing Function
(function()
{

    /**
     * This function loads data Asynchronously from a URL.
     *It calls the callback funtion when the data loading is complete
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method, url, callback)
    {
        // Step 1 - Create an empty XHR object
        let XHR = new XMLHttpRequest();

        // Step 2 - Compose the Request
        XHR.open(method, url);

        // Step 3 - Send the request to the server
        XHR.send();

        // Step 4 - Setup an event listener
        XHR.addEventListener("readystatechange", function() {

            if(XHR.status == 200 && XHR.readyState == 4)
            {  
                callback(XHR.responseText);
                // let contactDataSource = JSON.parse(XHR.responseText)
                // console.log(contactDataSource.ContactList[2])
            }

        });
    }

    // First method of using functions
    function Start()
    {
        console.log("App Started!");

        LoadData("GET", "./Data/contacts.json", function(XHR){
            console.log(XHR);
        });
    }

    // Second method of usi ng functions
    // let Start = function()
    // {
    //     console.log("App Started!");
    // }

    // Third method of using functions
    // let Start = () => {
    //     console.log("App Started!");
    // }
    window.addEventListener("load", Start);

})();