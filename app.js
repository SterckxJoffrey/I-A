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


/**
 * Create a list item element representing a task.
 *
 * @param {{texte: string, done?: boolean}} task - Task object with text in `texte` and optional `done` flag.
 * @returns {HTMLLIElement} The created `<li>` element containing a `<p>` with the task text; the `<p>` has the `done` class if `task.done` is true.
 */
function newTaskDOM (taches) {

let liste = document.createElement('li')

const paragraphe = document.createElement('p')
paragraphe.textContent = tache.texte;
if (taches.done) {
    paragraphe.classList.add('done')
}


liste.appendChild(paragraphe)


}