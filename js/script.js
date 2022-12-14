//BUSINESS LOGIC

function BankAccount (){
    this.accounts = {};
    this.currentId = 0;
}

BankAccount.prototype.addAccount= function(account){
    account.id = this.assignid()
    this.accounts[account.id]=account;

}


BankAccount.prototype.assignid = function (id){
    this.currentid += 1
    return this.currentid;

}

BankAccount.prototype.findAccount = function(id){
    if (this.accounts[id] != undefined){
        return this.accounts[id];
    }
    return false;
}

BankAccount.prototype.DeletAccount = function(id){
    if (this.accounts[id] === undefined){
        return false;
    }
    delete this.accounts[id];
    return true;
};


// DUSINESS LOGIC FOR CONTACT

function account(firstName, lastName, phoneNumber, accountNumber){

this.firstName = firstName;
this.lastName  = lastName;
this.phoneNumber = phoneNumber;
this.accountNumber = accountNumber;

};

contact.prototype.accountDetails = function(){
    return this.firstName + " " + this.lastName + " " + this.accountNumber

};


// USER INTERFACE LOGIC

let bankAccount = new BankAccount();

function displayAccountDetails(bankAccounttoDisplay){
    let accountslist = $(" ul#accounts");
    let htmlForAccountInfo = "";
    Object.keys(bankAccountToDisplay,accounts).forEach(function(key) {
        const account = bankAccountToDisplay.findAccount(key); htmlForAccountInfo += "<li id=" + account.id + ">" + account.firstName + " " + account.lastName + "</li>";
        
    });

    accountslist.html(htmlForAccountInfo);

}


































