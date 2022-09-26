class Contact 
{
    // private instance members (fields)
    private fullName: string;
    private contactNumber: string;
    private emailAddress: string;

    // public properties
    get FullName(): string 
    {
        return this.fullName;
    }

    set FullName(name: string) 
    {
        this.fullName = name;
    }

    get ContactNumber(): string 
    {
        return this.contactNumber;
    }

    set ContactNumber(contactNumber: string) 
    {
        this.contactNumber = contactNumber;
    }

    get EmailAddress(): string 
    {
        return this.emailAddress;
    }

    set EmailAddress(emailAddress: string) 
    {
        this.emailAddress = emailAddress;
    }

    // constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress="unknown email address"]
     * @memberof Contact
     */
    constructor(fullName: string = "unknown name",  contactNumber: string = "no contact number", emailAddress: string = "unknown email address") 
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    // public methods
    /**
     * This method overrides the built-in toString method for the contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    public toString(): string 
    {
        let outputString = ""
        outputString += `Full Name     : ${this.FullName}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Email Address : ${this.EmailAddress}\n`;
        return outputString;
    }

    // private methods
}