// -----------Validation------
function data(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("email").value;
    var c=document.getElementById("password").value;
    var d=document.getElementById("confirmpassword").value;

    if(a=="" ||b=="" ||c=="" ||d==""){
        alert("All Fields are mendatory");
        return false;
    }
    else if(c!=d){
        alert("Please Enter same Password");
        return false;
    }
    else{
        true;
    }
}

// ---------toggel password---------
let password1 = document.getElementById('password');
let toggelPassword1 = document.getElementById('toggle1');

function showHide1(){
    if(password1.type === 'password'){
       password1.setAttribute('type', 'text');
       let toggleid1 = document.getElementById('toggleid1')
       toggleid1.innerHTML = 'Hide';
    }
    else{
       password1.setAttribute('type', 'password');
       let toggleid1 = document.getElementById('toggleid1')
       toggleid1.innerHTML = 'Show';
    }
}
// ---------toggel password---------
let password2 = document.getElementById('confirmpassword');
let toggelPassword2 = document.getElementById('toggle2');

function showHide2(){
    if(password2.type === 'password'){
       password2.setAttribute('type', 'text');
       let toggleid2 = document.getElementById('toggleid2')
       toggleid2.innerHTML = 'Hide';
    }
    else{
       password2.setAttribute('type', 'password');
       let toggleid2 = document.getElementById('toggleid2')
       toggleid2.innerHTML = 'Show';
    }
}

// -----------------------set btn--------------
