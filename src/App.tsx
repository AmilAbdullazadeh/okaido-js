import { Counter } from "./components/Counter/Counter";
import { Todo } from "./components/Todo/Todo";

function App() {

    return (
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Redux Toolkit + TypeScript Example</h1>
            
            <div className="mb-8">
              <Counter />
            </div>

            <div className="mb-8">
              <Todo />
            </div>
            
          </div>
        </div>
    );
  }
  
export { App }