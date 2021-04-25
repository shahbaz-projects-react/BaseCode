import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        APP
      </div>
    </ThemeProvider>
  );
}

export default App;
