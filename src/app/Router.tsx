import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppDrawer } from '../widgets/app-drawer'
import { Explore } from '../pages/explore/ui'

export const Routing = () => {
    return (
        <div>
            <Router>
                <AppDrawer />

                <div>
                    <Routes>
                        <Route path="/" element={<Explore />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
