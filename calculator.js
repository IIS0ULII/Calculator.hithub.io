let input1 = 0;
let input2 = 0;
let total = 0;
let counter = 0;
let operator = "";

function seven(form){
    form.input.value += "7"; 
    if(counter == 1){
        form.input.value = "7"
        counter = 0
    }
    
}

function eight(form){
    form.input.value += "8"; 
    if(counter == 1){
        form.input.value = "8"
        counter = 0
    }
}

function nine(form){
    form.input.value += "9"; 
    if(counter == 1){
        form.input.value = "9"
        counter = 0
    }
}

function four(form){
    form.input.value += "4";
    if(counter == 1){
        form.input.value = "4"
        counter = 0
    }
}

function five(form){
    form.input.value += "5" ;
    if(counter == 1){
        form.input.value = "5"
        counter = 0
    }
}

function six(form){
    form.input.value += "6";
    if(counter == 1){
        form.input.value = "6"
        counter = 0
    }
}

function three(form){
    form.input.value += "3";
    if(counter == 1){
        form.input.value = "3"
        counter = 0
    }
}

function two(form){
    form.input.value += "2";
    if(counter == 1){
        form.input.value = "2"
        counter = 0
    }
}

function one(form){
    form.input.value += "1";
    if(counter == 1){
        form.input.value = "1"
        counter = 0
    } 
}

function zero(form){
    form.input.value += "0";
    if(counter == 1){
        form.input.value = "0"
        counter = 0
    } 
}

function dzero(form){
    form.input.value += "00";
    if(counter == 1){
        form.input.value = "00"
        counter = 0
    } 
}

function dot(form){
    form.input.value += ".";
    if(counter == 1){
        form.input.value = ".";
        counter = 0;
    } 
}

function ce(form){
    form.input.value = " " 
    input1 = 0;
    counter = 0;
    input2 = 0;
}

function de(form){
    form.input.value = form.input.value.toString().slice(0, -1);
}

// operators

function add(form){
    if(counter == 0){
    input1 += parseFloat(form.input.value);
    holder1 = input1 + input2
    alert(holder1);
    form.input.value = holder1;
    input2 = 0;
    counter = 1;
    operator = "+";
    }
    else if(counter == 1){
    input2 += parseFloat(form.input.value);
    holder1 = input1 + input2;
    alert(holder1);
    form.input.value = holder1  ;
    input1 = 0;
    counter = 0;
    operator = "+"
    }
}

function minus(form){
    if(counter == 0){
        input1 -= parseFloat(form.input.value) ; 
        holder1 = input1 - input2
        form.input.value = holder1;
        input2 = 0;
        counter = 1;
        operator = "-";
        }
        else if(counter == 1){
        input2 -= parseFloat(form.input.value);
        holder1 = input1 - input2;
        alert(holder1);
        form.input.value = holder1  ;
        input1 = 0;
        counter = 0;
        operator = "-"
        }
}



function divide(form){
    if(counter == 0){
        input2 = 0;
        input1 /= parseFloat(form.input.value);
        form.input.value = input1 / input2 ;
        counter = 1;
        operator = "/";
        }
        else if(counter == 1){
        input1 = 0;
        input2 /= parseFloat(form.input.value);
        form.input.value = input1 / input2 ;
        counter = 0;
        operator = "/"
        }
    }

function multiply(form){
    if(counter == 0){
        input2 = 0;
        input1 *= parseFloat(form.input.value);
        form.input.value = input1 * input2 ;
        counter = 1;
        operator = "*"
        }
        else if(counter == 1){
        input1 = 0;
        input2 *= parseFloat(form.input.value);
        form.input.value = input1 * input2 ;
        counter = 0;
        operator = "*"
        }
    }


function result(form){
    if(operator == "+"){
        input1 += parseFloat(form.input.value);
        form.input.value = input1;
        input2 = 1;
    }
    else if(operator == "-"){
        input1 -= parseFloat(form.input.value);
        form.input.value = input1;
        input2 = 1;
    }
    else if(operator == "*"){
        input1 *= parseFloat(form.input.value);
        form.input.value = input1;
        input2 = 1;
    }
    else if(operator == "/"){
        input1 /= parseFloat(form.input.value);
        form.input.value = input1;
        input2 = 1;
    }
}
