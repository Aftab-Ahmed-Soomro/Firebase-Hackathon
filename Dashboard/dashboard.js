import {auth, signOut, onAuthStateChanged  } from '../firebase.js'


let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`

let logOutBtn = document.getElementById("logOutBtn")
const logOut = () =>{
    signOut(auth).then(() => {
        Toastify({
            text: "Logout Sucessfully",
            position: 'center',
            duration: 3000
            }).showToast();
            }).catch((error) => {
                Toastify({
                    text: error,
                    position: 'center',
                    duration: 3000
                    }).showToast();
                    });
}

logOutBtn.addEventListener('click', logOut)

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../index.html'
    } 
  });

  
scrollConatiner.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollConatiner.scrollLeft += evt.deltaY;
    scrollConatiner.style.behavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
    scrollConatiner.style.behavior = "smooth";
    scrollConatiner.scrollLeft += 900;
})
backBtn.addEventListener("click", ()=>{
    scrollConatiner.style.behavior = "smooth";
    scrollConatiner.scrollLeft -= 900;
})


