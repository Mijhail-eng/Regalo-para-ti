// Añade esto al principio del archivo (junto a tus otras variables como recuerdoActual)
let cancionActualPlaylist = 0; // Para rastrear la canción activa

function verificarPassword() {
    const entrada = document.getElementById("password").value;
    const claveCorrecta = "16-02-2025";
    const hoy = new Date();
    const fechaSecreta = new Date("2025-05-25T00:00:00");
  
    if (entrada === claveCorrecta) {
      document.getElementById("contenido").classList.remove("oculto");
      document.getElementById("contenedor-recuerdos").classList.remove("oculto");
      
      // Música
      document.getElementById("miMusica").play().catch(e => console.log(e));
      
      // Mensaje secreto
    
    } else {
      alert("Esa no es la fecha bb 😘");
    }
}
  
  const recuerdos = [
    {
      fecha: "17/05/2023",
      titulo: "Primer mensaje",
      descripcion: "Te escribe por primera vez para ver los materiales de topo",
      imagen: "Imagenes/f1.jpg",
      mostrado: false
    },
    {
      fecha: "31/07/2023",
      titulo: "Trabajo final de topo",
      descripcion: "Tenia que viajar y le deje mi mapa a usted",
      imagen: "Imagenes/f2.jpg",
      mostrado: false
    },
    {
      fecha: "23/09/2023",
      titulo: "Primera cita",
      descripcion: "Jejeje, no estoy seguro pero me llevaste a tomar frape por mi cumple",
      imagen: "Imagenes/f3.jpg",
      mostrado: false
    },
    {
      fecha: "15/06/2024",
      titulo: "Me animaste",
      descripcion: "Comente que volvi al Gym y me animaste",
      imagen: "Imagenes/f4.jpg",
      mostrado: false
    },
    {
      fecha: "28/06/2024",
      titulo: "Un buen cumplido",
      descripcion: "Me diste un cumplido bien bonito y me encanto",
      imagen: "Imagenes/f5.jpg",
      mostrado: false
    },
    {
      fecha: "14/05/2024",
      titulo: "Prime cumpleaños tuyo",
      descripcion: "MI primera sorpresa para ti amor una pulsera y ...",
      imagen: "Imagenes/f6.jpg",
      mostrado: false
    },
    {
      fecha: "25/06/2024",
      titulo: "Niña Tierna",
      descripcion: "Me dijiste que mis mensajes me hacen sentir amada de una manera única”",
      imagen: "Imagenes/f7.jpg",
      mostrado: false
    },
    {
      fecha: "19/07/2024",
      titulo: "Pequeños gestos'",
      descripcion: "Te emocionaste por algo que dije.",
      imagen: "Imagenes/f8.jpg",
      mostrado: false
    },
    {
      fecha: "29/06/2024",
      titulo: "Te quiero sin razon",
      descripcion: "Me dijiste: No le pongo límite al cariño que te doy ",
      imagen: "Imagenes/f9.jpg",
      mostrado: false
    },
    {
      fecha: "04/08/2024",
      titulo: "Luchando juntos",
      descripcion: "Me diste compañia incodicional en un situación dificil",
      imagen: "Imagenes/f10.jpg",
      mostrado: false
    },
    {
      fecha: "12/12/2024",
      titulo: "Te soñé antes",
      descripcion: "Mencionaste que te sentias como si me conocieras desde antes",
      imagen: "Imagenes/f11.jpg",
      mostrado: false
    },
    {
      fecha: "20/04/2025",
      titulo: "Fotos para la eternidad'",
      descripcion: "Soñamos con un futuro juntos lleno de recuerdos y aventuras compartidas",
      imagen: "Imagenes/f12.jpg",
      mostrado: false
    },
    {
      fecha: "16/02/2025",
      titulo: "Volvimos",
      descripcion: "Te pedi volver a llamarte amor",
      imagen: "Imagenes/f13.jpg",
      mostrado: false
    },
    {
      fecha: "26/02/2025",
      titulo: "Canciones al oído",
      descripcion: "Quisiera que me cantes esa canción al oído",
      imagen: "Imagenes/f14.jpg",
      mostrado: false
    },
    {
      fecha: "19/12/2024",
      titulo: "Pregunta Preguntosa",
      descripcion: "Me pediste si podiamos hacer cositas...",
      imagen: "Imagenes/f15.jpg",
      mostrado: false
    },
    {
      fecha: "30/03/2025",
      titulo: "Cancioncitas",
      descripcion: "Cree un grupito para compartir nuestras cancioncitas",
      imagen: "Imagenes/f16.jpg",
      mostrado: false
    },
    {
      fecha: "07/03/2025",
      titulo: "Foto de perfil",
      descripcion: "Decidimos compartir nuestras fotos de perfil",
      imagen: "Imagenes/f17.jpg",
      mostrado: false
    },
    {
      fecha: "22/01/2025",
      titulo: "Nuestra historia erótica",
      descripcion: "Conversaciones 🔥 que no deben ser leídas por nadie XD",
      imagen: "Imagenes/f18.jpg",
      mostrado: false
    },
    {
      fecha: "09/03/2025",
      titulo: "La ternura que desarma",
      descripcion: "Contigo tengo unas cuantas fotos… son mis favoritas.",
      imagen: "Imagenes/f19.jpg",
      mostrado: false
    },
    {
      fecha: "10/05/2025",
      titulo: "Quiero recordarlo todo",
      descripcion: "Amo los momentos que creamos juntitos… son los que nunca quisiera borrar de mi memoria",
      imagen: "Imagenes/f20.jpg",
      mostrado: false
    },
    {
      fecha: "25/09/2023",
      titulo: "Día que adoptamos una planta",
      descripcion: "La llamamos 'Pepito' y juraste que sobreviviría (no lo hizo).",
      imagen: "Imagenes/f21.jpg",
      mostrado: false
    },
    {
      fecha: "21/03/2025",
      titulo: "Los momentos siguen",
      descripcion: "Valoramos lo que construimos dia a dia",
      imagen: "Imagenes/f22.jpg",
      mostrado: false
    },
    {
      fecha: "15/02/25",
      titulo: "Primera llamada",
      descripcion: "Fue la primera vez que hicimos costias por llamada.",
      imagen: "Imagenes/f23.jpg",
      mostrado: false
    },
    {
      fecha: "27/03/25",
      titulo: "COnversación de niñez",
      descripcion: "Hicimos una dinamica para que veas lo mucho que avanzaste y que tu yo chiquita deberia estar orgullosa de lo que eres",
      imagen: "Imagenes/f24.jpg",
      mostrado: false
    }
  ].sort((a, b) => {
    // Convertir fechas a formato Date para comparar
    const [diaA, mesA, añoA] = a.fecha.split('/');
    const [diaB, mesB, añoB] = b.fecha.split('/');
    const fechaA = new Date(`${añoA}-${mesA}-${diaA}`);
    const fechaB = new Date(`${añoB}-${mesB}-${diaB}`);
    return fechaA - fechaB; // Orden ascendente (más antiguo primero)
});

let recuerdoActual = 0;

function mostrarSiguienteRecuerdo() {
    const contenedor = document.getElementById('contenedor-recuerdos');
    const recuerdo = recuerdos[recuerdoActual];
    
    // Crear tarjeta con animación escalonada
    const tarjeta = document.createElement('div');
    tarjeta.className = 'recuerdo-card';
    tarjeta.style.setProperty('--i', recuerdoActual);
    tarjeta.innerHTML = `
        <h4>${recuerdo.titulo}</h4>
        <small>${formatearFecha(recuerdo.fecha)}</small>
        <img src="${recuerdo.imagen}" alt="${recuerdo.titulo}">
        <p>${recuerdo.descripcion}</p>
    `;
    
    contenedor.appendChild(tarjeta);
    recuerdoActual++;
    document.getElementById('recuerdo-actual').textContent = recuerdoActual;

    if (recuerdoActual === recuerdos.length) {
        // Ocultar botón y mostrar mensaje final
        document.getElementById('btn-siguiente').classList.add('oculto');
        document.getElementById('mensaje-final').classList.remove('oculto');
        
        // Activar corazones flotantes (300ms = cada 0.3 segundos)
        const intervaloCorazones = setInterval(crearCorazon, 300);
        
        // Configurar fecha especial (15 de abril 2025 a las 21:00)
        const fechaSecreta = new Date("2025-05-14T21:00:00");
        const mensajeSecreto = document.getElementById('mensaje-secreto');
        
        // Verificar si es la fecha especial
        if (new Date() >= fechaSecreta) {
            mensajeSecreto.innerHTML = `
                <h3>🌟 Mensaje secreto 🌟</h3>
                <p>Feliz cumpleaños bebé, espere hasta esta hora para indicarte que la entrega que recogiste es para ti, disculpa por el empaquetado ese dia estaba algo molesto espero que te guste todo lo que hay dentro. Psdt perdon por hacer
                que tu lo recogieras, pense en muchas posibilidades una de ellas era que tu hermana te lo entregara u otra persona pero lo primero es imposible xd porque me odia y no acepto la solicitud de amistad xd ademas que no se como reaccionaria
                asi que decistí y la segunda opción tampoco era viable porque estas algo ocupada y no quisiera que ande con un paquete a todos lados jejejejje.</p>
            `;
        } else {
            // Contador regresivo con días, horas, minutos y segundos
            function actualizarContador() {
                const ahora = new Date();
                const diferencia = fechaSecreta - ahora;
                
                if (diferencia <= 0) {
                    clearInterval(intervaloContador);
                    mensajeSecreto.innerHTML = `
                        <h3>🌟 ¡El mensaje está disponible! 🌟</h3>
                        <p>Actualiza la página para verlo</p>
                    `;
                    return;
                }
                
                const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
                
                mensajeSecreto.innerHTML = `
                    <h3>⏳ Mensaje especial en...</h3>
                    <div class="contador">
                        <div><span>${dias}</span>días</div>
                        <div><span>${horas}</span>horas</div>
                        <div><span>${minutos}</span>min</div>
                        <div><span>${segundos}</span>seg</div>
                    </div>
                    <small>Se desbloqueará el ${fechaSecreta.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })} a las 21:00</small>
                `;
            }
            
            actualizarContador();
            const intervaloContador = setInterval(actualizarContador, 1000);
        }
        
        mensajeSecreto.classList.remove('oculto');
        
        // Mostrar foto final después de 2 segundos (con confeti)
        setTimeout(() => {
            const fotoFinal = document.getElementById('foto-final');
            fotoFinal.classList.remove('oculto');
            
            // Efecto de confeti
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff6b9e', '#ff8fab', '#ffcce6']
                });
            }

            // Mostrar playlist después de 4 segundos (y pausar música de fondo)
            // Dentro del setTimeout que muestra la playlist (cerca del final del JS)
            setTimeout(() => {
                const playlist = document.getElementById('playlist');
                const musicaFondo = document.getElementById('miMusica');
                
                musicaFondo.pause();
                playlist.classList.remove('oculto');
                
                // Reproducir primera canción automáticamente
                const primeraCancion = document.querySelector('.cancion.active audio');
                if (primeraCancion) primeraCancion.play();
                
                // Botón para cerrar playlist (AÑADE ESTO)
                const btnCerrar = document.createElement('button');
                btnCerrar.textContent = 'Volver a música ambiental';
                btnCerrar.className = 'btn-cerrar-playlist';
                btnCerrar.addEventListener('click', () => {
                    playlist.classList.add('oculto');
                    musicaFondo.play();
                    // Pausar todas las canciones y reiniciar playlist
                    document.querySelectorAll('.cancion audio').forEach(audio => audio.pause());
                    document.querySelectorAll('.cancion').forEach(c => c.classList.remove('active'));
                    document.querySelector(`.cancion:nth-child(1)`).classList.add('active');
                    cancionActualPlaylist = 0; // Reiniciar contador
                });
                
                playlist.appendChild(btnCerrar);
            }, 2000); // 2 segundos después de la foto (4s total)
        }, 2000);
    }
}


// Función auxiliar para formatear fechas
function formatearFecha(fechaStr) {
  const [dia, mes, año] = fechaStr.split(/[\/-]/); // Usa regex para dividir por / o -
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return `${dia} de ${meses[parseInt(mes)-1]} de ${año}`;
}

// Evento del botón
document.getElementById('btn-siguiente').addEventListener('click', mostrarSiguienteRecuerdo);

// Inicializar (ocultar grilla al inicio)
document.getElementById('contenedor-recuerdos').classList.add('oculto');

  function actualizarContador() {
    const fechaSecreta = new Date("2024-05-14T00:00:00");
    const hoy = new Date();
    
    if (hoy < fechaSecreta) {
      const segundos = Math.floor((fechaSecreta - hoy) / 1000);
      const dias = Math.floor(segundos / (3600 * 24));
      const horas = Math.floor((segundos % (3600 * 24)) / 3600);
      
      document.getElementById("mensaje-secreto").innerHTML = `
        <h3>⏳ Mensaje en camino...</h3>
        <p>Desbloqueo en: <strong>${dias}d ${horas}h</strong></p>
        <small>Fecha exacta: ${fechaSecreta.toLocaleDateString('es-ES')}</small>
      `;
    }
  }
  
  // Actualizar cada hora
  if (recuerdoActual === recuerdos.length && hoy < fechaSecreta) {
    actualizarContador();
    setInterval(actualizarContador, 3600000); // 1 hora
  }

  // Añade esto al final de tu script.js
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.className = 'corazon-latido';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.top = Math.random() * 100 + 'vh';
    corazon.style.opacity = Math.random() * 0.5 + 0.3;
    corazon.style.animationDuration = Math.random() * 0.5 + 1 + 's';
    document.body.appendChild(corazon);
    
    setTimeout(() => {
      corazon.remove();
    }, 5000);
  }
  
  // Activar en momentos especiales (ej: al completar recuerdos)
  if (recuerdoActual === recuerdos.length) {
    setInterval(crearCorazon, 300); // Corazones cada 300ms
  }

  // Control de botones de playlist (AÑADE ESTO AL FINAL DEL ARCHIVO)
document.querySelector('.btn-anterior').addEventListener('click', () => {
    const canciones = document.querySelectorAll('.cancion');
    if (cancionActualPlaylist > 0) {
        canciones[cancionActualPlaylist].classList.remove('active');
        document.querySelector(`.cancion:nth-child(${cancionActualPlaylist + 1}) audio`).pause();
        cancionActualPlaylist--;
        canciones[cancionActualPlaylist].classList.add('active');
        document.querySelector(`.cancion:nth-child(${cancionActualPlaylist + 1}) audio`).play();
    }
});

document.querySelector('.btn-siguiente').addEventListener('click', () => {
    const canciones = document.querySelectorAll('.cancion');
    if (cancionActualPlaylist < canciones.length - 1) {
        canciones[cancionActualPlaylist].classList.remove('active');
        document.querySelector(`.cancion:nth-child(${cancionActualPlaylist + 1}) audio`).pause();
        cancionActualPlaylist++;
        canciones[cancionActualPlaylist].classList.add('active');
        document.querySelector(`.cancion:nth-child(${cancionActualPlaylist + 1}) audio`).play();
    }
});

// Variables globales
let musicaMuteada = false;
const musicaFondo = document.getElementById('miMusica');

// Botón para abrir playlist
document.getElementById('btn-abrir-playlist').addEventListener('click', () => {
  const playlist = document.getElementById('playlist');
  playlist.classList.remove('oculto');
  musicaFondo.pause();
  
  // Reiniciar playlist a la primera canción
  cancionActualPlaylist = 0;
  document.querySelectorAll('.cancion').forEach((cancion, index) => {
    cancion.classList.toggle('active', index === 0);
  });
});

// Botón para mutear/desmutear
document.getElementById('btn-mute').addEventListener('click', () => {
  musicaMuteada = !musicaMuteada;
  musicaFondo.muted = musicaMuteada;
  document.getElementById('btn-mute').textContent = musicaMuteada ? "🔊 Sonido" : "🔇 Silenciar";
});