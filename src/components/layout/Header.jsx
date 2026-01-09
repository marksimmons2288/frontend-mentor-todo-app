import Title from "@components/shared/Title.component";
import { Button } from "@components/ui/button";
// Import the useTheme hook to access theme context
import { useTheme } from "@hooks/useTheme";

/**
 * Application header component.
 */
export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="app-header">
      {/* Using the reusable Title component for consistent heading styles */}
      <Title>
        Supabase Tasks<span className="underline">--Worked with StylecComponents</span>
      </Title>
      <p className="app-header__subtitle">
        Simple task list powered by Supabase, built with React + Vite.
      </p>
      <Button variant="secondary" onClick={handleThemeChange}>
        Change to {isDark ? "Light" : "Dark"} Mode
      </Button>
    </header>
  );
}