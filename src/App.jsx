import Counter from './components/counter/Counter';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<ul>
				<li>
					Crea un componente Counter y añade 3 botones para que puedas sumar,
					restar y resetear el contador. Las funciones deben estar fuera del
					componente.
				</li>
				<li>
					Añade un segundo estado que controle el incremento del contador.
				</li>
				<li>
					Desactiva el botón de reset si el botón está en 0 y desactiva el botón
					de reset increment si el incremento está en 1, (ésta lógica puedes
					hacerla dentro del componente).
				</li>
				<li>
					Haz que el número del contador se ponga de color rojo si el número es
					par y no es 0
				</li>
			</ul>

			<Counter />
		</div>
	);
};

export default App;
