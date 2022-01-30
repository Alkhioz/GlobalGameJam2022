let dinero=35000,eficiencia_energetica=45000,carta

const initGame = () => {
    document.querySelector("#Menu").style.display = "none";
    document.querySelector("#Main").style.display = "block";
    carta=aleatorioConProbabilidad([1,2,3,4],[70,120,140,141]);
    document.querySelector("#Madera").style.display = "none";
    document.querySelector("#Carbon").style.display = "none";
    document.querySelector("#Biblias").style.display = "none";
    document.querySelector("#CO2").style.display = "none";
    switch (carta) {
        case 1:
            document.querySelector("#Madera").style.display = "block";
            break;
        case 2:
            document.querySelector("#Carbon").style.display = "block";
            break;
        case 3:
            document.querySelector("#Biblias").style.display = "block";
            break;
        case 4:
            document.querySelector("#CO2").style.display = "block";
            break;
    }
    timeraleatorio()
};

//FUNCION Q SE LLAMA A SI MISMA CADA 5 SEGUNDOS
function timeraleatorio() {
    setTimeout(function() {
        carta=aleatorioConProbabilidad([1,2,3,4],[70,120,140,141])
        document.querySelector("#Madera").style.display = "none";
        document.querySelector("#Carbon").style.display = "none";
        document.querySelector("#Biblias").style.display = "none";
        document.querySelector("#CO2").style.display = "none";
        switch (carta) {
            case 1:
                document.querySelector("#Madera").style.display = "block";
                break;
            case 2:
                document.querySelector("#Carbon").style.display = "block";
                break;
            case 3:
                document.querySelector("#Biblias").style.display = "block";
                break;
            case 4:
                document.querySelector("#CO2").style.display = "block";
                break;
        }
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