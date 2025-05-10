document.addEventListener("DOMContentLoaded", function(){

        document.getElementById("boton").addEventListener("click",function(){

        // declarar las variables    
        let salario=parseInt(document.getElementById("salario").value);
        let hijos=parseInt(document.getElementById("hijos").value);
       let contrato=document.getElementById("contrato").value;
        let mensualidades;
        if (document.getElementById("mensualidad12").checked) {
            mensualidades = 12;
        } else if (document.getElementById("mensualidad14").checked) {
            mensualidades = 14;
        } else {
            mensualidades = NaN; 
        }
/*
       let valorlista=document.getElementById("contrato");
       let contrato=valorlista.selectedIndex;

       window.alert(contrato);
       let valor_contrato="0"; 
 

        if(contrato.selectedIndex==0)
            {
               valor_contrato="null";
            }else if(contrato.selectedIndex==1)
                {
                    valor_contrato="Indefinido";
                }else if(contrato.selectedIndex==2)
                    {
                        valor_contrato="temporal";
                    }else if(contrato.selectedIndex==3)
                        {
                            valor_contrato="autonomo";
                        }

         window.alert(valor_contrato);               
*/
        // comprobar que los valores no son nulos
        if(isNaN(salario) || mensualidades==NaN || isNaN(hijos) || contrato=="null"){

            window.alert("Todos los campos tienen que estar llenos para calcular");
            
        }

            

        //Creamos la retencion  y luego mostramos en pantalla 
        if (hijos>=2)
        {
            let retencion1=salario*0.08;
            let sueldo=retencion1/mensualidades;
        window.alert(" Su sueldo mensual es " +sueldo+ " en "+ mensualidades+ " pagas. Se ha seleccionado el tipo de contrato: " +contrato);

        }else 
        {
            let retencion2=salario*0.12;
            let sueldo=retencion2/mensualidades;
        window.alert(" Su sueldo mensual es " +sueldo+ " en "+ mensualidades+ " pagas. Se ha seleccionado el tipo de contrato: " +contrato);
        }
    });
});
        

       
