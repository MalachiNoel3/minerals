var firebaseConfig = {
    apiKey: "AIzaSyBhZD91sAHQJx-OWhpTAcV1KDWusDnb9p4",
    authDomain: "minerals-eeba4.firebaseapp.com",
    projectId: "minerals-eeba4",
    storageBucket: "minerals-eeba4.appspot.com",
    messagingSenderId: "488342313029",
    appId: "1:488342313029:web:776229bf5cf18062b5ab2c",
    measurementId: "G-YKH8GDWCF5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database
var firestore = firebase.firestore();

function incrementField(collection, doc, field) {
  var docRef = firestore.collection(collection).doc(doc);
  var increment = firebase.firestore.FieldValue.increment(1);

  var updateData = {};
  updateData[field] = increment;

  docRef.update(updateData)
    .then(() => {
      console.log(`${field} field updated successfully for ${doc}`);
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}

function cmineral(user, mineral){
  incrementField("minerals", mineral, "correct");
  incrementField("users", user, `${mineral}.correct`);
  return 1;
}

function imineral(user, mineral){
  incrementField("minerals", mineral, "incorrect");
  incrementField("users", user, `${mineral}.incorrect`);
  return 1;
}


var mineral = ""
minerals = {'Actinolite': 209, 'Agate': 148, 'Alabaster': 24, 'Albite': 150, 'Almandine': 150, 'Amazonite': 149, 'Amethyst': 148, 'Apatite': 155, 'Apophyllite': 583, 'Aragonite': 424, 'Augite': 192, 'Aventurine': 40, 'Azurite': 585, 'Barite': 586, 'Beryl': 590, 'Biotite': 173, 'Bornite': 176, 'Calcite': 148, 'Celestite': 150, 'Chalcedony': 149, 'Chalcopyrite': 391, 'Citrine': 148, 'Copper': 556, 'Corundum': 595, 'Diamond': 594, 'Dolomite': 331, 'Epidote': 525, 'Fluorite': 322, 'Galena': 255, 'Goethite': 334, 'Gold': 585, 'Graphite': 172, 'Halite': 223, 'Hematite': 415, 'Hornblende': 180, 'Jasper': 150, 'Kaolinite': 160, 'Kyanite': 273, 'Labradorite': 151, 'Lepidolite': 238, 'Limonite': 235, 'Magnetite': 445, 'Malachite': 148, 'Milky Quartz': 148, 'Muscovite': 230, 'Olivine': 149, 'Opal': 393, 'Orthoclase': 274, 'Pyrite': 148, 'Pyrolusite': 188, 'Pyromorphite': 567, 'Rhodochrosite': 546, 'Rhodonite': 252, 'Rock Crystal': 148, 'Rose Quartz': 148, 'Rutile': 458, 'Satin Spar': 62, 'Selenite': 152, 'Silver': 150, 'Smoky Quartz': 148, 'Sodalite': 204, 'Sphalerite': 148, 'Spodumene': 393, 'Staurolite': 232, 'Stibnite': 478, 'Stilbite': 148, 'Sulfur': 321, 'Talc': 173, 'Topaz': 535, "Tourmaline": 150, 'Tremolite': 228, 'Turquoise': 366, 'Ulexite': 189, 'Vanadinite': 569, 'Willemite': 313, 'Zincite': 217, 'Zircon': 294}
all = ['Actinolite', 'Agate', 'Alabaster', 'Albite', 'Almandine', 'Amazonite', 'Amethyst', 'Apatite', 'Apophyllite', 'Aragonite', 'Augite', 'Aventurine', 'Azurite', 'Barite', 'Beryl', 'Biotite', 'Bornite', 'Calcite', 'Celestite', 'Chalcedony', 'Chalcopyrite', 'Citrine', 'Copper', 'Corundum', 'Diamond', 'Dolomite', 'Epidote', 'Fluorite', 'Galena', 'Goethite', 'Gold', 'Graphite', 'Halite', 'Hematite', 'Hornblende', 'Jasper', 'Kaolinite', 'Kyanite', 'Labradorite', 'Lepidolite', 'Limonite', 'Magnetite', 'Malachite', 'Milky Quartz', 'Muscovite', 'Olivine', 'Opal', 'Orthoclase', 'Pyrite', 'Pyrolusite', 'Pyromorphite', 'Rhodochrosite', 'Rhodonite', 'Rock Crystal', 'Rose Quartz', 'Rutile', 'Satin Spar', 'Selenite', 'Silver', 'Smoky Quartz', 'Sodalite', 'Sphalerite', 'Spodumene', 'Staurolite', 'Stibnite', 'Stilbite', 'Sulfur', 'Talc', 'Topaz', "Tourmaline", 'Tremolite', 'Turquoise', 'Ulexite', 'Vanadinite', 'Willemite', 'Zincite', 'Zircon']

function levenshteinDistance(s1, s2) {
  const track = Array(s2.length + 1).fill(null).map(() =>
    Array(s1.length + 1).fill(null));

  for (let i = 0; i <= s1.length; i++) {
    track[0][i] = i;
  }
  for (let j = 0; j <= s2.length; j++) {
    track[j][0] = j;
  }

  for (let j = 1; j <= s2.length; j++) {
    for (let i = 1; i <= s1.length; i++) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,                  // deletion
        track[j - 1][i] + 1,                  // insertion
        track[j - 1][i - 1] + indicator       // substitution
      );
    }
  }

  return track[s2.length][s1.length];
}

function minandimage(){
    mineral = all[Math.floor(Math.random()*77)]
    img = Math.floor(Math.random()*minerals[mineral])
    document.getElementById("image").src = `${mineral.replace(/\s/g, '')}/${img}.jpg`
    return [mineral, img]
}
function checkans() {
    var guess = document.getElementById("guessbox").value;

    if (levenshteinDistance(guess.toLowerCase(), mineral.toLowerCase()) <= 2){
        alert(`Correct! The mineral is ${mineral}. `)
        setCookie("correct", parseInt(getCookie("correct"))+1, 99999)
        console.log(getCookie('answered'))
        console.log('Hello')

        cmineral(getCookie('usersession'), mineral) 

        document.getElementById("answered").innerHTML = getCookie("answered")
        document.getElementById("correct").innerHTML = getCookie("correct")
        setCookie("answered", parseInt(getCookie("answered"))+1, 99999)      

        minandimage()
    }
    else {
        alert(`Incorrect. The mineral is ${mineral}`)
        imineral(getCookie('usersession'), mineral)

        document.getElementById("answered").innerHTML = getCookie("answered")
        document.getElementById("correct").innerHTML = getCookie("correct")
        setCookie("answered", parseInt(getCookie("answered"))+1, 99999)
        
        minandimage()
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

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
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
if (getCookie('usersession') == ""){
    setCookie("usersession", makeid(14), 99999)
}
minandimage()
