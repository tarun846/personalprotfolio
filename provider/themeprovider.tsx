import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface IThemecontext {
  handleTheme: () => void;
  theme: boolean;
}

const Themecontextval: IThemecontext = {
  handleTheme: () => {},
  theme: true,
};

export const Themecontext = createContext(Themecontextval);
function Themeprovider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<boolean>(true);
  const handleTheme = useCallback(() => {
    setTheme((prev) => !prev);
  }, [theme]);
  return (
    <Themecontext.Provider value={{ theme, handleTheme }}>
      {children}
    </Themecontext.Provider>
  );
}

export const ThemecontextProvider = () => {
  const context = useContext(Themecontext);
  if (context === null) {
  }
  return context;
};
export default Themeprovider;
