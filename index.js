// Global declaration
var value1 = 0
var value2 = 0
var action = "none"


// To set this the value1 and value2 via arguments
const set_value1 =(value)=>{
    value1 = value
    console.log("first value ",value1)
}
const set_value2 = (value)=>{
    value2 = value
    console.log("second value ",value2)
}


// To set the value to screen as value1 and value 2
const set_input_num1 = (value)=>{
    document.getElementById("input_field1").value=value
} 
const set_input_num2 = (value)=>{
    document.getElementById("input_field2").value=value
} 


// To take the input of value1 and value2 with return
const get_input_num1 = ()=>{
    value1 =  parseInt(document.getElementById('input_field1').value);
    return value1
}
const get_input_num2 = ()=>{
    value2 =  parseInt(document.getElementById('input_field2').value);
    return value2
}

// To clear the input field and set the output field
const reset_input_field = ()=>{
    document.getElementById("input_field1").value=""
    document.getElementById("input_field2").value=""
}
const set_output = (value)=>{
    document.getElementById("output_field").value = value
}


// for multiply value with 2 as bitwise operator
const get_left = (value)=>{
    set_value1(value)
    return value<<1
}
// for divide value with 2 as bitwise operator
const get_right = (value)=>{
    set_value1(value)
    return value>>1
}


// clears the value with the use of bitwise
const clear_value=()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    let new_value1 = value1 & 0
    let new_value2 = value2 & 0
    set_output(new_value1)
    set_input_num1(new_value1)
    set_input_num2(new_value2) 
    set_value1(new_value1)
    set_value2(new_value2)
    
}
// makes the value maximum as here we use 8 bit so max value is 255 with the use of bitwise
const full = ()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    if ((value1==0 && value2==0) || (!value1 && !value2)){
        let new_value1  = value1 | 0xFF
        let new_value2 = value2 | 0xFF
        set_input_num1(new_value1)
        set_input_num2(new_value2)
        set_output(new_value1)
    }
    else if(value1==0 || !value1){
        let new_value2  = 0 | 0xFF
        set_input_num1(new_value2)
        set_value1(new_value2)
    }
    else if( value2==0 || !value2){
        let new_value1 = 0 | 0xFF
        set_input_num2(new_value1)
        set_value2(new_value1)    
    }
    else{
        let new_value1  = 0 | 0xFF
        let new_value2 = 0 | 0xFF
        set_input_num1(new_value1)
        set_input_num2(new_value2)
        set_output(new_value1)
    }
    

}
// returns the result of and operation with first and second value
const get_and = ()=>{
    return value1 & value2
}
// returns the result of or operation with first and second value
const get_or = ()=>{
    return value1 | value2
}
// returns the result of xor operation with first and second value
const get_xor = ()=>{
    return value1 ^ value2
}
// this function takes user input and sets the result to output
const and_action = ()=>{
    set_value1(get_input_num1())
    set_value2(get_input_num2())
    reset_input_field()
    set_output(get_and())
}
// this function takes user input and sets the result to output
const or_action = ()=>{
    set_value1(get_input_num1())
    set_value2(get_input_num2())
    reset_input_field()
    set_output(get_or())
}
// this function takes user input and sets the result to output
const xor_action = ()=>{
    set_value1(get_input_num1())
    set_value2(get_input_num2())
    reset_input_field()
    set_output(get_xor())
}
// this function converts decimal value to binary and sets to output window
const binary=()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    if (Math.floor(value2)==0){
        let new_value1 = get_binary_value(value1)
        set_value1(new_value1)
        set_output(new_value1)
    }
    else if(Math.floor(value1)==0){
        let new_value2 = get_binary_value(value2)
        set_value2(new_value2)
        set_output(new_value2)

    }
    else{
        let new_value1 = get_binary_value(value1)
        let new_value2 = get_binary_value(value2)
        set_output("Value-1 ->"+new_value1 + "  Value-2 ->" + new_value2)
    }
}
// add first and second value with bitwise and displays  result to output window
const plus = ()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    let result = get_plus(value1,value2)
    set_output(result)
    
}
// this function takes decimal value and convert it to binary
const get_binary_value = (value)=>{
    let len =0
    let temp = value
    let answer = ""
    while (temp != 0){
        len+=1
        temp>>=1
    }    
    temp = len
    while(temp!=0){
        let pointer = 1<<(len - temp)
        if ((pointer & value )===0){
            answer += "0"
        }
        else{
            answer += "1"
        }
        temp-=1
    }
    let result=""
    let space = 32-answer.length
    for(let i=0;i<space;i++){
        result+="0"
    }
    result+=answer
    answer = answer.split("").reverse().join("");
    return answer
}
// this function do addition with bitwise
const get_plus = (value1,value2)=>{
    // value 1 take care of addition 
    // value 2 take care of carry
    let carry=0
    while(value2!=0){
        carry = value1&value2
        value1 = (value1^value2)
        value2=carry<<1
    }
    let result = value1
    return result

}
// multiply first and second value with bitwise and displays  result to output window
const mul = ()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    let result = get_mul(value1,value2)
    set_output(result)
}
// this function multiply two value and returns ans
const get_mul = (value1,value2)=>{
    let result=0
    for(let i=0;i<value2;i++){
        result=get_plus(result,value1)
    }
    return result
}
// subtract first and second value with bitwise and displays  result to output window
const minus = ()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    let result = get_minus(value1,value2)
    set_output(result)
}
// square first and second value with bitwise and displays  result to output window
const square = ()=>{    
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    set_value1(value1)
    set_value2(value2)
    if(Math.floor(value1)===0 || !value2){
        let result = get_square(value1)
        set_value2(result)
        set_output(result)
    }
    if(Math.floor(value2) === 0 || !value1){
        let result = get_square(value2)
        set_value1(result)
        set_output(result)
    }
    else{
        let result1 = get_square(value1)
        let result2 = get_square(value2)
        set_value1(result1)
        set_value2(result2)
        set_output("Value 1->"+result1+"         Value 2->"+result2)
    }
}
// this function do substraction and returns the ans
const get_minus=(value1,value2)=>{
    // 2's complement of value 2
    // add value 1 and value 2
    value2 = ~value2
    value2+=1
    return value1+value2
}
// this function returns square of vaule and returns the result
const get_square = (value1)=>{
    if(value1==0){
        return 0
    }
    if(value1<0){
        value1 = -value1
    }
    let half = value1>>1
    if (value1 & 1){
        return (get_square(half)<<2)+(half<<2)+1
    }
    else{
        return get_square(half)<<2
    }

}
// grey code of first and second value with bitwise and displays result to output window
const grey=()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    set_value1(value1)
    set_value2(value2)
    if (Math.floor(value2)==0 || !value2){
        let new_value1 = get_grey_code(value1)
        set_value1(new_value1)
        set_output(new_value1)
    }
    if(Math.floor(value1)==0 || !value1){
        let new_value2 = get_grey_code(value2)
        set_value2(new_value2)
        set_output(new_value2)
    }
    else{
        let result1 = get_grey_code(value1)
        let result2 = get_grey_code(value2)
        set_value1(result1)
        set_value2(result2)
        set_output("Value 1->"+result1+"         Value 2->"+result2)
    }
}
// this function returns the grey code of value
const get_grey_code=(value) =>{
    return value ^ (value>>1)
}
// this function performs division and then returns answer
const get_div = (value1,value2)=>{
    
    if (value2===0){
        return "error"
    }
    let sign=1
    if(value1<0 && value2<0){
        value1 = get_minus(0,value1)
        value2 = get_minus(0,value2)

        sign=1
    }
    // setting each value positive
    if(value1<0){
        value1 = get_minus(0,value1)
        sign=-1
    }
    else if (value2<0){
        value2 = get_minus(0,value2)
        sign=-1
    }
    let result=0    
    while(value1>=value2){
        value1=get_minus(value1,value2)
        result+=1
    }
    return get_mul(sign,result)
}
// division of first and second value with bitwise and displays  result to output window
const div = ()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    let result = get_div(value1,value2)
    if (result==="error"){
        set_output("Can't Divisible by 0")
    }
    else{
        set_output(result)
    }
}
// hexadecimal value of first and second value with bitwise and displays  result to output window
const hexa = ()=>{
    let value1 = get_input_num1()
    let value2 = get_input_num2()
    if (Math.floor(value2)==0){
        let new_value1 = get_hexa_code(value1)
        set_value1(new_value1)
        set_output(new_value1)
    }
    else if(Math.floor(value1)==0){
        let new_value2 = get_hexa_code(value2)
        set_value2(new_value2)
        set_output(new_value2)

    }
    else{
        let new_value1 = get_hexa_code(value1)
        let new_value2 = get_hexa_code(value2)
        set_output("Value-1 ->"+new_value1 + "  Value-2 ->" + new_value2)
    }
}
// this function will return appropriate command like 10->A and etc. 
const get_hexa = (value) =>{
    let list = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    }
    if (value<10){
        return value
    }
    else{
        return list[value]
    }
}
// this function returns grey code 
const get_hexa_code = (value)=>{
    let curr_value =value
    let mask = 15
    let result=""
    while (curr_value!=0){
        let temp = curr_value & mask
        result+=get_hexa(temp)
        curr_value>>=4
    }
    result=result.split("").reverse().join("");
    console.log(result)
    return result
}