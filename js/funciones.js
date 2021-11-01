
var grupos_comensales = new Array(new Array('Marta', 'Pepe', 'Paco'),
 new Array ('Julián', 'Andrea'),
 new Array ('Felipe'),
 new Array ('Marcos', 'Carla', 'Carlos', 'Juan Andrés', 'María Victoria', 'Jose Luis', 'Enrique', 'Javier', 'Mercedes', 'Petra', 'Puri', 'Gabriel', 'Francisco', 'Sara', 'Inmaculada', 'Luis'),
 new Array (),
 new Array ('Adrián', 'Teresa', 'Jaime', 'Ivan', 'Beatriz', 'Maite', 'Maitane'),
 new Array ('Álvaro', 'Sergio', 'Eva', 'Fernando', 'David', 'Navarro', 'Saúl', 'Raúl', 'Alberto', 'Nicolás', 'Manuel', 'Mari tere', 'Luis Jesús', 'Alfonso', 'Nuria', 'Claudia', 'Antonia', 'Bruno', 'Rosa', 'Rosario', 'Alba', 'Conrado', 'Yolanda', 'Diego', 'Mario', 'Irene', 'Aída', 'Luis Miguel', 'Jorge', 'Jorge Javier', 'Paz', 'Vega', 'Tamara', 'Mateo', 'Elena', 'María Elena', 'Cristina', 'Manu', 'Pedrosa', 'Juan Antonio', 'Begoña'),
 new Array ('Andrés', 'Félix', 'Susana', 'Asier'),
 new Array ('Pedro', 'Vilma', 'Bety', 'bam bam', 'Pablo'),
 new Array ('Homer', 'Marge', 'Bart', 'Lisa', 'Maggie', 'Ned'));

function comensales(){
    for(var grupo of grupos_comensales){
        calcularMesas(grupo.length);

    }
}

function calcularMesas(comensales) {
  var mesas_necesarias = 0;
  if (comensales <= 4&&comensales>0) {
    mesas_necesarias = 1;
  } else {
    mesas_necesarias = Math.floor(comensales / 3);
    if (comensales % 3 != 0) {
      mesas_necesarias++;
    }
  }
  document.getElementById('cajas').innerText +=
  "\tNumero de comensales: "+comensales + " \tNumero de mesas: "+mesas_necesarias+"\n";
  console.log( "\tNumero de comensales: "+comensales + " \tNumero de mesas: "+mesas_necesarias+"\n");
}
comensales();