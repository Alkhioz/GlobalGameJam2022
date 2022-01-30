let dinero,eficiencia_energetica,tiempo

const initGame = () => {
    document.querySelector("#Menu").style.display = "none";
    document.querySelector("#Main").style.display = "block";
    console.log(aleatorioConProbabilidad([1,2,3,4],[70,120,140,141]))
    timeraleatorio()
};

//FUNCION Q SE LLAMA A SI MISMA CADA 5 SEGUNDOS
function timeraleatorio() {
    setTimeout(function() {
        console.log(aleatorioConProbabilidad([1,2,3,4],[70,120,140,141]))
        timeraleatorio()
    },5000)
}

//FUNCION Q RETORNA UNA OPCION CON PROBABILIDADES
function aleatorioConProbabilidad (matrizNumeros,matrizProbabilidad){
	for (let i=0; i<matrizProbabilidad.length; i++) {
		if (Math.floor(Math.random()*142)<matrizProbabilidad[i]) {
			return matrizNumeros[i];
        }
    }
	//return Math.floor(Math.random()*(max-min+1)+min);
}
//aleatorioConProbabilidad([1,2,3,4],[70,120,140,141])