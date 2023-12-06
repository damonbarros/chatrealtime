import Router from "./Router"
import AuthProvider from "./Contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}

export default App
