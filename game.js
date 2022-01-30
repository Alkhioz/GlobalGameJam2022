const initGame = () => {
    document.querySelector("#Menu").style.display = "none";
    document.querySelector("#Main").style.display = "block";
};

/*  Funcion aleatorioConProbabilidad
      Par�metros de entrada:
        min,max : Rango de n�meros a elegir.
        matrizNumeros : Array con los n�meros con una probabilidad propia.
        matrizProbabilidad : Array con la probabilidad (de 0 a 1) de cada
          n�mero de matrizNumeros.
*/
function aleatorioConProbabilidad (min,max,matrizNumeros,matrizProbabilidad){
	for (let i=0; i<matrizProbabilidad.length; i++) {
		if (Math.random()<matrizProbabilidad[i]) {
			return matrizNumeros[i];
        }
    }
	return Math.floor(Math.random()*(max-min+1)+min);
}
aleatorioConProbabilidad(1,4,[1,2,3,4],[.7,.5,.2,.01])