// code for Opening form on click
function showModal(){
    document.querySelector('.login-form').classList.add('show-loginform');
}

var loginbtn=document.querySelector('#lb');
loginbtn.addEventListener('click', showModal)

// code for closing form on click
function closeModal(){
    document.querySelector('.login-form').classList.remove('show-loginform');
}

var closeForm=document.querySelector('span');
closeForm.addEventListener('click', closeModal)
