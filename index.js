const header =document.getElementById("header");
const title = document.getElementById("title");
const content = document.getElementById("content");
const profile_image = document.getElementById("profile-image");
const ProfileName = document.getElementById("name");
const date = document.getElementById("date");

const animated_bg =document.querySelectorAll(".animated-bg");
const animated_bg_text =document.querySelectorAll(".animated-bg-text");



function getInfo(){
    header.innerHTML=`<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="image header by isiaka Abdulahi">`;
    title.innerText= "Welcome To Remlad Ventures";
    content.innerText= "REMLAD DATA is a reliable web to buy Cheap SME Data & Direct Data Bundles, Airtime VTU, Cable Subscriptions, Pay Electricity Bills & More..."
    profile_image.innerHTML= `<img src="/ISIAKA.png" alt="REMLAD CEO">`  
    ProfileName.innerText ="ISIAKA ABDULAHI"
    date.innerHTML = 'Feb 21, 2021'

animated_bg.forEach((bg) => bg.classList.remove("animated-bg"))
animated_bg_text.forEach((bgs) => bgs.classList.remove("animated-bg-text"))


}


setTimeout(getInfo,2500)