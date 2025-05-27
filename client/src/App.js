import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import Private from './components/routes/Private';
import FrogotPassword from './pages/auth/FrogotPassword';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path="/dashboard" element={<Private/>}>
					<Route path='' element={<Dashboard />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/forgot-password' element={<FrogotPassword />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/policy' element={<Policy />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
