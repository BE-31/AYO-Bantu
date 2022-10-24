// DISABILITY VALUE
function yesnoCheck(that) 
{
    var elemen = document.getElementById("yes")
    if (that.value == "Yes") {
        elemen.style.visibility = 'visible'
        elemen.style.display = "block";
    }
    else if (that.value == "No") {
        elemen.style.visibility = 'hidden'
    }
}

// DISABILITY ORGANIZATON VALUE
function yesnoCheck2(that) 
{
    var elemen = document.getElementById("yes2")
    if (that.value == "Yes") {
        elemen.style.visibility = 'visible'
        elemen.style.display = "block";
    }
    else if (that.value == "No") {
        elemen.style.visibility = 'hidden'
    }
}

// CHECK EMPTY FORM
function validate(){
    if(document.forms["form-input"]["name"].value == ""){
        customAlert.alert('Name cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["name"].focus()
        return false
    }
    if(document.forms["form-input"]["nationalIdentificationNumber"].value == ""){
        customAlert.alert('National Identification Number cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["nationalIdentificationNumber"].focus()
        return false
    }
    if(document.forms["form-input"]["dateOfBirth"].value == ""){
        customAlert.alert('Date of Birth cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["dateOfBirth"].focus()
        return false
    }
    if(document.forms["form-input"]["contact"].value == ""){
        customAlert.alert('Contact cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["contact"].focus()
        return false
    }
    if(document.forms["form-input"]["email"].value == ""){
        customAlert.alert('Email cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["email"].focus()
        return false
    }
    if(document.forms["form-input"]["address"].value == ""){
        customAlert.alert('Address cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["Address"].focus()
        return false
    }
    if(document.forms["form-input"]["disability"].value == ""){
        customAlert.alert('You Have To Choose One of The Option','Oops.. Something goes wrong!')
        document.forms["form-input"]["disability"].focus()
        return false
    }
    if(document.forms["form-input"]["helpneeded"].value == ""){
        customAlert.alert('This section cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["helpneeded"].focus()
        return false
    }
    if(document.forms["form-input"]["username"].value == ""){
        customAlert.alert('Username cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["username"].focus()
        return false
    }
    if(document.forms["form-input"]["password"].value == ""){
        customAlert.alert('Password cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["password"].focus()
        return false
    }
    if(document.forms["form-input"]["password2"].value == ""){
        customAlert.alert('Password cannot be empty','Oops.. Something goes wrong!')
        document.forms["form-input"]["password2"].focus()
        return false
    }
    else{
        return true
    }
}

// CHECK PASSWORD
function checkPassword(){
    //CHECK PASSWORD LENGTH
    if(document.forms["form-input"]["password"].value < 8){
        customAlert.alert('Your password should be at least 8 characters','Oops.. Something goes wrong!')
        document.forms["form-input"]["password"].focus()
        return false
    }
    //CHECK PASSWORD CHARACTER
    for (var i = 0; i < document.forms["form-input"]["password"].value.length; i ++){
        var ch = document.forms["form-input"]["password"].value.charAt(i);
        if((ch < "A" || ch > "Z") && (ch < "a" || ch > "z") && (ch < "0" || ch > "9")){
            customAlert.alert('Your password should only contain numeric or alpabhet character','Oops.. Something goes wrong!')
            document.forms["form-input"]["password"].focus()
            return false;
        }
    }
    if(document.forms["form-input"]["password"].value != document.forms["form-input"]["password2"].value){
        customAlert.alert('Try to re-enter the same password','Oops.. Something goes wrong!')
        return false
    }
    else {
        return true
    }
}

// SUBMIT
let form = document.querySelector("#form-input")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validate()){
        if(checkPassword()){
            const preDataUser = new FormData(form) 
            const dataUser = new URLSearchParams(preDataUser)
            console.log([...dataUser])
            
            fetch('https://6350b9ac3e9fa1244e4bb9ad.mockapi.io/user', {
                method: "POST",
                body: dataUser,
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))        
        }
    }
})

// ALERT
function CustomAlert(){
    this.alert = function(message,title){
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
      
      dialogbox.style.top = "100px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      
      document.getElementById('dialogboxhead').style.display = 'block';
  
      if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
      } else {
        document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
      }
      document.getElementById('dialogboxbody').innerHTML = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }
    
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    }
  }
  
  let customAlert = new CustomAlert();