var settingMenuBox = document.querySelector(".settingsMenu");
var toggleBtn = document.querySelector(".toggleBtn");
var toggleBtnMark = document.querySelector(".toggleBtnMark");
var html = document.querySelector("html");
var logoImg = document.querySelector(".logoImg");

function settingMenuOpen(){
    settingMenuBox.classList.toggle("openSettingMenu");
}

toggleBtn.addEventListener("click", ()=>{
    html.classList.toggle("dark-theme");
    toggleBtnMark.classList.toggle("toggleBtnMarkDarkTheme");

    if(html.classList.contains("dark-theme")){
        logoImg.src = "images/logo2.png"
    }else{
        logoImg.src = "images/logo.png"
    }

    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
    }else{
        localStorage.setItem("theme", "dark");
    }
})


if(localStorage.getItem("theme") == "light"){
    html.classList.remove("dark-theme");
    toggleBtnMark.classList.remove("toggleBtnMarkDarkTheme");
    logoImg.src = "images/logo.png"
}
else if(localStorage.getItem("theme") == "dark"){
    html.classList.add("dark-theme");
    toggleBtnMark.classList.add("toggleBtnMarkDarkTheme");
    logoImg.src = "images/logo2.png"
}
else{
    localStorage.setItem("theme", "light");
}