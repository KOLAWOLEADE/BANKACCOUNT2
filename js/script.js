//BUSINESS LOGIC
function BankAccount (){
    this.accounts = {}
    this.currentId = 0;
    this.accountBalance = 6500;
    this.accountNumber = 19952301;
    this.PIN = 2222

}

// ASSIGN CURRENT ID
BankAccount.prototype.assignid = function (id){
    this.currentid += 1
    return this.currentid;

}

// ASSIGN ACCOUNT NUMBER
BankAccount.prototype.assignAccountNumber = function(AN){
    this.accountNumber += 800;
    return this.accountNumber;

}
// FIND ACCOUNT
BankAccount.prototype.findAccount = function(id) {
    if (this.accounts[id] != undefined) {
      return this.accounts[id];
    }
    return false;
  };

// ADD DEPOSIT

BankAccount.prototype.deposit= function(){
    this.accountBalance = this.accountBalance + $("#deposit").val();
    return this.accountBalance;
}

// ASSIGN PIN
BankAccount.prototype.findPin = function(){
    if (this.PIN === "2222"){
        return this.accountBalance;
    }
    else{
        return false;
    }
   
}

// SUBTRACT WITHDRAWL
BankAccount.prototype.withdraw = function(){
    if ($("#withdraw").val() > this.accountBalance){
        return insufficient;
    }

    else(this.accountBalance = this.accountBalance - $("#withdraw").val()) 

        return this.accountBalance;   
  
}

// BUSINESS LOGIC FOR CONTACT
function Account(firstName, lastName, phoneNumber, accountNumber){

this.firstName = firstName;
this.lastName  = lastName;
this.phoneNumber = phoneNumber;
this.accountNumber = accountNumber;

};  

Account.prototype.accountDetails = function() {
    return this.firstName +" " + this.lastName +" " + this.phoneNumber +" " + this.accountNumber;
}

//  //deposit button event handler
//  const deposit_btn = document.getElementById('deposit-btn');
//  deposit_btn.addEventListener('click', function(){

//      const depositStringToInt = getInputNumb("deposit-amount");

//      updateSpanTest("current-deposit", depositStringToInt);
//      updateSpanTest("current-balance", depositStringToInt);

//      //setting up the input field blank when clicked
//      document.getElementById('deposit-amount').value = "";

//  })

//   //withdraw button event handler
//   const withdraw_btn = document.getElementById('withdraw-btn');
//   withdraw_btn.addEventListener('click', function(){
//      const withdrawNumb = getInputNumb("withdraw-amount");

//      updateSpanTest("current-withdraw", withdrawNumb);
//      updateSpanTest("current-balance", -1 * withdrawNumb);
//      //setting up the input field blank when clicked
//      document.getElementById('withdraw-amount').value = "";
//  })

//  //function to parse string input to int
//  function getInputNumb(idName){
//      const amount = document.getElementById(idName).value;
//      const amountNumber = parseFloat(amount);
//      return amountNumber;
//  }

//  function updateSpanTest(idName, addedNumber){
//      //x1.1 updating balance the same way
//      const current = document.getElementById(idName).innerText;
//      const currentStringToInt = parseFloat(current);

//      const total = currentStringToInt + addedNumber;

//      //x1.2 setting this value in balance
//      document.getElementById(idName).innerText = total;
//  }



// User Interface Logic ---------
let bankAccount = new BankAccount();

function displayAccouttDetails(bankAccoutToDisplay) {
  let accountsList = $("ul#accounts");
  let htmlForAccountInfo = "";
  Object.keys(bankAccountToDisplay.Accounts).forEach(function(key) {
    const account = bankAccountToDisplay.findAccount(key);
    htmlForAccountInfo += "<li id=" + account.id + ">" + account.firstName + " " + account.lastName+" "+ account.accountNumber + "</li>";
  });

  accountsList.html(htmlForAccountInfo);
}


function showAccount(accountId) {
    const account = bankAccount.findAccount(accountId);
    $("#show-account").show();
    $(".first-name").html(account.firstName);
    $(".last-name").html(account.lastName);
    $(".phone-number").html(account.phoneNumber);
    $(".account-number").html(account.accountNumber);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" +  + account.id + ">Delete</button>");
  }



  function attachAcountListeners() {
    $("ul#accounts").on("click", "li", function() {
      showAccount(this.id);
      
    });
  
    // to delete contact
  
    $("#buttons").on("click", ".deleteButton", function() {
      bankAccount.deleteContact(this.id);
      $("#show-account").hide();
      displayAccountDetails(bankAccount);
    });
  }


//ACCOUNT OPENING FORM

$(document).ready(function(){
    $("#opening-form").submit(function(event){
        event.preventDefault();

        attachAccountListeners();
      

        const DateInput = $("#Date").val();
        const firstName = $("#first-name").val();
        const lastName  = $("#last-name").val();
        const Email = $("#Email").val();
        const DateOfBirth = $("#DateOfBirth").val();
        const Gender = $("#Gender").val();
        const MaritalStatus = $("#MaritalStatus").val();
        const Deposit = $("#Deposit").val();


        let newAccount = [DateInput,firstName,lastName,Email,DateOfBirth,Gender,MaritalStatus,Deposit]

        $(".newAccount").show();
     
       $(".newAccount").text(newAccount)

      

    }) 
         
    
})


































