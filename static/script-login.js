function registered(){
    let mainbox=document.getElementById("mainbox")
    let loginbox=document.getElementById("loginbox")
    loginbox.style.display="none";
    mainbox.style.display="block";
}
function loginprocess(){
    let mainbox=document.getElementById("mainbox")
    let loginbox=document.getElementById("loginbox")
    loginbox.style.display="block";
    mainbox.style.display="none";
}
window.onload = function(){
    let submit= document.getElementById('submitsignup');
    submit.onclick= function(){
    confirm("click ok to confirm")
    }
}
