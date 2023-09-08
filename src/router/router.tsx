import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductDetail from '../pages/ProductDetail'

export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>"
                    <Route path='/' element={<HomePage />} />
                    <Route path='/productDetails/:id' element={<ProductDetail />} />
                </Routes>
            </Router>
        </>
    )
}
