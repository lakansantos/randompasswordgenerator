let slider = document.querySelector('.range');
let lengthEl = document.querySelector('.lengthNumber');
lengthEl.innerText = '0'
slider.value = 0;
let upperCaseEl = document.querySelector('#uppercase');
let lowercaseEl = document.querySelector('#lowercase');
let numberEl = document.querySelector('#numbers');
let symbolsEl = document.querySelector('#symbols');



slider.addEventListener('input', function(){
    lengthEl.innerText = this.value
})




let passwordGenerated = document.querySelector('.passwordGenerated')

passwordGenerated.innerText = 'P4$5W0rD !';

randomCharacters = (characters) => {
    
    return characters[Math.floor(Math.random() * characters.length)];
}



let generate = document.querySelector('button');




generate.addEventListener('click', function(){
    let hasUpper =  upperCaseEl.checked
    let hasLower =  lowercaseEl.checked
    let hasNumber = numberEl.checked 
    let hasSymbol = symbolsEl.checked 
    let len    =    +lengthEl.innerText
    let bars = [...document.querySelectorAll('.bar')];
    let levelText = document.querySelector('.level');
    let typeCounts = hasUpper + hasLower + hasSymbol + hasNumber;
    
    passwordGenerated.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, len, typeCounts);
    strengthLevelBars = index =>{
        //weak  index 0 
        //medium 2 bars  index 1
        //medium 3 bars index 2 
        //strong 4 bars index 3
        if(index === 0) {
            bars[0].style.background = '#f7ce62'
            bars[0].border  = '2px solid white';
        }

        if(index > 0){
            for(let i = 0;  i < index + 1; i++){
                bars[i].style.background = '#f7ce62';
                bars[i].border = '2px solid white';
            }

        }
    }


    defaultBars = () =>{
        for(const bar of bars){
            bar.style.background = 'none';
            bar.style.border ='2px solid white'
            levelText.innerText = ''
        }
    }

    defaultBars();
    if(hasUpper && len < 20){
        strengthLevelBars(0)
        levelText.innerText = 'WEAK'
    }

    if(hasUpper && len === 20){
        strengthLevelBars(1)
        levelText.innerText = 'WEAK'
    }

    if(hasUpper && hasLower && len>=8 && len < 20){
        strengthLevelBars(1);
        levelText.innerText = 'MEDIUM'
    }

    if(hasUpper && hasLower && hasSymbol || hasNumber && len >= 10 && len <20){
        levelText.innerText = 'MEDIUM'
        strengthLevelBars(2);
    }

    if(hasLower && hasSymbol && len < 15){
        levelText.innerText = 'MEDIUM';
        strengthLevelBars(1);
    }


    if(hasLower && len <19){
        levelText.innerText = 'WEAK'
        strengthLevelBars(0);
    }

    if(hasSymbol && len <=6 || (hasNumber && len <=7)){
        levelText.innerText = 'WEAK'
        strengthLevelBars(0);
    }
    

    
    if(hasSymbol && len >= 7 || (hasNumber && len >=7)){
        levelText.innerText = 'MEDIUM'
        strengthLevelBars(2);
    }
    if(typeCounts === 4 && len > 10){
        levelText.innerText = 'STRONG'
        strengthLevelBars(3);
    }
    
    if(typeCounts === 4 && len <= 10){
        levelText.innerText = 'WEAK';
        strengthLevelBars(1);
    }


    if(len === 0){
        defaultBars();
    }
    
});



generatePassword = (upper, lower, number, symbol, len, counts) =>{
    let alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetLower = 'abcdefghijklmnopqrsutvwxyz';
    let nums = '1234567890'; 
    let symbols = '!@#$%^&*._';


    let chars = ''

    if(counts === 0){
        return 'P4$5W0rD !'
    }
    if(upper) {
        chars += alphabetUpper;
    }

    if(lower){
        chars += alphabetLower;
    }

    if(number){
        chars += nums;
    }

    if(symbol){
        chars += symbols;
    }
    let generatedPassword = ''
    for(let i = 0; i < len; i++){
        generatedPassword += randomCharacters(chars)
    }

    
    if(len===0){
        generatedPassword = 'Please select a length';
        passwordGenerated.style.color = 'red';
    }
    else{
        passwordGenerated.style.color = 'white';
    }

    return generatedPassword

}


copyText = () => {
    let copyButton = document.querySelector('#copypasteicon');
    
    copyButton.addEventListener('click', function(){

        let copyText = document.querySelector('.passwordGenerated');

         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.innerText);
            
        // Alert the copied text
        alert("Copied the text: " + copyText.innerText);
    })
}

copyText();




