

// map javascript
document.addEventListener('DOMContentLoaded',function(){
    var map=L.map('map').setView ([40.728,-74.0060],4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // displaying the library
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // the place markers 
    var markers=[
        {lat:40.4259,lng:-86.9081,name: "West Lafayette"},
        {lat:37.3382,lng:-121.8863,name:"San Jose"},
        {lat:9.9312, lng:76.2673,name:"Kochi"},
        {lat: 12.9716, lng:77.5946,name:"Bangalore"},
        {lat: 41.8781, lng: -87.6298, name: "Chicago"}

    ];
    // adding to the map
    markers.forEach(function(marker) {
        L.marker([marker.lat, marker.lng])
            .addTo(map)
            .bindTooltip(marker.name, {
                permanent: false,
                direction: 'top',
                opacity: 0.7
            });
    });



});
const textprint="I'm passionate in making experiences that are enjoyable";
let index1=0;
// function to type the animated line

function typeText(){
    const typingsentence=document.getElementById('animatedline1');
    if (typingsentence && index1 < textprint.length) {
        typingsentence.textContent += textprint.charAt(index1);
        index1++;
        setTimeout(typeText, 100);
    }
   
}
typeText();
// addEventlistener for the animated line
document.addEventListener('DOMContentLoaded', function() {
    const typingsentence = document.getElementById('animatedline1');
    if (typingsentence) {
        typeText();
    } else {
        console.error("Element with ID 'animatedline1' not found");
    }
});
const textedprint2="Interactions that are engaging";
let index2=0;
function typeTextpart2(){
    const typingsentence2=document.getElementById('animatedline2');
    if (typingsentence2 && index2 < textedprint2.length) {
        typingsentence2.textContent += textedprint2.charAt(index2);
        index2++;
        setTimeout(typeTextpart2, 100);
    }
   
}
typeTextpart2();
// animating the line of code for the homepage
document.addEventListener('DOMContentLoaded', function() {
    const typingsentence2 = document.getElementById('animatedline2');
    if (typingsentence2) {
        typeTextpart2();
    } else {
        console.error("Element with ID 'animatedline2' not found");
    }
});
//this is the part where when user clicks on the list of experience, it will show the respective section for that experience
document.addEventListener("DOMContentLoaded", function () {
    const linksforsection = document.querySelectorAll('.section-link');
    const sections = document.querySelectorAll('.section');

    if (!linksforsection.length || !sections.length) {
      console.error("No links or sections found!");
      return;
    }

    linksforsection.forEach(linksforsection => {
        linksforsection.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent link default behavior

        // Hiding sections
        sections.forEach(section => {
          section.style.display = 'none';
        });

        // Show the targeted section which is the link that is clicked 
        const targetId = this.getAttribute('data-target');
        console.log("Target ID:", targetId);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.style.display = 'block';
        } else {
          console.error("Target section not found:", targetId);
        }
      });
    });
  });


