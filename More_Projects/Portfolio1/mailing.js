
let form = document.querySelector('form');
let txt = document.querySelector(".text");

const getMessageReq = (e) => {
e.preventDefault();
txt.style.display = "block";
const http = new XMLHttpRequest();

http.open("POST", 'mail.php', true)
http.onload = () => {

    if(http.readyState == 4 && http.status == 200){
        let res  = http.response();
        
        if(res.indexOf("Email is Required") !== 1 || res.indexOf("Enter a Valid Email") || res.indexOf("Failed to Send Message")){
            txt.style.color = "red";
        }else{
            form.reset();

            setTimeout(() => {
                txt.style.display = "none";
            }, 3000);
        }

        txt.innerText = res;
    }

}

let formData = new FormData(form)
http.send(formData)
}


form.addEventListener('submit', getMessageReq);