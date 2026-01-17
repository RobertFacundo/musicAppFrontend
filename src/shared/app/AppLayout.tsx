import type { ReactNode } from "react";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-white/40 dark:bg-neutral-900/40">
            {children}
        </div>
    );
};

export default AppLayout;