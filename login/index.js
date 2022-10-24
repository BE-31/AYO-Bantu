const loginHandler = async (e) => {
    e.preventDefault();
    let ada = false;
    const form = document.querySelector('form');
    const username = document.querySelector('.user').value;
    const password = document.querySelector('.password').value;
    let role;
    const data = await fetch ("https://6350b9ac3e9fa1244e4bb9ad.mockapi.io/user")
    const raw = await data.json();
    const user = raw.forEach(element => {
        console.log (username + " " + password);
        console.log(element.username + ' ' + element.password);
        if(element.username === username && element.password === password){
            ada = true;
            role = element.role;
        }
    });
    if (ada===true){
        window.localStorage.setItem('username',username);
        window.localStorage.setItem('role',role);
        window.location.href = "/user.html";
    }
    else{
        alert("Username atau Password salah");
    }
}

const mataBuka = document.querySelector('.mata-buka');
const mataTutup = document.querySelector('.mata-tutup');

const seekHandler = async (e) => {
    e.preventDefault();
    const password = document.querySelector('.password');
    if(password.getAttribute('type') === 'password'){
        password.setAttribute('type','text');
        mataBuka.style.display = 'none';
        mataTutup.style.display = 'inline';
    }
    else{
        password.setAttribute('type','password');
        mataTutup.style.display = 'none';
        mataBuka.style.display = 'inline';
    }
    
}


const btnSubmit = document.getElementsByClassName('btn-submit');
mataBuka.addEventListener('click', seekHandler);
mataTutup.addEventListener('click', seekHandler);
btnSubmit[0].addEventListener('click', loginHandler);