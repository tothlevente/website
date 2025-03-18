import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="vite-ui-theme"
    >
      <Header />
    </ThemeProvider>
  );
};
