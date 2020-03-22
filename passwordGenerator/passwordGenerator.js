function changeVocals(str) {
    //code di sini
    var vokal = 'aiueoAIUEO'
    var enkripsivokal = 'bjvfpBJVFP'
    var hasilchangevokal = ''
    flag = ''
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < vokal.length; j++) {
            if (str[i] === vokal[j]){
                hasilchangevokal += enkripsivokal[j]
                flag = true
                break
            } else {
                flag = false
            }
        }
        if(flag === false){
            hasilchangevokal += str[i]
        }
    }
    // console.log(hasilchangevokal)
    return hasilchangevokal
}

function reverseWord(str) {
    //code di sini
    var hasilreverse = ''
    for (k=str.length-1; k>=0; k--){
        hasilreverse += str[k]        
    }
    return hasilreverse
  }

function setLowerUpperCase(str) {
    //code di sini
    var besarkecil = ''
    for(l=0; l<str.length; l++){
        if(str[l] == str[l].toLowerCase()){
            besarkecil += str[l].toUpperCase()
        }
        if(str[l] == str[l].toUpperCase()){
            besarkecil += str[l].toLowerCase()
        }
    }
    return besarkecil
}

function removeSpaces(str) {
    //code di sini
    hapusspasi = ''
    for(m=0; m<str.length; m++){
        if(str[m] !== ' '){
            hapusspasi += str[m]
        }
    }
    return hapusspasi
}

function passwordGenerator(name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    gantivokal = changeVocals(name)
    reverse = reverseWord(gantivokal)
    ukuranhuruf = setLowerUpperCase(reverse)
    spasi = removeSpaces(ukuranhuruf)

    return spasi
    
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'