const username = document.querySelector('#Username');
const emailel = document.querySelector('#email2');
const form = document.querySelector('#signup');
function required(value){
    if(value===''){
        return false;
    }
    else{
        return true;
    }
}
function inbetween(length, min, max){
    if(length < min || length > max){
        return false
    }
else{
    return true
}
}
function isemailvalid(email)
{
  const re =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
return re.test(email)
}

const showerror = (input, message) =>{
const formfield = input.parentElement;
formfield.classList.remove('succes');
formfield.classList.add('error');

const error = formfield.querySelector('small');
error.textContent = message;
};

const showsuccess = (input, message) =>{
    const formfield = input.parentElement;
    formfield.classList.remove('error');
    formfield.classList.add('success');
    
    const succes = formfield.querySelector('small');
    succes.textContent ='';
    };


const checkusername = () =>{
    let valid = false
const min = 3 , max = 30;
const usernameel = username.value.trim();
if(!required(usernameel)){
showerror(username, `*Username cannot be blank*`);
} 
else if(!inbetween(usernameel.length,min,max)){
showerror(username, `*Username must be between ${min} to ${max} character*`);
}
else{
    showsuccess(username);
    valid = true;
}
return valid;
};


const checkEmail = () => {
    let valid = false;


const Email = emailel.value.trim();
  if (!required(Email)) {
    showerror(emailel, "*Email cannot be blank.*");
  } else if (!isemailvalid(Email)){
    showerror(emailel, `*email is not valid*`);
  } else {
    showsuccess(emailel);
    valid = true;
  }
  return valid;
};



form.addEventListener('click', function (r) {
    r.preventDefault();
let usernamevalid = checkusername();
 let isemailvalid = checkEmail();
 let radiobtnvalid = radiobtn();

let isformvalid = usernamevalid &&
isemailvalid && radiobtnvalid;

if(isformvalid){

}

});
const debounce = (fn) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, 500);
    };
  };

  
  form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'Username':
            checkusername();
            break;
        case 'email2':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
  }));