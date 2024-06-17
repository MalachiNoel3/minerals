var mineral = ""
minerals = {'Actinolite': 209, 'Agate': 148, 'Alabaster': 24, 'Albite': 306, 'Almandine': 595, 'Amazonite': 149, 'Amethyst': 148, 'Apatite': 155, 'Apophyllite': 583, 'Aragonite': 424, 'Augite': 192, 'Aventurine': 40, 'Azurite': 585, 'Barite': 586, 'Beryl': 590, 'Biotite': 173, 'Bornite': 176, 'Calcite': 148, 'Celestite': 584, 'Chalcedony': 149, 'Chalcopyrite': 391, 'Citrine': 148, 'Copper': 556, 'Corundum': 595, 'Diamond': 594, 'Dolomite': 331, 'Epidote': 525, 'Fluorite': 322, 'Galena': 255, 'Goethite': 334, 'Gold': 585, 'Graphite': 172, 'Halite': 223, 'Hematite': 415, 'Hornblende': 180, 'Jasper': 150, 'Kaolinite': 160, 'Kyanite': 273, 'Labradorite': 151, 'Lepidolite': 238, 'Limonite': 235, 'Magnetite': 445, 'Malachite': 148, 'Milky%20Quartz': 148, 'Muscovite': 230, 'Olivine': 149, 'Opal': 393, 'Orthoclase': 274, 'Pyrite': 148, 'Pyrolusite': 188, 'Pyromorphite': 567, 'Rhodochrosite': 546, 'Rhodonite': 252, 'Rock%20Crystal': 148, 'Rose%20Quartz': 148, 'Rutile': 458, 'Satin%20Spar': 62, 'Selenite': 152, 'Silver': 541, 'Smoky%20Quartz': 148, 'Sodalite': 204, 'Sphalerite': 148, 'Spodumene': 393, 'Staurolite': 232, 'Stibnite': 478, 'Stilbite': 148, 'Sulfur': 321, 'Talc': 173, 'Topaz': 535, 'Tremolite': 228, 'Turquoise': 366, 'Ulexite': 189, 'Vanadinite': 569, 'Willemite': 313, 'Zincite': 217, 'Zircon': 294}
all = ['Actinolite', 'Agate', 'Alabaster', 'Albite', 'Almandine', 'Amazonite', 'Amethyst', 'Apatite', 'Apophyllite', 'Aragonite', 'Augite', 'Aventurine', 'Azurite', 'Barite', 'Beryl', 'Biotite', 'Bornite', 'Calcite', 'Celestite', 'Chalcedony', 'Chalcopyrite', 'Citrine', 'Copper', 'Corundum', 'Diamond', 'Dolomite', 'Epidote', 'Fluorite', 'Galena', 'Goethite', 'Gold', 'Graphite', 'Halite', 'Hematite', 'Hornblende', 'Jasper', 'Kaolinite', 'Kyanite', 'Labradorite', 'Lepidolite', 'Limonite', 'Magnetite', 'Malachite', 'Milky%20Quartz', 'Muscovite', 'Olivine', 'Opal', 'Orthoclase', 'Pyrite', 'Pyrolusite', 'Pyromorphite', 'Rhodochrosite', 'Rhodonite', 'Rock%20Crystal', 'Rose%20Quartz', 'Rutile', 'Satin%20Spar', 'Selenite', 'Silver', 'Smoky%20Quartz', 'Sodalite', 'Sphalerite', 'Spodumene', 'Staurolite', 'Stibnite', 'Stilbite', 'Sulfur', 'Talc', 'Topaz', 'Tremolite', 'Turquoise', 'Ulexite', 'Vanadinite', 'Willemite', 'Zincite', 'Zircon']

function minandimage(){
    mineral = all[Math.floor(Math.random()*76)]
    img = Math.floor(Math.random()*minerals[mineral])
    document.getElementById("image").src = `${mineral}/${img}.jpg`
    return [mineral, img]
}
function checkans() {
    var guess = document.getElementById("guessbox").value;

    if (guess.toLowerCase() == mineral.toLowerCase()){
        alert(`Correct! The mineral is ${mineral}`)
        setCookie("correct", parseInt(getCookie("correct"))+1, 99999)
        console.log(getCookie('answered'))
        location.reload()
    }
    else {
        alert(`Incorrect. The mineral is ${mineral}`)
        location.reload()
    }
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


var ta = document.getElementById('guessbox')
ta.addEventListener(
    'keypress',
    function (e) {
        if (e.keyCode == 13){
            checkans()
            e.preventDefault()

        }
    }
)
if (getCookie("correct") == "" || getCookie("correct") == "NaN"){
    setCookie("correct", "0", 99999)
    setCookie("answered", "1", 99999)
}
else {
    document.getElementById("answered").innerHTML = getCookie("answered")
    document.getElementById("correct").innerHTML = getCookie("correct")
    setCookie("answered", parseInt(getCookie("answered"))+1, 99999)
}
minandimage()