let icone = document.querySelector('.icone')
let statusMenu = false;
let menuItens = document.querySelector('.menu-itens')



function btON(){
   
    if(statusMenu == false){
        statusMenu =true
        icone.style.transform ='rotate(90deg)'
        menuItens.style.left = '0px'
    

    }
    else{
        statusMenu =false
        icone.style.transform ='rotate(0deg)'
        menuItens.style.left = '-210px'
    
    }
}




icone.addEventListener('click', btON)
