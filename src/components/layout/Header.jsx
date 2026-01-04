import Title from "../shared/Title.component.jsx";
/**
 * Application header component.
 */
export default function Header() {
  return (
    <header className="app-header">
      <Title>Supabase Tasks</Title>
      <p className="app-header__subtitle">
        Simple task list powered by Supabase, built with React + Vite.
      </p>
    </header>
  );
}