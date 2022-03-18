const numero = document.getElementById('numero')
let cantidad= 0
const tiempo = setInterval(() => {
    cantidad+=1   
    numero.textContent=cantidad
    if(cantidad===50) {
        clearInterval(tiempo)
    }

},80)