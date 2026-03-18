import { GripHorizontal, Copy, Download } from "lucide-react";
import { useState } from "react";
import PanelTabBar from "@/components/PanelTabBar";

const responseTabs = ["Body", "Headers", "Cookies"];

const jsonResponse = `{
    "success": true,
    "data": {
        "id": "usr_01",
        "name": "Sahil",
        "email": "sahil@reqfly.dev",
        "role": "admin",
        "createdAt": "2026-01-01T00:00:00Z"
    }
}`;

function SyntaxHighlightedJSON({ code }: { code: string }) {
    const highlighted = code
        .replace(/"([^"]+)"(?=\s*:)/g, '<span style="color:#ff6eb4">"$1"</span>')
        .replace(/:\s*"([^"]+)"/g, ': <span style="color:#a8ff78">"$1"</span>')
        .replace(/:\s*(true|false)/g, ': <span style="color:#f59e0b">$1</span>');

    return (
        <pre className="text-xs leading-relaxed text-foreground/80 font-mono p-4">
            <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
    );
}

function ResponseBodyTab() {
    const [view, setView] = useState("Pretty");
    const views = ["Pretty", "Raw", "Preview"];

    return (
        <div>
            <div className="flex items-center gap-1 px-4 py-2 border-b border-border">
                {views.map((v) => (
                    <button
                        key={v}
                        onClick={() => setView(v)}
                        className={`text-[11px] px-2.5 py-1 rounded transition-colors ${
                            view === v
                                ? "bg-surface-2 text-foreground border border-border"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {v}
                    </button>
                ))}
            </div>
            <div className="bg-editor-bg flex-1 overflow-auto">
                {view === "Pretty" && <SyntaxHighlightedJSON code={jsonResponse} />}
                {view === "Raw" && (
                    <pre className="text-xs leading-relaxed text-foreground/70 font-mono p-4 whitespace-pre-wrap">{jsonResponse}</pre>
                )}
                {view === "Preview" && (
                    <div className="p-4 text-xs text-muted-foreground">Preview not available for JSON responses.</div>
                )}
            </div>
        </div>
    );
}

function ResponseHeadersTab() {
    const headers = [
        { key: "content-type", value: "application/json; charset=utf-8" },
        { key: "x-request-id", value: "res_xyz789" },
        { key: "cache-control", value: "no-cache" },
    ];

    return (
        <div className="px-4 py-3">
            <table className="w-full">
                <tbody>
                    {headers.map((h, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-surface-2/50 transition-colors">
                            <td className="py-2 pr-4"><span className="text-xs text-secondary font-medium">{h.key}</span></td>
                            <td className="py-2"><span className="text-xs text-foreground/70">{h.value}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ResponseCookiesTab() {
    return (
        <div className="px-4 py-3">
            <table className="w-full">
                <thead>
                    <tr className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        <th className="text-left py-1 font-medium">Name</th>
                        <th className="text-left py-1 font-medium">Value</th>
                        <th className="text-left py-1 font-medium">Domain</th>
                        <th className="text-left py-1 font-medium">Expires</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-border/50 hover:bg-surface-2/50 transition-colors">
                        <td className="py-2"><span className="text-xs text-foreground/90">session_id</span></td>
                        <td className="py-2"><span className="text-xs text-muted-foreground">abc123</span></td>
                        <td className="py-2"><span className="text-xs text-muted-foreground">api.example.com</span></td>
                        <td className="py-2"><span className="text-xs text-muted-foreground">Session</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default function ResponsePanel() {
    const [activeTab, setActiveTab] = useState("Body");

    return (
        <div className="flex flex-col border-t border-border flex-1 min-h-0">
            {/* Drag handle */}
            <div className="flex items-center justify-center py-1 cursor-row-resize hover:bg-surface-2/30 transition-colors">
                <GripHorizontal className="w-4 h-4 text-muted-foreground/30" />
            </div>

            {/* Meta bar */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-border bg-surface-1">
                <span className="text-[11px] font-bold bg-success/15 text-success px-2 py-0.5 rounded">
                    200 OK
                </span>
                <span className="text-[11px] text-muted-foreground">124 ms</span>
                <span className="text-[11px] text-muted-foreground">1.2 KB</span>
                <div className="flex-1" />
                <button className="text-muted-foreground hover:text-foreground transition-colors" title="Copy">
                    <Copy className="w-3.5 h-3.5" />
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors" title="Download">
                    <Download className="w-3.5 h-3.5" />
                </button>
            </div>

            <PanelTabBar tabs={responseTabs} activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab content */}
            <div className="flex-1 overflow-auto">
                {activeTab === "Body" && <ResponseBodyTab />}
                {activeTab === "Headers" && <ResponseHeadersTab />}
                {activeTab === "Cookies" && <ResponseCookiesTab />}
            </div>
        </div>
    );
}
