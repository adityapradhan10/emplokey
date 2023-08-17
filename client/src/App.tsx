import { ThemeProvider } from '@/context/ThemeProvider';
import Routing from './routes';

function App() {
  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
