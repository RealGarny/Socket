import { useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeProvider = ({children}:ThemeProviderProps) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return(
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;