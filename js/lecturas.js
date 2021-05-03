const lect = document.querySelector(".lectura");
const lecturas = document.getElementsByClassName("lectura");

for (lectura in lecturas) {
    if (lectura <= lecturas.length) {
        lecturas[lectura].classList.add(`le${lectura}`);
    }
}

const cuadro = document.querySelector(".words");

var votos = 0;
var existe = false;
for (let i = 0; i < lecturas.length; i++) {
    const lct = document.querySelector(`.le${i}`);
    lct.addEventListener("click", () => {
        cuadro.innerHTML += `<div class="botones">
        <div class="lectBotn">
            <span>${lct.innerHTML}</span>
            <div class="verde verde${i}"><i class="fas fa-arrow-up" style="color: green;"></i></div>
            <div class="rojo rojo${i}"><i class="fas fa-arrow-down" style="color: red;"></i></div>
        </div>
        <div class="conteo">
            <span class="conteo${i}">0 votos</span>
        </div>
    </div>`;
    existe = true;
    asignarVotos(existe);
    })

}

const botones = document.getElementsByClassName("botones");

const asignarVotos = (exist) => { //REVISAR Y CORREGIR
    if(exist){
        for(let i = 0; i < botones.length - 1; i++){
            console.log(i)
            document.querySelector(`.verde${i}`).addEventListener("click", () => {
                votos++;
                document.querySelector(`conteo${i}`).innerHTML = `${votos} votos`;
            });
        
            document.querySelector(`.rojo${i}`).addEventListener("click", () => {
                if (votos >= 0) {
                    votos--;
                    document.querySelector(`conteo${i}`).textContent = `${votos} votos`;
                }
            });
        }
    }
}