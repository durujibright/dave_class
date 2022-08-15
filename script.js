var firstName = document.getElementById("Firstname")
var lastName = document.getElementById("Lastname")
var userName = document.getElementById("Username")
var email = document.getElementById("Email")
var password = document.getElementById("Password")
var confirm = document.getElementById("Confirm_password")
var submit = document.getElementById("  ")


// function validate() {

//     if ( firstName === null ) {
//         alert("firstname can't be blank")
//         return false;
//     }


//     if ( lastName === null ) {
//         alert("last name can't be blank")
//         return false;
//     }


//     if ( userName === null ) {
//         alert("provide a unique username")
//         return false;
//     }


//     if ( email === null ) {
//         alert("email is required")    
//         return false;
//     }   
//     //else if (email.indexof("@") !== -1){
//     //     alert("provide a valid email address")
//     //     return false;
//     // }


//     if ( password === " " && password <= 7) {
//        alert("must not be less than 8 charaters")      
//        return false;
//     }


//     if ( confirm_password !== password ) {
//         alert("password are not the same")
//         return false;
//     }
//     return (false);
// }


function validate() {

    if (document.myForm.Firstname.value == "") {
        alert("Please provide your First name!");
        document.myForm.Firstname.focus();
        return false;
    }
    if (document.myForm.Lastname.value == "") {
        alert("Please provide your Last name!");
        document.myForm.Lastname.focus();
        return false;
    }
    if (document.myForm.Username.value == "") {
        alert("Please provide your User name!");
        document.myForm.Username.focus();
        return false;
    }
    if (document.myForm.Email.value == "") {
        alert("Please a valid Email!");
        document.myForm.Email.focus();
        return false;
    }
    if (document.myForm.Password.value === "") {
        alert("Input a strong Combination for your passcode.");
        document.myForm.Password.focus();
        return false;
    }else if ( document.myForm.Password.value.length <= 8){
        alert("Password can't be less than eight strong characters");
        document.myForm.Password.focus();
        return false;
    }
    if (document.myForm.Confirm_password.value !== password) {
        alert("your password dosent match");
        document.myForm.Confirm_password.focus();
        return (false);
    }//else if (document.myForm.Password.value === confirm_password) {
    //     alert("your form has been successfuly submited and under review");
    //     return (false);
    // }
    return (true);
}