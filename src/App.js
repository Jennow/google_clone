import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBlock from './components/SearchBlock';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<SearchBlock />
			<Footer />
		</div>
	);
}

export default App;
