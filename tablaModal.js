const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "y"];

const abecedario = document.querySelector(".abecedario");

for (letra of abc) {
    abecedario.innerHTML += `<div class="letras ${letra}">${letra.toUpperCase()}</div>`;
}

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

const letrasArray = [a,b,c,d,e,f,g,h,i,j,l,m,n,o,p,r,s,t,u,v,y];

const fondoModal = document.querySelector(".fondoModal");
const modal = document.querySelector(".modal");

for (ltr of abc) {
    const letras = document.querySelector(`.${ltr}`);
    letras.addEventListener("click", () => {
        fondoModal.style.display = "block";
        modal.style.display = "block";
        armarTabla(letras.innerHTML);
    })
}

const armarTabla = (letraCuadro) => {
    // console.log(letrasArray[letraTabla]);
    //revisar con letrasArray
    if(letraCuadro.toLowerCase == "A"){
        letrasArray[0];
    }
}

/**
 * tr filas
 * td columnas
 * th columnas de titulos
 * tbody cuerpo de
 */