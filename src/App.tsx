import { Counter } from "./components/Counter/Counter";

function App() {

  function LoginPage() {
    return (
      <div>
        <h2>Xahiş edirik, sistemə daxil olasınız</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>İdarəetmə Paneli</h2>
      </div>
    );
  }

  function Display() {
  
    return (
      <div>
        <Dashboard />
      </div>
    );
  }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Redux Toolkit + TypeScript Example</h1>
            
            <div className="mb-8">
              <Counter />
            </div>
            
          </div>
        </div>
    );
  }
  
export { App }