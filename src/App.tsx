import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AuthChecker from './auth/AuthChecker'
import { auth } from './config/firebase'

function App(): JSX.Element {

  return (
    <HashRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected && (!auth.currentUser) ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    <route.component />
                  )
                }
                />
            ))}
          </Routes>
        </Provider>
    </HashRouter>
  )
}

export default App
