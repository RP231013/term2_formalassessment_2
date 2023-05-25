

regStu = () => {

    let name = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let num = +document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let pass = document.getElementById("password").value;


    if(document.getElementById("spamCheck").checked){
        alert("Welcome " + name + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + num)
    }else{
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + "!  If you want to sign up, you better CHECK that newsletter box!")
    }




    document.getElementById("regForm").reset();
}