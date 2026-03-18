import { Zap, Plus, FolderPlus, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import MethodPill from "@/components/MethodPill";

interface RequestItem {
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    name: string;
}

interface Collection {
    name: string;
    requests: RequestItem[];
}

const collections: Collection[] = [
    {
        name: "Auth API",
        requests: [
            { method: "POST", name: "Login" },
            { method: "POST", name: "Register" },
            { method: "GET", name: "Verify Token" },
        ],
    },
    {
        name: "User Service",
        requests: [
            { method: "GET", name: "Get Users" },
            { method: "DELETE", name: "Delete User" },
        ],
    },
];

export default function ReqflySidebar() {
    const [openCollections, setOpenCollections] = useState<Record<string, boolean>>({
        "Auth API": true,
        "User Service": false,
    });
    const [activeRequest, setActiveRequest] = useState("Login");

    const toggle = (name: string) =>
        setOpenCollections((prev) => ({ ...prev, [name]: !prev[name] }));

    return (
        <aside className="w-[260px] min-w-[260px] h-screen bg-surface-1 border-r border-border flex flex-col">
            {/* Logo */}
            <div className="px-4 pt-5 pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg gradient-pink flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <span className="text-foreground font-bold text-sm tracking-tight block">Reqfly</span>
                        <span className="text-muted-foreground text-[10px]">Fly through your APIs</span>
                    </div>
                </div>
            </div>

            {/* New Request */}
            <div className="px-3 py-3">
                <button className="w-full flex items-center justify-center gap-2 gradient-pink glow-pink text-white text-xs font-semibold py-2.5 rounded-lg transition-all hover:opacity-90">
                    <Plus className="w-3.5 h-3.5" />
                    New Request
                </button>
            </div>

            {/* Collections header + New Collection button */}
            <div className="flex items-center justify-between px-3 py-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    Collections
                </span>
                <button
                    title="New Collection"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                >
                    <FolderPlus className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Collections list */}
            <div className="flex-1 overflow-y-auto px-1.5">
                {collections.map((col) => (
                    <div key={col.name} className="mb-0.5">
                        <button
                            onClick={() => toggle(col.name)}
                            className="w-full flex items-center gap-1.5 px-3 py-2 text-xs text-foreground/80 hover:bg-surface-2 rounded-md transition-colors"
                        >
                            {openCollections[col.name] ? (
                                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                            ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                            )}
                            <span className="font-medium">{col.name}</span>
                        </button>
                        {openCollections[col.name] && (
                            <div className="ml-2">
                                {col.requests.map((req) => (
                                    <button
                                        key={req.name}
                                        onClick={() => setActiveRequest(req.name)}
                                        className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs rounded-md transition-colors ${
                                            activeRequest === req.name
                                                ? "bg-surface-2 border-l-2 border-l-secondary text-foreground"
                                                : "text-foreground/50 hover:bg-surface-2/50 hover:text-foreground/70"
                                        }`}
                                    >
                                        <MethodPill method={req.method} />
                                        <span className="truncate">{req.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
}
