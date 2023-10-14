import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () =>
{
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33FF', '#FFFF33', '#3366FF', '#FF6633'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;