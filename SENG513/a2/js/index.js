
function go(){
    let display = document.getElementById("butt1");
    let temp = display.value;
    if(validExp() && (Infinity!==eval(display.value))){
        display.style.backgroundColor = "white";
        display.value = eval(display.value);
        let deleter = document.getElementById("butt2");
        deleter.innerHTML = "AC";
        deleter.addEventListener("click", ()=>{
            display.value = ""
        })
    }
    else{
        display.value = temp;
        display.style.backgroundColor = "#ee5253";
    }
}

function show(button){
    let butt = document.getElementById(button).innerHTML;
    let deleter = document.getElementById("butt2");
    deleter.innerHTML = "CE"
    deleter.addEventListener("click", del);
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