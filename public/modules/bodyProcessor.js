window.replaceEveryOtherColor = (str) => {
    const regex = new RegExp(`(⎊(?:(?!⎊).){0,6})`, 'g');
    let count = 1;
    return str.replace(regex, (match) => {
      count++;
      return count % 2 === 0 ? `<span style="color:#${isValidHex(match.slice(1)) ? match.slice(1) : 'FFFFFF'}">` : match;
    });
  }

  window.replaceEveryOtherFontsize = (str) => {
    function isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
      }
    const regex = new RegExp(`(▴(?:(?!▴).){0,2})`, 'g');
    let count = 1;
    return str.replace(regex, (match) => {
      count++;
      return count % 2 === 0 ? `<span style="font-size:${isNumeric(match.slice(1)) ? `${match.slice(1)}px` : '1rem'}">` : match;
    });
  }

window.replaceEveryOther = (str, search, replace) => {
    let count = 0;
    return str.replace(new RegExp(search, 'g'), (match) => {
      count++;
      return count % 2 === 0 ? replace : match;
    });
}
window.bodyProcessor = (e, index) => {
    let string = e.value;
    //add newlines
    (function() {
        string = string.replaceAll('<', '<​')
        string = string.replaceAll('\n', '<br>')
    })();
    //add colors
    string = replaceEveryOtherColor(string)
    //string = replaceEveryOther(string, '⎊', '</span>')
    string = string.replaceAll('⎊', '</span>')
    
    //add bold
    string = replaceEveryOther(string, '\\*\\*', '</b>');
    string = string.replaceAll('**', '<b>')

    //add italic
    string = replaceEveryOther(string, '\\^\\^', '</i>');
    string = string.replaceAll('^^', '<i>')

    //add underline
    string = replaceEveryOther(string, '\\_\\_', '</u>');
    string = string.replaceAll('__', '<u>')
//🗚
    //add strikethrough
    string = replaceEveryOther(string, '\\-\\-', '</s>');
    string = string.replaceAll('--', '<s>')

    //add fontSize
    string = replaceEveryOtherFontsize(string)
    string = string.replaceAll('▴', '</span>')


    allNotes[index].bodyPreview = string
}
    //add bold
    /*(function() {
        let bolds = string.split('**')
        let newarray = [], counter = 0
        if (bolds.length == 1) {return}
        for (let i = 0; i <= bolds.length; i++) {
            counter++
            newarray.push(bolds[i])
            if (counter % 2 == 0) {
                newarray.push('</b>')
            } else {
                if (i !== bolds.length) {
                    newarray.push('<b>')
                }
            }
            allNotes[index].bodyPreview = newarray.join('')
            string = newarray.join('')
        }
    })();
    console.log(string)

    //add italic
    (function() {
        let bolds = string.split('^^')
        let newarray = [], counter = 0
        if (bolds.length == 1) {return}
        for (let i = 0; i <= bolds.length; i++) {
            counter++
            newarray.push(bolds[i])
            if (counter % 2 == 0) {
                newarray.push('</i>')
            } else {
                if (i !== bolds.length) {
                    newarray.push('<i>')
                }
            }
            allNotes[index].bodyPreview = newarray.join('')
            string = newarray.join('')
        }
    })();
    console.log("OR")
    console.log(string)*/
