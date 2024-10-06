import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

export const AppRouter = () => (
    <>
        <Suspense fallback={<div>loading...</div>}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({element, path, children}) => (
                        <Route
                            key={path}
                            element={element}
                            path={path}
                        >
                            
                            {children}
                            
                        </Route>
                    ))}
                </Routes>
            </div>
        </Suspense>
    </>
)