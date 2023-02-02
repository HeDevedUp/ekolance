import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Courses from './pages/Courses'
import Student from './pages/Student'
import TeamMembers from './pages/TeamMembers'
import Dashboard from './pages/Dashboard'
import AuthProtected from './components/AuthProtected'
import AdminLayout from './components/AdminLayout'
import NotFound from './components/NotFound'
import { DarkMode } from './components/DarkMode'
import { AuthProvider } from './hooks/useAuth'

import './App.css'

function App() {
	return (
		<DarkMode>
			<Router>
				<AuthProvider>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route element={<AuthProtected />}>
							<Route path="/" element={<AdminLayout />}>
								<Route index element={<Dashboard />} />
								<Route path="dashboard/*" element={<Dashboard />} />
								<Route path="courses/*" element={<Courses />} />
								<Route path="students/*" element={<Student />} />
								<Route path="team/*" element={<TeamMembers />} />
								<Route path="*" element={<NotFound />} />
							</Route>
						</Route>
					</Routes>
				</AuthProvider>
			</Router>
		</DarkMode>
	)
}

export default App
