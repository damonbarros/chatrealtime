import Router from "./Router"
import AuthProvider from "./Contexts/AuthContext";
import UsersProvider from "./Contexts/UsersContext";
function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <Router/>
      </UsersProvider>
    </AuthProvider>
  )
}

export default App
