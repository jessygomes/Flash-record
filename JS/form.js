
const form = document.querySelector('form');

function sendEmail(){
    const params = {
        lastname: document.getElementById('lastname').value,
        firstname: document.getElementById('firstname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    const servicesID = "service_ug68pgc";
    const templateID = "template_j6u151x"
    
    emailjs.send(servicesID, templateID, params)
    .then(
        res => {
            document.getElementById('lastname').value = "";
            document.getElementById('firstname').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Message envoyé !")
        }
    )
    .catch((err) => console.log(err));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})


