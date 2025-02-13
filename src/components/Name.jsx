/* eslint-disable react/prop-types */

function Name({ name, age = 'DEFAUT' }) {
	//partie logique

	//partie return
	return (
		<>
			<p>
				je m&apos; appelle {name} ET j ai {age}
			</p>
		</>
	);
}
//j'export par defaut name
export default Name;
