const lect = document.querySelector(".lectura"); //se selecciona el elemento con la clase .lectura
const lecturas = document.getElementsByClassName("lectura"); //se selecciona la lista de elementos con la clase .lectura

for (lectura in lecturas) {
    if (lectura <= lecturas.length) {
        lecturas[lectura].classList.add(`le${lectura}`); //a cada elemento con dicha clase se le añade otra (le1)
    }
}

const cuadro = document.querySelector(".words");

var votos = 0;
var existe = false;
var seleccionada = false;
for (let i = 0; i < lecturas.length; i++) { //recorre la lista de elementos con la clase .lectura
    const lct = document.querySelector(`.le${i}`);
    lct.addEventListener("click", () => {//a cada uno se le asigna un evento
        if (lct.classList.contains("si1")) {
            lct.style.fontWeight = "normal";
            lct.classList.remove("si1");
        } else {
            lct.classList.add("si1");
            lct.style.fontWeight = "bold";
            cuadro.innerHTML += `
        <div class="botones boton${i}">
           <div class="lectBotn">
               <span>${lct.innerHTML}</span>
               <div class="verde verde${i}"><i class="fas fa-arrow-up" style="color: green;"></i></div>
               <div class="rojo rojo${i}"><i class="fas fa-arrow-down" style="color: red;"></i></div>
           </div>
           <div class="conteo">
              <span class="conteo${i} cverde${i} crojo${i}">0</span>
           </div>
        </div>`;
            escogidas.push(i);//se añade el numero i al array escogidas
            existe = true;
            asignarVotos(existe);
        }
    });
}

const escogidas = [];

const asignarVotos = (exist) => {
    if (exist) {
        var numero;
        var conteo = 0;
        for (escogida of escogidas) { //se recorre el array escogidas que contiene los numeros de las lecturas seleccionadas
            const verde = document.querySelector(`.verde${escogida}`);
            verde.addEventListener("click", () => { //se le asigna un evento a cada boton verde
                numero = verde.classList[verde.classList.length - 1];
                const voto = document.querySelector(`.c${numero}`); //se busca el cuadro del # de votos con esa clase cverde1
                conteo = parseInt(voto.innerHTML);
                conteo++;
                voto.innerHTML = conteo;
            });
            const rojo = document.querySelector(`.rojo${escogida}`); //lo mismo pero para botones rojos
            rojo.addEventListener("click", () => {
                numero = rojo.classList[rojo.classList.length - 1];
                const voto = document.querySelector(`.c${numero}`);
                conteo = parseInt(voto.innerHTML);
                if (conteo > 0) {
                    conteo--;
                    voto.innerHTML = conteo;
                }
            });
        }
    }
}