let bouton           = document.querySelector("button");
let nouvelleCitation = document.querySelector("#proverbe");
let auteur           = document.querySelector("#autor");
let dernier = 0;
let nombreAleatoire = 0;

let citations = [

    [
        "Tout le monde savait que c’était impossible à faire. Puis un jour quelqu’un est arrivé qui ne le savait pas, et il l’a fait.\n","Mark Twain"
    ],
    [
        "Certains veulent que ça arrive, d’autres aimeraient que ça arrive et quelques-uns font que ça arrive.", "Michael Jordan"
    ],
    [
        "Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite.", "Henry Ford"
    ],
    [
        "Le travail individuel permet de gagner un match mais c'est l'esprit d'équipe et l'intelligence collective qui permet de gagner la coupe du monde.", "Aimé Jacquet"
    ],
    [
        "Le meilleur indicateur du développement de l’esprit d’équipe est le pourcentage de nous divisé par les je que l’on entend dans les conversations.", "Peter Drucker"
    ],
    [
        "La pierre n’a point d’espoir d’être autre chose qu’une pierre. Mais, de collaborer, elle s’assemble et devient temple", "Antoine de Saint-Exupéry" 
    ],
    [
        " La mesure ultime d’un homme n’est pas où il se situe dans les moments de confort mais où il se situe dans les moments de challenge et de controverse.", "Martin Luther King, Jr."
    ],
    [
        "Tenez-vous à l’écart des gens qui freinent vos ambitions. les petits esprits font toujours cela. les plus grands esprits seuls vous font sentir que vous aussi, pouvez devenir grand.","Mark Twain"
    ]


];



let genererNombreEntier = (max) => {

	return Math.floor(Math.random() * Math.floor(max));
}

bouton.addEventListener('click', () => {

	do{
		nombreAleatoire = genererNombreEntier(citations.length);

	}while(dernier == nombreAleatoire);

	nouvelleCitation.textContent = citations[nombreAleatoire][0];
	auteur.textContent   = citations[nombreAleatoire][1];
	dernier              = nombreAleatoire;
});