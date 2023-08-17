export interface Props {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

export interface ThemeProviderState {
  theme: string;
  setTheme: (theme: string) => void;
}
