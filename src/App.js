import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import RegisterPage from './Pages/Register'
import LoginPage from './Pages/Login'
import {StoreProvider} from './Providers/StoreProvider'
import PrivateRoute from './Pages/PrivateRoute';
import UserInfo from './Pages/UserInfo';
import UserUpdate from './Pages/UserUpdate';
import Article from './Pages/Article' ;

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
                    }></Route>
                    <Route path="/me/update" element={
                        <PrivateRoute>
                            <UserUpdate></UserUpdate>
                        </PrivateRoute>
                    }></Route>
                     <Route path="/articles" element={
                        <PrivateRoute>
                            <Article></Article>
                        </PrivateRoute>
                    }></Route>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
