    let calculatorScreen=document.getElementById('calculator')
    let resultScreen = document.getElementById('result-display')
    let firstVal,opera,lastVal='';
    let Clear=false

    
    function display(numbers){
        if (Clear) {
            calculatorScreen.value=''
            Clear=false
        }
        calculatorScreen.value += numbers
    }

    function operators(sign){
       if (opera) {
        resultDisplay()
       }
        opera=sign
        firstVal=calculatorScreen.value
        Clear=true
        resultScreen.innerHTML = calculatorScreen.value + sign
        }

    function resultDisplay(equalTo){
        lastVal = calculatorScreen.value
        if (opera == '+') {
            calculatorScreen.value = Number(firstVal) + Number(calculatorScreen.value)
        }
        if (opera == '÷') {
            calculatorScreen.value = Number(firstVal) / Number(calculatorScreen.value)
        }
        if (opera == '-') {
            calculatorScreen.value = Number(firstVal) - Number(calculatorScreen.value)
        }
        if (opera == '×') {
            calculatorScreen.value = Number(firstVal) * Number(calculatorScreen.value)
        } 
        // console.log(calculatorScreen);

        resultScreen.innerHTML = firstVal + opera + lastVal + '=' 
    }

    function specialOperators(specialOpera) {
        firstVal = calculatorScreen.value
        if (specialOpera == 'x²') {
            calculatorScreen.value =Number(calculatorScreen.value**2)
            resultScreen.innerHTML = `sqr(${Number(firstVal)})`
            // console.log( resultScreen.innerHTML); 
        }
        if (specialOpera == '√') {
            calculatorScreen.value = Math.sqrt(calculatorScreen.value)
            resultScreen.innerHTML = `√(${(firstVal)})`
        }
    }
    
    function clearDisplay() {
        displayValue = '';
        calculatorScreen.value = displayValue;
        resultScreen.innerHTML = displayValue;
    }

    function deleteButton() {
        calculatorScreen.value = calculatorScreen.value.slice(0,-1)
    }

   function minimize(){
    cover.style.display='none'
   }

   function maximize(){
    let cover=document.getElementById('cover')
    cover.style.display='block'
   }

   function cancel(){
    let wholeBody=document.getElementById('whole-body')
    wholeBody.style.display='none'
   }