import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    theme?: Theme,
    toggleTheme: () => void
}

function useTheme():UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    function toggleTheme() {
        if(setTheme) {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme);
        }
    }

    return {
        theme,
        toggleTheme
    }
}

export default useTheme;