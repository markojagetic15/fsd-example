import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppDrawer } from '../widgets/app-drawer'
import { Explore } from '../pages/explore'
import { Login } from '../pages/login'

export const Routing = () => {
    return (
        <div>
            <Router>
                <AppDrawer />

                <div>
                    <Routes>
                        <Route path="/" element={<Explore />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
