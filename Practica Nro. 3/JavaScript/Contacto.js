function validarFormulario(){

    let txtgerente = document.getElementById('gerente').value;
    let txtdomicilio = document.getElementById('domicilio').value;
    let txtemail = document.getElementById('email').value;
    let txttelefono = document.getElementById('telefono').value;
    

//Test Gerente de Compras/Ventas
if(txtgerente == null || txtgerente.length == 0 || /^\s+S/.test(txtgerente)){
    alert('Error: El campo Gerente de Compras/Ventas no debe ir vacio o lleno de solamente espacios en blanco');
    return false;
}  
//Test Nombre de la Empresa
if(txtdomicilio == null || txtdomicilio.length == 0 || /^\s+S/.test(txtdomicilio)){
    alert('Error: El campo Domicilio de la Empresa no debe ir vacio o lleno de solamente espacios en blanco');
    return false;
}  
//Test Email Gerente
if(txtemail == null || txtemail.length == 0 || /^\s+S/.test(txtemail)){
    alert('Error: El campo Email no debe ir vacio o lleno de solamente espacios en blanco');
    return false;
} 

if(txttelefono == null || txttelefono.length == 0 || /^\s+S/.test(txttelefono)){
    alert('Error: El campo Teléfono de la Empresa no debe ir vacio o lleno de solamente espacios en blanco');
    return false; 
}

return true;    
}