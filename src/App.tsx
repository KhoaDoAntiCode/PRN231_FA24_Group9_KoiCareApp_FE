import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router/router';
import { Fragment } from 'react/jsx-runtime';
import DefaultLayout from './components/layouts/DefaultLayout';
import { Suspense, useEffect, useState } from "react";


function App() {
    const [loading,setLoading] = useState<boolean>(true);
    // useEffect(() => {
    //     const accessToken = localStorage.getItem("accessToken");
    //     const refreshToken = localStorage.getItem("refreshToken");        
    // })
    return (
        <BrowserRouter>
            <div className="App">
                {publicRoutes && publicRoutes.length > 0 ? (
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                ) : (
                    <p>No routes available.</p>
                )}
            </div>
        </BrowserRouter> 
    );
}

export default App;