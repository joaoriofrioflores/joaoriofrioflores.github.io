var listaProductos = [];

function crearProducto(nombre, precio){
    var obj = {};
    obj.Nombre = nombre;
    obj.precio = precio;
    return obj;
}

function cargarProductos(){
    let listaProductos = [  crearProducto('TV', 1500),
                            crearProducto('Lavadora', 1000),
                            crearProducto('Licuadora', 350),
                            crearProducto('Radio', 50) ];
    return listaProductos;
}

//Cargar las tablas de los Productos
function cargarListaProductos(){    
    //Posicionarlos debajo de la cabecera.
    var tabla = document.getElementById('tbl_listaProductos');    
    var contador = 0;
    listaProductos = cargarProductos(); //Cargo y capturo el array    
    listaProductos.forEach(producto => {
        contador++; 
        var fila = tabla.insertRow(0); //Creo la fila
        var celda0 = fila.insertCell(0); //Inserto la celda 0
        celda0.innerHTML = producto.Nombre; // cargo el dato en la celda
        var celda1 = fila.insertCell(1); 
        celda1.innerHTML = producto.precio;
        var celda2 = fila.insertCell(2);
        celda2.innerHTML = '<input type="text" id="' + contador + '" disabled/>';
        var celda3 = fila.insertCell(3);
        celda3.innerHTML = '<input tag="' + contador + '" type="checkbox" onclick="javascript:habilitaTexto(this)"/>';
    })    
    return;
}

function habilitaTexto(objeto){
    var tag = objeto.getAttribute('tag');
    var texto = document.getElementById(tag);
    texto.disabled = !(texto.disabled); //operador monario = NIEGA 
    //Borrar el texto una vez que se vuelve a deshabilitar
}

function calcularTotal(){
    var tabla = document.getElementById("tbl_listaProductos");
    //itera mientras la fila exista.
    //(fila = tabla.rows[i]) = evalua la existencia
    for(var i=1, fila; fila = tabla.rows[i]; i++) {        
        console.log(fila.cells[3]);
    }

}
var tbl = document.getElementById("tbl_listaproductos");
    var tblBody = document.createElement("tbody");
