console.log('Sukses Memuat External JS');

const form = document.getElementById("formcustomer"); // Ambil form pakai ID
const nameValue = document.getElementById("nama");
const emailValue = document.getElementById("email");
const interestValue = document.getElementById("interest");
const nameValidation = document.getElementById("validation-nama"); // Ambil elemen <p> setelah input
const emailValidation = document.getElementById("validation-email"); // Ambil elemen <p> setelah input
const interestValidation = document.getElementById("validation-interest"); // Ambil elemen <p> setelah input

form.addEventListener("submit", function (event) {
    nameValidation.textContent = "";
    emailValidation.textContent = "";
    interestValidation.textContent = "";

    if (nameValue.value === "") {
        nameValidation.textContent = "Nama tidak boleh kosong!";
        event.preventDefault();
    } else if (nameValue.value.length < 3) {
        nameValidation.textContent = "Nama minimal 3 karakter!";
        event.preventDefault();
    }
    
    if (emailValue.value === "") {
        emailValidation.textContent = "Email tidak boleh kosong!";
        event.preventDefault();
    }

    if (interestValue.value === ""){
        interestValidation.textContent = "Harap pilih Destinasi yang anda inginkan!";
        event.preventDefault();
    }

});

let indexBanner = 0;

showBanner();

function nextBanner(){
    indexBanner += 1;
    showBanner();
}

function showBanner(){
    let banner = document.getElementsByClassName('main-banner');

    //reset condition
    if(indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    //loop untuk hide semua
    for(let i = 0;i < banner.length; i++){
        banner[i].style.display = 'none';
    }

    //Show Banner
    banner[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);

