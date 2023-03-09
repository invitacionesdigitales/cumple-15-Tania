
    const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $finalMessage = document.querySelector('.final-sms');
    let boton = document.querySelector("#btn")
    let boton2 = document.querySelector("#button")
    

    boton.addEventListener("click", () => {

        Swal.fire({
          title: '<strong>VER UBICACION <u></u></strong>',
          icon: 'success',
          html:
            'INGRESA, ' +
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.3517140802037!2d-64.49608278516381!3d-31.23868549480409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7a39819fa259%3A0x4792088b7eb0edb3!2sAmaryi!5e0!3m2!1ses!2sar!4v1678372573348!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> ' +
            'Ampliar mapa',  
           
              })
              
      });
     
        
    
        
     

   
    //Fecha a futuro
const countdownDate = new Date('Mar 25 2023 18:43:30 GMT-0300').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);