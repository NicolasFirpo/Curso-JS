console.log("\"Entrega opcional 1 Nicolas Firpo\" pidiendo datos");


let usuario='Juan';
let contrasenia='Perez';
for(let i=1;i<4;i++){
    let usuarioIngresado=prompt('Ingresar Usuario Intento '+ i + ' de 3');
    let contraseniaIngresada=prompt('Ingresar Contraseña Intento '+ i + ' de 3');

    if (usuario==usuarioIngresado&&contrasenia==contraseniaIngresada){
        //console.log('Ingresado Correctamente!');
        alert('Ingresado Correctamente!');
        break;
    }   else if(usuario!=usuarioIngresado||contrasenia!=contraseniaIngresada){
        
            switch(i){
                case 2: 
                    alert('Ultimo intento antes de bloquear la cuenta');
                    break;
                case 3:
                    alert('Su cuenta a sido bloqueada!');
                    break;
                default:
                    alert('Datos Incorrectos');
                    break;
            }
        }
}



/*
let usuario='Juan';
let contrasenia='Perez';
for(let i=1;i<4;i++){
    let usuarioIngresado=prompt('Ingresar Usuario Intento '+ i + ' de 3');
    let contraseniaIngresada=prompt('Ingresar Contraseña Intento '+ i + ' de 3');

    if (usuario==usuarioIngresado&&contrasenia==contraseniaIngresada){
        //console.log('Ingresado Correctamente!');
        alert('Ingresado Correctamente!');
        break;
    } 
    else if(usuario!=usuarioIngresado||contrasenia!=contraseniaIngresada){
       
        if(i==2){
            //console.log('Ultimo intento antes de bloquear la cuenta');
            alert('Ultimo intento antes de bloquear la cuenta');
        } else if(i==3){
            //console.log('Cuenta bloqueada contactar servicio tecnico');
            alert('Cuenta bloqueada por favor contactar servicio tecnico');
            break;
        } else {
        //console.log('Datos Incorrectos');
        alert('Datos Incorrectos');
    }
}
}
*/
/*
let usuario='Juan';
let contrasenia='Perez';
let usuarioIngresado;
let contraseniaIngresada;
let intentos=0;

do{
    usuarioIngresado=prompt('Ingresar Usuario Intento '+ i + ' de 3');
    contraseniaIngresada=prompt('Ingresar Contraseña Intento '+ i + ' de 3');
    intentos++
    if(usuario==usuarioIngresado&&contrasenia==contraseniaIngresada){
        console.log('Ingresado Correctamente');
        alert('Ingresado Correctamente!');
        break;
    }else if(intentos==3){
        console.log('Cuenta bloqueada contactar servicio tecnico');
        alert('Cuenta bloqueada por favor contactar servicio tecnico');
        break;
    }
    console.log('Datos Incorrectos');
    alert('Datos Incorrectos');
}while(usuario!=usuarioIngresado||contrasenia!=contraseniaIngresada)
*/