import React from 'react';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './context/TodoContext/TodoContext';

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
