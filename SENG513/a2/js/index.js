// Murtaza Shah
// UCID: 30046761
// SENG 513 B04


/**
* Calculates the provided expression, given that it is a valid expression.
*          i.e. not dividing by 0, etc.
* If the expression provided is invalid, the display turns red but keeps the same value in display so the user
* can fix their expression. 
*           
* I changed this compared to how Google's calculator implements this, because division by 0 resulting in infinity
* just doesn't seem intuitive. 
*/
function doCalculation(){
    let display = document.getElementById("butt1");
    let temp = display.value;
    if(validDenominator() && (Infinity!==eval(display.value))){
        display.style.backgroundColor = "white";
        display.value = eval(display.value);
        /**
         * After doing a calculation, change the "CE" button (which removes 1 by 1) to an "AC"
         * button (which removes all at once)
         */
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
/**
 * Adds the innerHTML of the pressed button to the display, or in other words,
 * builds the expression. Also sets the clear button back to "CE" (one by one deletion).
 */
function addToDisplay(button){
    let butt = document.getElementById(button).innerHTML;
    let deleter = document.getElementById("butt2");
    deleter.innerHTML = "CE"
    deleter.addEventListener("click", del);
    document.getElementById("butt1").value += butt; 
}

/**
 * "CE" button should erase one by one character by default
 */
function del(){
    let display = document.getElementById("butt1");
    display.value = display.value.slice(0, -1)
}

/**
 * Checks to see if denominator != 0
 */
function validDenominator(){
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