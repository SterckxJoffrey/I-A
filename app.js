let button = document.getElementById('button')
let input = document.getElementById('input')
let task = document.getElementById('task')
let taches = []

const donneesStockees = localStorage.getItem("taches");

if (donneesStockees) {
    taches = JSON.parse(donneesStockees);
    taches.forEach(tache => {
        ajouterTacheDOM(tache);
    });
}

button.addEventListener("click", () => {
    const valeur = input.value.trim()
    if (valeur === '') {
        alert("Veuillez entrer un champ")
        return
    }

    const newtask = {texte : valeur , done : false}
    taches.push(newtask)
    localStorage.setItem("taches", JSON.stringify(taches));

    newTaskDOM(newtask)

    input.value = '';
    input.focus()
})


function newTaskDOM (taches) {

let liste = document.createElement('li')

const paragraphe = document.createElement('p')
paragraphe.textContent = tache.texte;
if (taches.done) {
    paragraphe.classList.add('done')
}


liste.appendChild(paragraphe)


}