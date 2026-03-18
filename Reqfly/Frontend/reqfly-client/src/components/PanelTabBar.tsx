interface PanelTabBarProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function PanelTabBar({ tabs, activeTab, onTabChange }: PanelTabBarProps) {
    return (
        <div className="flex items-center gap-0 px-4 border-b border-border bg-surface-1">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`relative px-3.5 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === tab
                            ? "text-secondary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <span className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full gradient-pink" />
                    )}
                </button>
            ))}
        </div>
    );
}
