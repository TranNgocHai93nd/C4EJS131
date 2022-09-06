let element = document.querySelector('div');
function pressShift (event) {
    if (event.shiftKey){
        alert("Có an Shift");
    }else{
        alert("Khong an Shift");
    }
}
document.body.onclick = pressShift;