function previewImage1(){
    $(".preview img:last-of-type").remove();
    $(".preview").append('<img src="images/DSC00222.JPG" alt="Eggishorn"></img>')
    $(".description h2, p").remove();
    $(".description").append('<h2>Eggishorn</h2>', '<p>The Eggishorn is a mountain in the southeastern part of the Bernese Alps, located north of Fiesch in the Swiss canton of Valais. A cable car station is located on a secondary summit named Fiescherhorli (2,893 m), 500 metres south of the main peak. </p>');
}

function previewImage2(){
    $(".preview img:last-of-type").remove();
    $(".preview").append('<img src="images/DSC00242.JPG" alt="Nightsky">');
    $(".description h2, p").remove();
    $(".description").append('<h2>Night sky over Lax</h2>', '<p>Lax is a municipality in the district of Goms in the canton of Valais in Switzerland.</p>');
}

function previewImage3(){
    $(".preview img:last-of-type").remove()
    $(".preview").append('<img id="img3" src="images/DSC00269.JPG" alt="RiverFlow">')
    $(".description h2, p").remove();
    $(".description").append('<h2>River flow</h2>', '<p>Gryfenbach river in the city of Lauterbrunnen</p>');
}

function previewImage4(){
    $(".preview img:last-of-type").remove()
    $(".preview").append('<img id="img4" src="images/DSC00275.JPG" alt="Staubbach">')
    $(".description h2, p").remove();
    $(".description").append('<h2>Swiss Alps</h2>', '<p>The Alpine region of Switzerland, conventionally referred to as the Swiss Alps, represents a major natural feature of the country and is, along with the Swiss Plateau and the Swiss portion of the Jura Mountains, one of its three main physiographic regions.</p>');
}

function previewImage5(){
    $(".preview img:last-of-type").remove()
    $(".preview").append('<img id="img5" src="images/DSC00314.JPG" alt="Sunset">')
    $(".description h2, p").remove();
    $(".description").append('<h2>Sunset over lake Geneva</h2>', '<p>Lake Geneva is a deep lake on the north side of the Alps, shared between Switzerland and France. It is one of the largest lakes in Western Europe and the largest on the course of the Rhône. 60% of the lake belongs to Switzerland and 40% to France. </p>');
}

$("#img1").click(previewImage1)
$("#img2").click(previewImage2)
$("#img3").click(previewImage3)
$("#img4").click(previewImage4)
$("#img5").click(previewImage5)
