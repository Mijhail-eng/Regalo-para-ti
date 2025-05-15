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
      fecha: "15/05/2023",
      titulo: "El día que nos conocimos",
      descripcion: "Esa mirada tímida en la cafetería que cambió todo...",
      imagen: "https://ejemplo.com/imagen1.jpg",
      mostrado: false
    },
    {
      fecha: "20/05/2023",
      titulo: "Nuestro primer mensaje",
      descripcion: "Cuando me escribiste 'Hola' y mi corazón saltó.",
      imagen: "https://ejemplo.com/imagen2.jpg",
      mostrado: false
    },
    {
      fecha: "25/05/2023",
      titulo: "Primera cita",
      descripcion: "El café que nunca terminamos porque no parábamos de hablar.",
      imagen: "https://ejemplo.com/imagen3.jpg",
      mostrado: false
    },
    {
      fecha: "01/06/2023",
      titulo: "Primer regalo",
      descripcion: "Me diste ese libro que aún guardo en mi mesa de noche.",
      imagen: "https://ejemplo.com/imagen4.jpg",
      mostrado: false
    },
    {
      fecha: "10/06/2023",
      titulo: "Primera película juntos",
      descripcion: "Te escondiste en mi hombro en las escenas de terror.",
      imagen: "https://ejemplo.com/imagen5.jpg",
      mostrado: false
    },
    {
      fecha: "15/06/2023",
      titulo: "Nuestro primer paseo bajo la lluvia",
      descripcion: "Compartimos un paraguas y no importó mojarnos.",
      imagen: "https://ejemplo.com/imagen6.jpg",
      mostrado: false
    },
    {
      fecha: "20/06/2023",
      titulo: "Primera foto juntos",
      descripcion: "Esa selfie torcida que es mi fondo de pantalla.",
      imagen: "https://ejemplo.com/imagen7.jpg",
      mostrado: false
    },
    {
      fecha: "30/06/2023",
      titulo: "Primera canción 'nuestra'",
      descripcion: "La que sonaba cuando nos abrazamos por primera vez.",
      imagen: "https://ejemplo.com/imagen8.jpg",
      mostrado: false
    },
    {
      fecha: "05/07/2023",
      titulo: "Primera comida que cocinamos",
      descripcion: "Quemamos la pasta, pero fue la mejor cena del mundo.",
      imagen: "https://ejemplo.com/imagen9.jpg",
      mostrado: false
    },
    {
      fecha: "15/07/2023",
      titulo: "Primer viaje",
      descripcion: "Ese pueblo pequeño donde solo existíamos tú y yo.",
      imagen: "https://ejemplo.com/imagen10.jpg",
      mostrado: false
    },
    {
      fecha: "20/07/2023",
      titulo: "Primera discusión",
      descripcion: "Fue tonta, pero aprendimos a escucharnos.",
      imagen: "https://ejemplo.com/imagen11.jpg",
      mostrado: false
    },
    {
      fecha: "25/07/2023",
      titulo: "Primer 'Te quiero'",
      descripcion: "Dijiste que se te escapó, pero sabía que era verdad.",
      imagen: "https://ejemplo.com/imagen12.jpg",
      mostrado: false
    },
    {
      fecha: "01/08/2023",
      titulo: "Primer concierto juntos",
      descripcion: "Cantamos esa canción a gritos como si nadie más existiera.",
      imagen: "https://ejemplo.com/imagen13.jpg",
      mostrado: false
    },
    {
      fecha: "10/08/2023",
      titulo: "Primera sorpresa que te preparé",
      descripcion: "Tus lágrimas cuando viste lo que había escrito en la carta.",
      imagen: "https://ejemplo.com/imagen14.jpg",
      mostrado: false
    },
    {
      fecha: "20/08/2023",
      titulo: "Noche de estrellas",
      descripcion: "Contamos constelaciones y promesas.",
      imagen: "https://ejemplo.com/imagen15.jpg",
      mostrado: false
    },
    {
      fecha: "25/08/2023",
      titulo: "Primer aniversario de un mes",
      descripcion: "Me regalaste un lápiz porque dijiste que escribía mucho sobre ti.",
      imagen: "https://ejemplo.com/imagen16.jpg",
      mostrado: false
    },
    {
      fecha: "01/09/2023",
      titulo: "Día que conociste a mi familia",
      descripcion: "Te pusiste nerviosa, pero les caíste perfecta.",
      imagen: "https://ejemplo.com/imagen17.jpg",
      mostrado: false
    },
    {
      fecha: "10/09/2023",
      titulo: "Primera vez que cocinaste para mí",
      descripcion: "Era sopa instantánea, pero para mí fue gourmet.",
      imagen: "https://ejemplo.com/imagen18.jpg",
      mostrado: false
    },
    {
      fecha: "15/09/2023",
      titulo: "Día que me curaste el resfriado",
      descripcion: "Llegaste con té y pelis, aunque te contagié después.",
      imagen: "https://ejemplo.com/imagen19.jpg",
      mostrado: false
    },
    {
      fecha: "20/09/2023",
      titulo: "Primera vez que bailamos",
      descripcion: "Fue en tu sala, con la radio y sin saber los pasos.",
      imagen: "https://ejemplo.com/imagen20.jpg",
      mostrado: false
    },
    {
      fecha: "25/09/2023",
      titulo: "Día que adoptamos una planta",
      descripcion: "La llamamos 'Pepito' y juraste que sobreviviría (no lo hizo).",
      imagen: "https://ejemplo.com/imagen21.jpg",
      mostrado: false
    },
    {
      fecha: "30/09/2023",
      titulo: "Primera vez que te llevé al aeropuerto",
      descripcion: "Prometiste volver pronto, y lo hiciste.",
      imagen: "https://ejemplo.com/imagen22.jpg",
      mostrado: false
    },
    {
      fecha: "05/10/2023",
      titulo: "Día que me mostraste tu infancia",
      descripcion: "Fotos de ti con rulos y dientes de conejo.",
      imagen: "https://ejemplo.com/imagen23.jpg",
      mostrado: false
    },
    {
      fecha: "10/10/2023",
      titulo: "Cuando supiste que me gustabas",
      descripcion: "Dijiste: 'Lo supe desde el primer día, tonto'.",
      imagen: "https://ejemplo.com/imagen24.jpg",
      mostrado: false
    }
  ].sort((a, b) => new Date(a.fecha.split('-').reverse().join('-')) - new Date(b.fecha.split('-').reverse().join('-')));

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
        const fechaSecreta = new Date("2025-05-15T21:00:00");
        const mensajeSecreto = document.getElementById('mensaje-secreto');
        
        // Verificar si es la fecha especial
        if (new Date() >= fechaSecreta) {
            mensajeSecreto.innerHTML = `
                <h3>🌟 Mensaje secreto 🌟</h3>
                <p>${recuerdo.descripcion}</p>
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