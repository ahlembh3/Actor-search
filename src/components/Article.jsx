/* eslint-disable react/prop-types */
function Article({ titre, children }) {
	//partie logique

	//partie return
	return (
		<>
			<div>
				<h2>{titre}</h2>
				<div>{children}</div>
				<div>
					<h3>Super partie</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Possimus, sequi!
					</p>

					<h3>Yeah !</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
		</>
	);
}
//j'export par defaut name
export default Article;
