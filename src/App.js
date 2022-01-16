import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import RegisterPage from './Pages/Register'
import LoginPage from './Pages/Login'
import {StoreProvider} from './Providers/StoreProvider'
import PrivateRoute from './Pages/PrivateRoute';
import UserInfo from './Pages/UserInfo';
import UserUpdate from './Pages/UserUpdate';
import Articles from './Pages/Articles' ;
import ArticleSinglePage from './Pages/ArticleSinglePage' ;
import ArticleFormPage from './Pages/ArticleFormPage';
import Header from './Components/Header'
import Map from './Components/Map'

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Header></Header>
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
                            <Articles></Articles>
                        </PrivateRoute>
                    }></Route>
                    <Route path="/articles/:id" element={
                        <ArticleSinglePage></ArticleSinglePage>
                    }>
                    </Route>
                    <Route path="/articles/create" element={
                        <PrivateRoute>
                            <ArticleFormPage></ArticleFormPage>
                        </PrivateRoute>
                    }></Route>
                </Routes>
            </BrowserRouter>
            <Map></Map>
        </StoreProvider>
    );
}

export default App;
