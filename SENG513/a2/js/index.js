$(document).ready(function() {
    console.log($("#butt5").html)
});


function go(){
    let display = document.getElementById("butt1");
    let temp = display.value;
    console.log(validExp());
    if(validExp()){
        display.style.backgroundColor = "white";
        display.value = eval(display.value);
    }
    else{
        display.value = temp;
        display.style.backgroundColor = "#ee5253";
    }
}

function show(button){
    let butt = document.getElementById(button).innerHTML;
    console.log("hi");
    document.getElementById("butt1").value += butt; 
}

function del(){
    let display = document.getElementById("butt1");
    display.value = display.value.slice(0, -1)
}

function validExp(){
    let display = document.getElementById("butt1").value;
    for(let i=1; i<display.length;i++){
       if(display[i]=='/'){
            let denominator = eval(display.slice(i+1));
            if(denominator != 0){
                return true;
            }
            else{
                return false;
            }
       }
       else{
           continue;
       }
    }
    return true;
}