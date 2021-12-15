window.addEventListener('load', () => {
    let long;
    let lat;
    let tempratureDegree = document.querySelector('.temp-degree');
    let tempratureDescription = document.querySelector('.temp-description');
    let locationTimeZone = document.querySelector('.location-timezone');
    let degreeSection = document.querySelector('.degree-section');
    let degreeSectionSpan = document.querySelector('.degree-section span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // here comes the api url

            // then the fetch starts here
            // fetch()
            // .then(response =>{
            //     return response.json();
            // })
            // .then(data =>{
            //     const {} = data.currently;

                // Set DOM Element from the API

                // tempratureDegree.textContent = temprature;
                // tempratureDescription.textContent = summary;
                // locationTimeZone.textContent = data.timezone;
// formula for celcius
let celcius = (tempratureDegree - 32) * (5 /9);

                // change temprature to fahranaite

                degreeSection.addEventListener('click', () => {
                    if(degreeSectionSpan.textContent === 'F'){
                        degreeSectionSpan.textContent = 'C';
                        tempratureDegree.textContent = Math.floor(celcius);
                    }else{
                        degreeSectionSpan.textContent = 'F';
                        tempratureDegree.textContent = tempratureDegree;

                    }

                });
            });
    // });

    };

});