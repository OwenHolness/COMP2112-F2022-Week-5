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
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            // vanilla javascript
            // document.getElementsByTagName("header")[0].innerHTML = html_data
            // jquery version
            $("header").html(html_data);
            $("li>a").on("click", function () {
                let title = $(this).prop("id");
                // capitalize the link and make it document title
                document.title = title.substring(0, 1).toUpperCase() + title.substring(1);
                LoadContent();
            });
            // $("#homePage").addClass("active")
            // let navLinks = document.querySelectorAll("li>a.nav-link")
            // for (const link of navLinks as HTMLAnchorElement[]) {
            //     console.log(link.href);
            // }
            // $("li>a.nav-link").each(function()
            // {
            //     console.log($(this).prop("href"))
            // });
            // switch(document.title)
            // {
            //     case "Home":
            //         $("#homePage").addClass("active")
            //         break;
            //     case "About Us":
            //         $("#aboutPage").addClass("active")
            //         break;
            //     case "Our Projects":
            //         $("#projectPage").addClass("active")
            //         break;
            //     case "Our Services":
            //         $("#servicesPage").addClass("active")
            //         break;
            //     case "Contact Us":
            //         $("#contactPage").addClass("active")
            //         break;
            // }
        });
    }
    function LoadContent() {
        switch (document.title) {
            case "Home":
                $.get("./Views/content/home.html", function (html_data) { $("main").html(html_data); });
                break;
            case "About":
                $.get("./Views/content/about.html", function (html_data) { $("main").html(html_data); });
                break;
            case "Projects":
                $.get("./Views/content/projects.html", function (html_data) { $("main").html(html_data); });
                break;
            case "Services":
                $.get("./Views/content/services.html", function (html_data) { $("main").html(html_data); });
                break;
            case "Contact":
                $.get("./Views/content/contact.html", function (html_data) { $("main").html(html_data); });
                break;
        }
    }
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            // vanilla javascript
            // document.getElementsByTagName("footer")[0].innerHTML = html_data
            // jquery version
            $("footer").html(html_data);
        });
    }
    function Start() {
        console.log("App Started!");
        // initial load
        document.title = "Home";
        LoadContent();
        LoadHeader();
        LoadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map