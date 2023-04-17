


/* Funcion encriptar() texto */

function encriptar(){
    var encriptar = (document.getElementById('texto__encriptar').value).toString();

    /*for(i=0; i<encriptar.length; i++){
        if(encriptar.charAt(i) == 'e'){
            var re = charAt(i).replace(e,'ert');
            encriptar.charAt(i) = re;
        }*/
        
        /*var e = encriptar.replaceAll('e','qwe');*/
        

        for (let i = 0; i < encriptar.length; i++) {
            //console.log(encriptar[i]);
            if(encriptar[i] === 'e'){
              var er = encriptar[i].replace('e','ewq');
              encriptar[i] = er;
            }
            document.getElementById('texto__encriptado').innerHTML = encriptar;  
          }
          
}


/* Funcion desencriptar() texto */
function desencriptar(){
        var desencriptar = (document.getElementById('texto__encriptado').value).toString();
    
        /*for(i=0; i<encriptar.length; i++){
            if(encriptar.charAt(i) == 'e'){
                var re = charAt(i).replace(e,'ert');
                encriptar.charAt(i) = re;
            }*/
            
            var er = desencriptar.replaceAll('qwe','e');
            document.getElementById('texto__encriptar').innerHTML = er;
}
    
