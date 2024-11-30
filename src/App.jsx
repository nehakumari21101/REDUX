import './App.css';
import { Provider } from 'react-redux';
import { store } from "./app/store.jsx";
import Todo from './components/Todo.jsx';

function App() {

  return (
    <>
      <Provider store={store}>
        <Todo/>
      </Provider>
    </>
  )
}

export default App
