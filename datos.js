const opciones = {

	nombre:{
		alias: "n",
		demand:true, 

	},	
	matematicas:{
		demand:true,
		alias: "m"
	},
	ingles:{
	    demand:true,
		alias: "i"	
	},
	programacion:{
		demand:true,
		alias: "p"
	}
}

let obtenerPromedio = (nota_uno, nota_dos, nota_tres)


const argv = require('yargs')
             .command("promedio", "calcular el promedio", opciones)
             .argv

console.exports ={
	obtenerPromedio,
	argv
};	
