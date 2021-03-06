
const texts = [
    "firstname", "lastname",
    "address", "zipcode", "city",
    "birthday", "placeofbirth",
]
const checks = [
    "travail", "enfants", "convocation", "achats", "sport_animaux", "courses", "sante",
    "famille", "handicap", "missions", "judiciaire",
]


function createLink() {
    var obj = {};
    texts.forEach(x => obj[x] = document.getElementById("field-" + x).value);
    checks.forEach(x => obj[x] = document.getElementById("ox-" + x).checked);

    var str = Object.keys(obj).map(x => x + '=' + obj[x]).join("&");

    var link = document.querySelector("#link > a");
    var uri = window.location.origin + "/#" + str;
    link.href = uri;
    link.innerText = "Attestation personnalisée"

    window.location = uri;
}


function onLoad() {
    if (str = window.location.hash.substr(1)) {
        for (const [key, value] of new URLSearchParams(str)) {
            if (texts.includes(key))
                document.getElementById("field-" + key).value = value;
            if (checks.includes(key))
                document.getElementById("checkbox-" + key).checked =
                    (value === 'true');
        }
        document.getElementById("generate-btn").click();
    }
}

window.addEventListener("DOMContentLoaded", e => onLoad());
window.addEventListener("focus", e => onLoad());
