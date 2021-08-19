// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
    const polybiusObj = {
        a: { num: "11" },
        b: { num: "21" },
        c: { num: "31" },
        d: { num: "41" },
        e: { num: "51" },
        f: { num: "12" },
        g: { num: "22" },
        h: { num: "32" },
        i: { num: "42" },
        j: { num: "42" },
        k: { num: "52" },
        l: { num: "13" },
        m: { num: "23" },
        n: { num: "33" },
        o: { num: "43" },
        p: { num: "53" },
        q: { num: "14" },
        r: { num: "24" },
        s: { num: "34" },
        t: { num: "44" },
        u: { num: "54" },
        v: { num: "15" },
        w: { num: "25" },
        x: { num: "35" },
        y: { num: "45" },
        z: { num: "55" },
    };
    console.log(input, encode);
    let result = "";
    if (encode) {
    const splitInput = input.toLowerCase().split("");
    splitInput.map((letter) => {
        if (letter.match(/[a-z]/i)) {
        for (let key in polybiusObj) {
            if (key === letter) result += polybiusObj[key].num;
                    }
                } 
                else {
                result += letter;
                }
        });
    } else {
        const doubleSpaced = input.toLowerCase().replace(" ", "  ");
        if (input.replace(" ", "").length % 2 === 1) return false;
        for (let i = 0; i < doubleSpaced.length; i += 2) {
        const currentCode = doubleSpaced[i] + doubleSpaced[i + 1];
        if (currentCode === "  ") result += " ";
        if (currentCode === "42") {
            result += "i/j";
        } else {
            for (let key in polybiusObj) {
            if (currentCode === polybiusObj[key].num) result += key;
                }
            }
        }
    }
    return result;
    }

    return {
    polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
