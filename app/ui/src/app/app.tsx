import Onboarding from '../components/onboarding/onboarding';
import { ThemeProvider } from '../contexts/theme-context';
import { ThemeToggle } from '../components/ui/theme-toggle';

export function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Onboarding />
    </ThemeProvider>
  );
}

export default App;
