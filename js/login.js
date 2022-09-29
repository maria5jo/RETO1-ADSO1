console.log("conectado")
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const form1 = document.querySelector(".btnInicio");

let usuarioBD ="22648294"
let contraseñaBD ="8294"
let intentos = 0


let extraerU = usuarioBD.slice(0, 1);
let extraerC = contraseñaBD.slice(0, 1);


form1.addEventListener("click", (e)=>  {
    e.preventDefault();
    console.log(usuario.value);
    console.log(contraseña.value);

    if (usuario.value !== usuarioBD || contraseña.value !== contraseñaBD){
        alert ("Usuario o contraseña incorrecta")
        return
    
    }
    alert ("Para ingresar al sistema realice el captcha")
    mostrarCapchat(extraerU, extraerC);
})

const mostrarCapchat = (extraerU, extraerC) =>{
    //pintar el formulario

    const capchat = document.querySelector(".login2");

    capchat.innerHTML =`
                           <form class="contenedor2" id="contenedor2">
                            <h1>validacion del capchat</h1>
                            <div id="sumas"></div>
                            <input type="number" placecholder="respuesta" id="suma"></input>
                            <button class="btn2">Guardar</button>
                           </form>
                           `
    //fin

    sumas.textContent =(`${extraerU}+${extraerC}`);

    const form2 = document.querySelector(".btn2");
     

    form2.addEventListener("click", function (e){
        e.preventDefault();

        const suma = document.getElementById("suma").value;
        const resultado = Number(extraerU) + Number(extraerC)
        if (suma != resultado) {
            alert("respuesta incorrecta")
            return
        }
        alert ('BIENVENIDO AL SISTEMA')
        alert('seleccione una opcion')
        if(confirm('1.)adivinanza'));
        else('2.)cerrar seccion')
    })

}