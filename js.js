function Buscar(){

    if(document.getElementById("palabra").value==""){
        document.getElementById("mensaje").value="Debes escribir una palabra a buscar";
    }
   else{
        var palabra = document.getElementById("palabra").value;

        if(palabra=="azul"){
            document.getElementById("mensaje").value="Palabra encontrada";

        } else if(palabra=="rojo"){
            document.getElementById("mensaje").value="Palabra encontrada";

        } else if(palabra=="verde"){
            document.getElementById("mensaje").value="Palabra encontrada";

        } 
        else{
            document.getElementById("mensaje").value=" Palabra NO encontrada";
        }


   }
     
     


}



function salir(){
    window.close();
}
function reinicio(){
    document.getElementById("mensaje").value="";
    document.getElementById("palabra").value="";
}