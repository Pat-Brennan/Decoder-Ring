// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
    
    function caesar(input, shift, encode = true) {
      if(!shift || shift == 0 || shift < -25 || shift > 25) return false;
      if(encode === false)shift = shift * -1; 
      
      let lowerInput = input.toLowerCase();
      let output = "";
      
      for(let i = 0; i < lowerInput.length; i++){
        const position = alphabet.indexOf(lowerInput[i]);
        if(position === -1){ 
          output += lowerInput[i];
        }
        else {
        let newPosition = position + shift;
          if(newPosition > 25){
            newPosition -= 26;
          }
          if(newPosition < 0){
            newPosition += 26;
          }
        output += alphabet[newPosition]; 
        }
      }
      return output
    }
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };