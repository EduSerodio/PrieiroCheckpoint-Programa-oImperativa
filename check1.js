/*Primeiro checkpoint*/

function microondas ( opcao, tempo ) {
 
    let tempoPadrao
   
    if (opcao === "pipoca") {
        tempoPadrao = 10;
    } else if ( opcao === "macarrão") {
        tempoPadrao = 8;
    }else if ( opcao === "carne") {
        tempoPadrao = 15;
    }else if ( opcao === "feijao") {
        tempoPadrao = 12;
    }else if ( opcao === "brigadeiro") {
        tempoPadrao = 8;
    } else {
        return "Prato inexistente"
    }


    /*Checando o tempo Padrao */
    if (tempo < tempoPadrao) {
        return "tempo insuficiente";
    } else if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
        return "A comida queimou" 
    } else if (tempo > (3 * tempoPadrao)) {
        return "Kabum"
    }

    return "Prato pronto, Bom apetite!!!"
}

console.log(microondas("pipoca", 8) );