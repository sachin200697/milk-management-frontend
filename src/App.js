import axios from 'axios';
import Navigation from './components/routing/Navigation';
import MilkManList from './components/milkman/MilkManList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MilkProducerList from './components/milkproducer/MilkProducerList';
import MilkReportList from './components/milkreport/MilkReportList';
import MilkRequestList from './components/milkrequest/MilkRequestList';
import About from './components/others/About';
import Contact from './components/others/Contact';
import TermAndCondition from './components/others/TermAndCondition';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/milkmans' element={<MilkManList />}></Route>
					<Route path='/milkreports' element={<MilkReportList />}></Route>
					<Route path='/milkproducers' element={<MilkProducerList />}></Route>
					<Route path='/milkrequests' element={<MilkRequestList />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/terms' element={<TermAndCondition />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
