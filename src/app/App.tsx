import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { AppSidebar } from "widgets/Sidebar/AppSidebar";
import { Suspense } from "react";
import { LangSwitcher } from "widgets/LangSwitcher";

const App: React.FC = () => {
    const { theme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={""}>
                <Navbar />
                <div className="content-page">
                    <AppSidebar>
                        <LangSwitcher />
                    </AppSidebar>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
