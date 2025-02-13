//on importe le composant name qui affiche le prenom puis le composant devient un Name dans une balise
import Name from './components/Name';
import Article from './components/Article';
import Menu from './components/Menu';
import ActorsList from './components/searchActors/ActorsList';
import AskName from './components/searchActors/AskName';

//un bon composant
//2partie: une logique et une render
//partie logique: tous les calculs et recuperation de donnees a l'exterieur du composant:
//if else ,try catch fetch
//la partie render: l'appel a tous les autre composant et tags que l'on utiliser sous formatjsx
//mon composant est trop grand quand j'ai plus de 100lignes ou j'ai plus de 20lignes de le render

//nom du composant avec maj
function App() {
	//Partie logique
	const myName = 'Julien';

	const menu1 = [
		{
			href: '#',
			content: 'Accueil',
		},
		{
			href: '#recherche',
			content: 'Recherche',
		},
		{
			href: '#a-propos',
			content: 'A propos',
		},
	];

	const menu2 = [
		{
			href: '#facebook',
			content: 'Facebook',
		},
		{
			href: '#insta',
			content: 'Instagram',
		},
		{
			href: '#linkedin',
			content: 'LinkedIn',
		},
		{
			href: '#bluesky',
			content: 'Bluesky',
		},
		{
			href: '#x',
			content: 'X',
		},
		{
			href: '#youtube',
			content: 'Youtube',
		},
	];

	// JSX qui sera transformé en HTML
	return (
		<>
			<Menu links={menu1} />
			<AskName></AskName>
			<ActorsList></ActorsList>
			<p>
				Je suis un lien vers <a href="#">un super site</a>
			</p>

			<Article title="blabla">
				<Name name={myName} />
				<Name name="Tom" />
				<Name name="John" />
				<Name name="Jane" />
				<Name name="truc" />
				<Name name="machin" />
			</Article>

			<Article title="Super titre">
				<h3>Super partie</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Possimus, sequi!
				</p>

				<h3>Yeah !</h3>
				<p>Lorem ipsum dolor sit amet.</p>
			</Article>
			<Article title="Exemple 2">
				<p>Youhou</p>
				<p>Autre p</p>
			</Article>
			<Menu links={menu2} />
		</>
	);
}

export default App;
