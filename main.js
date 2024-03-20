let liste = ["chat", "chien", "maison", "voiture", "arbre", "ordinateur", "fleur", "soleil", "plage", "montagne", "musique", "livre", "école", "football", "basketball", "table", "chaise", "fenêtre", "porte", "route", "ville", "forêt", "lac", "rivière", "océan", "île", "bateau", "avion", "train", "bus", "vélo", "piscine", "restaurant", "hôtel", "étoile", "lune", "nuage", "pluie", "neige", "vent", "tempête", "arc-en-ciel", "arcade", "spectacle", "cinéma", "théâtre", "concert", "musée", "exposition", "art", "peinture", "sculpture", "photographie", "histoire", "géographie", "mathématiques", "physique", "chimie", "biologie", "informatique", "langue", "grammaire", "vocabulaire", "conversation", "lecture", "écriture", "poésie", "roman", "nouvelle", "essai", "article", "journal", "revue", "internet", "site web", "réseau social", "blog", "forum", "message", "email", "sms", "appel", "réunion", "entretien", "présentation", "conférence", "séminaire", "atelier", "formation", "cours", "examen", "test", "devoir"]
let jouer = document.querySelector('#jouer')
let mot = document.querySelector('#mot')
let reponse = document.querySelector('#reponse')
let temp = document.querySelector('#compteur')
let pScore = document.querySelector('#score')
jouer.addEventListener('click',()=>{
  jouer.classList.add('none')
  let tmpListe = liste
  reponse.disabled = ''
    pScore.textContent = ""
  tmpListe.sort((a, b) => 0.5 - Math.random())
let score = 0 
let compteur = tmpListe.length-1


let timer = 60
temp.textContent ="temp restant : " + timer
 let fTimer = setInterval(()=>{
  if(timer !==0){
    timer-=1
    temp.textContent ="temp restant : " + timer
  }
  else{
    reponse.disabled = 'disabled'
    pScore.textContent = "ton score est de : " + score
    jouer.classList.remove('none')
    clearInterval(fTimer)
  }
},1000)

function frere (i){
  reponse.value =''
  mot.textContent = tmpListe[i]
  reponse.addEventListener('input',()=>{
    if(reponse.value[reponse.value.length-1] === tmpListe[i][reponse.value.length-1]){
      if(reponse.classList.value !== 'green'){
        reponse.classList.add('green')
      }
      if(reponse.value === tmpListe[i]){
        score++
        compteur--
        tmpListe.pop()
        pScore.textContent='juste'
        frere(compteur)
      }
    }
    else{
      if(reponse.classList.value !== 'red'){
        reponse.classList.add('red')
      }
    }
    
  })
}

frere(compteur)


})
