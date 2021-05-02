$(document).ready(function () {
    const a = ["AARÓN", "ABEL", "ABRAHAM", "ACCIÓN DE GRACIAS", "ACEITE", "ADÁN", "ADIÓS", "ADORACIÓN", "ADULTERIO",
        "AGUA", "ALABANZA", "ALIANZA", "ALIMENTO", "ALMA", "ALTAR", "AMÉN", "AMIGO", "AMOR", "ANATEMA", "ÁNGELES", "ANGUSTIA",
        "ANIMALES", "ANTICRISTO", "APARICIONES DE CRISTO", "APÓSTOLES", "ÁRBOL", "ARCA DE LA ALIANZA", "ASCENSIÓN", "ASTROS", "AUTORIDAD", "AYUNO"];
    const b = ["BABEL, BABILONIA", "BIEN Y MAL", "BLASFEMIA", "BAUTISMO", "BIENAVENTURANZA", "BRAZO, MANO", "BENDICIÓN",
        "BLANCO", "BUSCAR", "BESTIA, BESTIAS"];
    const c = ["CABEZA", "CIRCUNCISIÓN", "CORAZÓN", "CALAMIDAD", "CISMA", "CORDERO DE DIOS", "CAMINO", "CIUDAD", "CORRER",
        "CARISMA", "COMIDA", "CREACIÓN", "CARNE", "COMUNIÓN", "CRECIMIENTO",
        "CASA", "CONCIENCIA", "CRUZ", "CASTIGOS", "CONFESIÓN", , "CUERPO", "CAUTIVIDAD", "CONFIANZA", "CUERPO DE CRISTO",
        "CELO", "CONOCER", "CUIDADOS", "CENIZA", "CONSOLAR", "CULTO", "CIELO", "COPA", "CUMPLIR"];
    const d = ["DAVID", "DECEPCIÓN", "DEMONIOS", "DERECHO", "DESEO", "DESIERTO", "DESIGNIO DE DIOS", "DÍA DEL SEÑOR",
        "DIESTRA", "DILUVIO", "DIOS", "DISCÍPULO", "DISPERSIÓN", "DON"];
    const e = ["EDIFICAR", "EDUCACIÓN", "EGIPTO", "EJEMPLO", "ELECCIÓN", "ELÍAS", "EMBRIAGUEZ", "ENDURECIMIENTO",
        "ENEMIGO", "ENFERMEDAD, CURACIÓN", "ERROR", "ESCÁNDALO", "ESCLAVO", "ESCRITURA", "ESCUCHAR", "ESPERANZA", "ESPÍRITU",
        "ESPÍRITU DE DIOS", "ESPOSO", "ESPOSA", "ESTERILIDAD", "EUCARISTÍA", "EVANGELIO", "EXHORTAR", "EXILIO", "ÉXODO", "EXPIACIÓN", "EXTRANJERO", "ÉNSEÑAR"];
    const f = ["FARISEOS", "FIDELIDAD", "FRUTO", "FE", "FIESTAS", "FUEGO", "FECUNDIDAD", "FIGURA", "FUERZA"];
    const g = ["GLORIA", "GOZO", "GUERRA", "GRACIA", "GUSTAR", "GENERACIÓN"];
    const h = ["HAMBRE Y SED", "HEBREO", "HEREJÍA", "HERENCIA", "HERMANO", "HIJO DE DIOS", "HIJO DEL HOMBRE",
        "HIPÓCRITA", "HOMBRE", "HORA", "HOSPITALIDAD", "HUMILDAD"];
    const i = ["ÍDOLOS", "IGLESIA", "IMAGEN", "IMPÍO", "IMPOSICIÓN DE MANOS", "INCREDULIDAD", "INFIERNO/S", "IRA", "ISRAEL"];
    const j = ["JERUSALÉN", "JESUCRISTO", "JESÚS (NOMBRE DE)", "JOSUÉ", "JUAN BAUTISTA", "JUDÍO", "JUICIO",
        "JURAMENTO", "JUSTICIA", "JUSTIFICACIÓN"];
    const l = ["LABIOS", "LÁMPARA", "LECHE", "LENGUA", "LEPRA", "LEY", "LIBERACIÓN, LIBERTAD", "LIBRO",
        "LIMOSNA", "LOCURA", "LOMOS Y RIÑONES", "LUZ Y TINIEBLAS"];
    const m = ["MADRE", "MAGIA", "MALDICIÓN", "MANÁ", "MANSEDUMBRE", "MAR", "MARÍA", "MÁRTIR", "MATRIMONIO",
        "MEDIADOR", "MELQUISEDEC", "MEMORIA", "MENTIRA", "MESÍAS", "MILAGRO", "MINISTERIO", "MISERICORDIA", "MISIÓN",
        "MISTERIO", "MOISÉS", "MONTAÑA", "MUJER", "MUNDO", "MUERTE"];
    const n = ["NACIMIENTO (NUEVO)", "NACIONES", "NIÑO", "NOCHE", "NOÉ", "NOMBRE", "NUBE", "NUEVO", "NÚMEROS"];
    const o = ["OBEDIENCIA", "OBRAS", "ODIO", "ORACIÓN", "ORGULLO"];
    const p = ["PACIENCIA", "PADRE/S", "PALABRA DE DIOS", "PALABRA HUMANA", "PALOMA", "PAN", "PARÁBOLA",
        "PARÁCLITO", "PARAÍSO", "PASCUA", "PATRIA", "PAZ", "PECADO", "PEDRO (SAN)", "PENITENCIA-CONVERSIÓN", "PENTECOSTÉS",
        "PERDÓN", "PEREGRINACIÓN", "PERFECCIÓN", "PERFUME", "PERSECUCIÓN", "PIEDAD", "PIEDRA", "PLENITUD", "POBRES",
        "PODER", "PREDESTINAR", "PREDICAR", "PRESENCIA DE DIOS", "PRIMICIAS", "PROCESO", "PRÓJIMO", "PROMESAS", "PROVIDENCIA",
        "PRUEBA-TENTACIÓN", "PUEBLO", "PUERTA", "PURO",
        "PASTOR Y REBAÑO", "PERMANECER", "PROFETA"];
    const r = ["RECONCILIACIÓN", "REINO", "REDENCIÓN", "RISA", "REPOSO", "RESPONSABILIDAD", "RESTO", "RESURRECCIÓN",
        "RETRIBUCIÓN", "REVELACIÓN", "REY", "RIQUEZAS", "ROCA", "RODILLA", "ROSTRO"];
    const s = ["SÁBADO", "SABIDURÍA", "SACERDOCIO", "SACRIFICIO", "SAL", "SALVACIÓN", "SANGRE", "SANTO", "SATÁN",
        "SEGUIR", "SELLO", "SEMANA", "SEMBRAR", "SENCILLO", "SEÑOR", "SEPULTURA", "SERVIR", "SEXUALIDAD", "SIEGA", "SIERVO DE YAHVEH",
        "SIGNO", "SILENCIO", "SOBERBIA", "SOLEDAD", "SOMBRA", "SUEÑO", "SUEÑOS", "SUFRIMIENTO"];
    const t = ["TEMOR DE DIOS", "TEMPLO", "TERNURA", "TESTIMONIO", "TIEMPO", "TIERRA", "TORMENTA", "TRABAJO",
        "TRADICIÓN", "TRANSFIGURACIÓN", "TRISTEZA"];
    const u = ["UNCIÓN", "UNIDAD"];
    const v = ["VEJEZ", "VELAR", "VENDIMIA", "VENGANZA", "VER", "VERDAD", "VERGUENZA", "VESTIDO", "VICTORIA",
        "VIDA", "VINO", "VIÑA", "VIOLENCIA", "VIRGINIDAD", "VIRTUDES Y VICIOS", "VISITA", "VIUDAS", "VOCACIÓN", "VOLUNTAD DE DIOS"];
    const y = ["YAHVEH"];

    const letrasArray = [a, b, c, d, e, f, g, h, i, j, l, m, n, o, p, r, s, t, u, v, y];

    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "y"];

    const abecedario = document.querySelector(".abecedario");

    for (letra in abc) {
        abecedario.innerHTML += `<div class="letras ${abc[letra]} ${abc[letra]}${letra}">${abc[letra].toUpperCase()}</div>`;
    }

    const fondoModal = document.querySelector(".fondoModal");
    const modal = document.querySelector(".modal");
    const tabbody = document.querySelector(".cuerpoTabla");

    document.querySelector(".salirModal").addEventListener("click", () => {
        $(fondoModal).slideToggle();
        $(modal).toggle(500);
        while (tabbody.firstChild) {
            tabbody.removeChild(tabbody.firstChild);
        }
    })

    var numero;

    for (ltr of abc) {
        const letras = document.querySelector(`.${ltr}`);
        letras.addEventListener("click", () => {
            $(fondoModal).toggle();
            $(modal).toggle();
            numero = letras.classList[letras.classList.length - 1];
            numero = parseInt(numero.substring(1, numero.length));
            armarTabla(numero);
        })
    }

    var numFila = 0;
    const armarTabla = (letraCuadro) => {
        for (let i = 0; i < letrasArray[letraCuadro].length; i++) {
            if (i % 3 === 0) {
                numFila = i;
                tabbody.innerHTML += `<tr class="filaT fila${numFila}"></tr>`;
            } else {
                tabbody.innerHTML += `<tr class="filaT fila${numFila}"></tr>`;
            }
            document.querySelector(`.fila${numFila}`).innerHTML +=
                `<td class="columna"><a href="words/${((letrasArray[letraCuadro][i]).toLocaleLowerCase()).split(" ").join("")}.html">${letrasArray[letraCuadro][i]}</a></td>`
        }
    }

    const barra = document.querySelector(".barra");

    const mostrarPalabras = () => {
        if(barra.clientWidth > 725){
            for (let i = 0; i < letrasArray.length; i++) {
                for (let j = 0; j < letrasArray[i].length; j++) {
                    try {
                        lista.innerHTML += `<li><a href="words/${((letrasArray[i][j]).toLocaleLowerCase()).split(" ").join("")}.html">${letrasArray[i][j]}</a></li>`;
                    } catch (e) {
                        console.warn("Error gramatical");
                    }
                }
            }
        } else {
            for (let i = 0; i < letrasArray.length; i++) {
                for (let j = 0; j < letrasArray[i].length; j++) {
                    try {
                        lista.innerHTML += `<li><a href="words/${((letrasArray[i][j]).toLocaleLowerCase()).split(" ").join("")}.html">${letrasArray[i][j]}</a></li>`;
                    } catch (e) {
                        console.warn("Error gramatical");
                    }
                }
                if(i == 0){
                    break;
                }
            }
        }
    }

    const entrada = document.querySelector(".entrada");
    const lista = document.querySelector(".listaResult");
    var palabra;

    entrada.addEventListener("keyup", () => {
        if (entrada.value != "") {
            palabra = entrada.value;
            filtrar(palabra);
        } else {
            while (lista.firstChild) {
                lista.removeChild(lista.firstChild);
            }
            mostrarPalabras();
        }
    });

    const filtrar = (pal) => {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        for (let i = 0; i < letrasArray.length; i++) {
            for (let j = 0; j < letrasArray[i].length; j++) {
                try {
                    if (letrasArray[i][j].toLocaleLowerCase().includes(pal.toLocaleLowerCase())) {
                        $(".resultBusqueda h3").css("display", "block");
                        lista.innerHTML += `<li><a href="words/${((letrasArray[i][j]).toLocaleLowerCase()).split(" ").join("")}.html">${letrasArray[i][j]}</a></li>`;
                    }
                } catch (e) {
                    console.warn("Error gramatical");
                }
            }
        }
    }

    mostrarPalabras();
});