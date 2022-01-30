const initGame = () => {
    document.querySelector("#Menu").style.display = "none";
    document.querySelector("#Main").style.display = "block";
    console.log(aleatorioConProbabilidad([1,2,3,4],[70,120,140,141]))
    timeraleatorio()
};

/*  Funcion aleatorioConProbabilidad
      Parámetros de entrada:
        min,max : Rango de números a elegir.
        matrizNumeros : Array con los números con una probabilidad propia.
        matrizProbabilidad : Array con la probabilidad (de 0 a 1) de cada
          número de matrizNumeros.
*/
function timeraleatorio() {
    setTimeout(function() {
        console.log(aleatorioConProbabilidad([1,2,3,4],[70,120,140,141]))
        timeraleatorio()
    },5000)
}
function aleatorioConProbabilidad (matrizNumeros,matrizProbabilidad){
	for (let i=0; i<matrizProbabilidad.length; i++) {
		if (Math.floor(Math.random()*142)<matrizProbabilidad[i]) {
			return matrizNumeros[i];
        }
    }
	//return Math.floor(Math.random()*(max-min+1)+min);
}
//aleatorioConProbabilidad([1,2,3,4],[70,120,140,141])