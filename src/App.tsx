import { AuthProvider, useAuth } from "./store/AuthContext/AuthContext";

function App() {

  function LoginPage() {
    const { login } = useAuth();
    return (
      <div>
        <h2>Xahiş edirik, sistemə daxil olasınız</h2>
        <button onClick={login}>Daxil ol</button>
      </div>
    );
  }
  
  function Dashboard() {
    const { currentUser } = useAuth();
    return (
      <div>
        <h2>İdarəetmə Paneli</h2>
        <p>Sistemə uğurla daxil oldunuz, {currentUser?.name}!</p>
      </div>
    );
  }

  function Display() {
    const { currentUser } = useAuth();
  
    return (
      <div>
        {currentUser ? <Dashboard /> : <LoginPage />}
      </div>
    );
  }

    return (
      <AuthProvider>
        <h1>Autentifikasiya Nümunəsi</h1>
        <Display />
      </AuthProvider>
    );
  }
  
export { App }