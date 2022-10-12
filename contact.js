function validate(){
    var name = document.getElementById("contact_name").value
    var email = document.getElementById("contact_email").value
    var gender_male = document.getElementById("contact_gender_male").checked
    var gender_female = document.getElementById("contact_gender_female").checked
    var branch = document.getElementById("contact_branch").value
    var message = document.getElementById("contact_message").value
    var agree = document.getElementById("contact_check").checked
    var errormsg = document.getElementById("errormsg")

    if(name == ''){
        errormsg.innerHTML = "Name must be filled"
    }else if(email == ''){
        errormsg.innerHTML = "Email must be filled"
    }else if(email.indexOf("@") == -1){
        errormsg.innerHTML = "Email must contain @"
    }else if(email.indexOf("@")==0){
        errormsg.innerHTML = "Email cannot start with an @"
    }else if(email.split("@").length > 2){
        errormsg.innerHTML = "Email cannot contain 2 @"
    }else if(!email.endsWith(".com")){
        errormsg.innerHTML = "Email must end with .com"
    }else if(!gender_male && !gender_female){
        errormsg.innerHTML = "You must choose your gender"
    }else if(branch == ''){
        errormsg.innerHTML = "You must the Branch Location"
    }else if(message == ''){
        errormsg.innerHTML = "You must fill your message"
    }else{
        errormsg.innerHTML = ""
        var gender = ""
        if(gender_male){
            gender = "Male"
        }else if(gender_female){
            gender = "Female"
        }
        var news = ""
        if(agree){
            news = "You want to receive our latest information"
        }else if(!agree){
            news = "You don't want to receive our latest information"
        }
        if(confirm(
            "Name : "+name+"\nEmail : "+email+"\nGender : "+gender+"\nBranch : "+branch+"\nMessage : "+message+"\n"+news+"\n\n\nAre You Sure?"
        )){
            alert("Message Sent!")
        }
    }
}