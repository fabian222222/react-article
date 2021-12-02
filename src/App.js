import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import RegisterPage from './Pages/Register'
import LoginPage from './Pages/Login'
import {StoreProvider} from './Providers/StoreProvider'
import PrivateRoute from './Pages/PrivateRoute';
import UserInfo from './Services/UserApi/UserInfo';

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/me" element={
                        <PrivateRoute>
                            <UserInfo></UserInfo>
                        </PrivateRoute>
                    }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
