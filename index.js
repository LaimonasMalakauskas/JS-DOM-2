// pirmas div

document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos atrastes tekstas';
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas';

// antras div

console.log('ANTRAS DIV');

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo);

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log('paimtas su innerText tekstas:', tekstasIsParagrafo2);

console.log();

//trecias div

console.log('TERECIAS DIV');

console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

//septintas DIV

function pakeisti() {
  document.getElementById('septinto-tekstas').innerHTML = 'Pakeistas naujas tekstas';
}

//astuntas DIV

function pakeisti2(elementas, tekstas) {
  document.getElementById(elementas).innerHTML = tekstas;
}

//devintas DIV

function pakeisti3(elementas, tekstas) {
  document.getElementById(elementas).innerHTML = tekstas;
}

function kitaSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

//desimtas DIV

let pirmas = 8;
let antras = 9;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;

document.getElementById('suma').innerHTML = pirmas + '+' + antras + '=' + suma;
document.getElementById('skirtumas').innerHTML = pirmas + '-' + antras + '=' + skirtumas;
document.getElementById('sandauga').innerHTML = pirmas + '*' + antras + '=' + sandauga;
document.getElementById('dalmuo').innerHTML = pirmas + '/' + antras + '=' + dalmuo;


//vienuoliktas

pirmas = 7;
antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
                <p>${pirmas} - ${antras} = ${pirmas - antras}</p>
                <p>${pirmas} * ${antras} = ${pirmas * antras}</p>
                <p>${pirmas} / ${antras} = ${pirmas / antras}</p>`;

document.getElementById('vienuolikto-turinys').innerHTML = isvedimui;

//dvyliktas

function keistiSpalva(elementas, spalva){
  document.getElementById(elementas).style.color = spalva;
}
function keistiDydi(elementas, dydis){
  document.getElementById(elementas).style.fontSize = dydis + 'px';
}


//tryliktas

let divKeitimui = document.getElementById('div-keitimui');


let plocioSlider = document.getElementById('plocio-slider');
let aukscioSlider = document.getElementById('aukscio-slider');

plocioSlider.oninput = function() {
  divKeitimui.style.width = this.value + 'px';
}

aukscioSlider.oninput = function() {
  divKeitimui.style.height = this.value + 'px';
}

let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas');

spalvosPasirinkimas.oninput = function(){
  divKeitimui.style.backgroundColor = this.value;
}

let tekstasDivui = document.getElementById('tekstas-divui');

tekstasDivui.oninput = function(){
  divKeitimui.innerHTML = this.value;
}

//keturioliktas

function pridetiZodi(elementas, zodis){
  document.getElementById(elementas).value += zodis + ' ';
}