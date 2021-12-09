window.addEventListener('DOMContentLoaded', function(){

    let name = prompt('shaharni kiriting');
    const btn = document.querySelector('.btn');

    var API_KEY = `https://api.pray.zone/v2/times/today.json?city=${name}`;

    function load(){
        
        fetch(API_KEY)
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })

        .then(data => {
            console.log(data);
           

            document.querySelector('.bomdod').innerHTML = data.results.datetime[0].times.Fajr;
            document.querySelector('.quyosh').innerHTML = data.results.datetime[0].times.Sunrise ;
            document.querySelector('.peshin').innerHTML = data.results.datetime[0].times.Dhuhr;
            document.querySelector('.asr').innerHTML = data.results.datetime[0].times.Asr;
            document.querySelector('.shom').innerHTML = data.results.datetime[0].times.Sunset;
            document.querySelector('.xufton').innerHTML = data.results.datetime[0].times.Isha;
        })

               

    }

    load();
    var spans = document.querySelectorAll('span');
 
    if(name){
        spans.forEach(span => {
            span.style.display = 'block';
        });
    }
    else{
        spans.forEach(span => {
            span.style.display = 'none';
        })
    }
})

        