// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
  
    function substitution(input, alphabet, encode = true) {
      // your solution code here
      const reference = "abcdefghijklmnopqrstuvwxyz";
      let result = false;
      if(!alphabet || alphabet.length < 26 || alphabet.length > 26) {
        return result;
      }
      
      for(let i = 0; i < alphabet.length ; i++) {
        const char = alphabet[i];
        if(alphabet.indexOf(char) !== alphabet.lastIndexOf(char)) return result;
      }
      
      if(encode){
        result = "";
        for(let i = 0; i < input.length; i++){
          const character = input[i].toLowerCase();
          if(character === " ") result += character;
          else {
            const index = reference.indexOf(character);
            result += alphabet.charAt(index)
          }
        }
      }
      else {
        result = "";
        for(let i =0; i < input.length; i++){
          const character = input[i];
          if(character === " ") result += character;
          else {
            const index = alphabet.indexOf(character);
            result += reference.charAt(index);
          }
        }
      }
  return result; 
    }
  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };
  