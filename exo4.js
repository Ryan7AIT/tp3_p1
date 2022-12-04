const etudiants = [
	{
		matricule: 1000,
		nom: 'JHON',
		prenome: 'DOE',
		note: 14,
		assiduite: 5
	},
	{
		matricule: 2000,
		nom: 'BOB',
		prenome: 'CARLTON',
		note: 7,
		assiduite: 1
	},
	{
		matricule: 3000,
		nom: 'RAYANE',
		prenome: 'SMITH',
		note: 13,
		assiduite: 3
	},

]


function deliveration() {
	
	for (let i = 0; i < etudiants.length; i++) {
		if(estAdmissible(etudiants[i].note)	) {
			console.log(etudiants[i].matricule + ": Admis")
		  
		}else {
			console.log(etudiants[i].matricule + ": Ajourne")
			

		}
		}

}

function estAdmissible(noteFinale) {



	if(noteFinale > 9) {
		return true
	}else {
		return false;

	}

}