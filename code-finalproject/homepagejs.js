

// the sentence animation
document.addEventListener('DOMContentLoaded',function(){
    var map=L.map('map').setView ([40.728,-74.0060],4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var markers=[
        {lat:40.4259,lng:-86.9081,name: "West Lafayette"},
        {lat:37.3382,lng:-121.8863,name:"San Jose"},
        {lat:9.9312, lng:76.2673,name:"Kochi"},
        {lat: 12.9716, lng:77.5946,name:"Bangalore"},
        {lat: 41.8781, lng: -87.6298, name: "Chicago"}

    ];
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


function typeText(){
    const typingsentence=document.getElementById('animatedline1');
    if (typingsentence && index1 < textprint.length) {
        typingsentence.textContent += textprint.charAt(index1);
        index1++;
        setTimeout(typeText, 100);
    }
   
}
typeText();

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

document.addEventListener('DOMContentLoaded', function() {
    const typingsentence2 = document.getElementById('animatedline2');
    if (typingsentence2) {
        typeTextpart2();
    } else {
        console.error("Element with ID 'animatedline2' not found");
    }
});



document.addEventListener("DOMContentLoaded",()=>{

// for the slide animation
    const images=["../code-finalproject/assets-finalproject/caketwolayer.png",
        "../code-finalproject/assets-finalproject/cakethreelayer.png",
        "../code-finalproject/assets-finalproject/single_layer_of_chocolate_cake_with_rasberries_on_top-removebg-preview.png"


    ];

    const textcontents=[
       
        {
            title:"Product Design",
            description:'Product Design is where I`m next expereienced with, I challenged myself to take up more designing tasks within class sponsored projects and I also did a product design internship where I learned extensively about working with design systems'
        },
        {
            title:"Graphic Design",
            description:'As the cherry on top, I was a web development intern where I designed lots of graphics for Purdue. This was towards the end of my undergrad where I have designed a few graphics for Purdue'

        },
        {
            title:"UX Research",
            description:'UX Research would be considered as my foundation in UX as I did my first internship in UX Research and I tend to do research for most of my projects'

        }

    ];


    //get the elements from the html file 

    const imagesElement=document.getElementById('imageslidebox');
    const textcontslide=document.getElementById('text-content');
    const uparrow=document.getElementById('up-arrow');
    const downarrow=document.getElementById('down-arrow');
    //index
    let currentIndexSlide=0;

    //updating
    const updateContent= (index) =>{
        // imagesElement.style.transform="scale(1.2)";
        setTimeout(()=>{
            imagesElement.src=images[index];
            // imagesElement.style.transform="scale(1)";
        }, 200);

        textcontslide.style.opacity=0;
        // textcontslide.style.transform="translateY(20px)";
        setTimeout(()=>{
            textcontslide.innerHTML=`
            <h3>${textcontents[index].title}</h3>
            <p>${textcontents[index].description}</p>
            `;
            textcontslide.style.opacity=1;
            // textcontslide.style.transform="translateY(0)";
        }, 200);




    };

    //event listeners
    uparrow.addEventListener("click",()=>{
        currentIndexSlide=(currentIndexSlide-1+images.length)%images.length;
        updateContent(currentIndexSlide);

    });
    downarrow.addEventListener("click",()=>{
        currentIndexSlide=(currentIndexSlide+1)%images.length;
        updateContent(currentIndexSlide);
    });
    

});
