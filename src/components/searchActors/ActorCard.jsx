/* eslint-disable react/prop-types */

function ActorCard({ actor, id }) {
	const [result, setResult] = useState([]);
	const rechercherDesPersonnes = async () => {
		const response = await fetch(
			`https://movies-api.julienpoirier-webdev.com/search/actors/${id}`
		);

		const data = await response.json();

		console.log(data);
		setResult(data.results);
	};
	return (
		<div className="actor-card">
			<h2>{actor.name}</h2>
			<p>Popularité: {actor.popularity}</p>
			{actor.profile_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
					alt={actor.name}
				/>
			) : null}
			<h3>Films connus:</h3>
			<ul>
				{actor.known_for.map((movie) => (
					<li key={movie.id}>
						<h4>{movie.title}</h4>
						<button
							onClick={() => {
								getMovie(movie.id);
							}}
						>
							{movie.poster_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
								/>
							) : null}
						</button>
						<div>
							{result.map((oneActor) => {
								return (
									<ActorCard
										key={oneActor.id}
										actor={oneActor}
									/>
								);
							})}
						</div>
						<p>Date de sortie: {movie.release_date}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ActorCard;
