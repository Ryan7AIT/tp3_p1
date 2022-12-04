nom="Jhon";
prenome= "doe";
age = 30;
note=15;
const pi=3.14

function printNom() {
	console.log(nom)
}

function printPrenom() {
	console.log(prenome)
}

function printNometPrenom() {
	console.log(nom + '-' + prenome)
}

function printAge() {
	console.log(age)
}

function printNote() {
	console.log(note)
}

function printPi() {
	console.log(pi)
}	


// exo 3
const etudiantsTab = ["Etudiant1", "Etudiant2", "Etudiant3"];
const etudiantObjet = {
	nom: 'Jhon',
	prenome: 'Doe',
	age: 30
}
const etudiantsObjet = [
	{
		nom: 'nom1',
		prenome: 'prenome1',
		age: 21
	},
	{
		nom: 'nom2',
		prenome: 'prenome2',
		age: 22
	},
	{
		nom: 'nom3',
		prenome: 'prenome3',
		age: 23
	}
	
]

function printEtudiants() {
	for (var i = 0 ; i < etudiantsTab.length ; i++) {
		console.log(etudiantsTab[i])
	}	
}


function afficherObjet() {

	console.log(etudiantObjet)

	
}

function afficherTableauObjets() {

	for (var i = 0 ; i < etudiantsObjet.length ; i++) {
		console.log(etudiantsObjet[i].nom + "-" + etudiantsObjet[i].prenome +  "-" + etudiantsObjet[i].age)
	}
}



