
console.log('this is the java script')
window.addEventListener('load', bindEvents);
function bindEvents(){
    let buttons = document.querySelectorAll('button');
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click', addInput);
    }
}
// document.getElementsByTagName('input')[0].value  = "";
let inputField = document.getElementsByTagName('input')[0];
let submit=document.getElementById('equal');
let AllClear=document.getElementById('clear');
AllClear.addEventListener('click',function(){
    inputField.value='';
})

// inputField.value = "78";
// buttons = document.querySelectorAll('button');


function addInput(){
    inputField.value = inputField.value+this.value;
    // console.log(inputField)
    console.log(this.innerText);
    
}

submit.addEventListener("click", function(){
    inputField.value = eval(inputField.value);})
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         // if (buttonText == 'X') {
//         //     buttonText = '*';
//         //     screenValue += buttonText;
//         //     screen.value = screenValue;
//         // }
//         if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }

