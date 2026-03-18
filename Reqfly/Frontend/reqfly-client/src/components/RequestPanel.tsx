import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PanelTabBar from "@/components/PanelTabBar";
import KeyValueTable from "@/components/KeyValueTable";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const methodStyles: Record<HttpMethod, { label: string; pill: string; button: string }> = {
    GET:    { label: "GET",    pill: "text-success border-success/40 bg-success/5",        button: "text-success border-success/40 bg-success/5 hover:bg-success/10" },
    POST:   { label: "POST",   pill: "text-info border-info/40 bg-info/5",                 button: "text-info border-info/40 bg-info/5 hover:bg-info/10" },
    PUT:    { label: "PUT",    pill: "text-warning border-warning/40 bg-warning/5",        button: "text-warning border-warning/40 bg-warning/5 hover:bg-warning/10" },
    PATCH:  { label: "PATCH",  pill: "text-[hsl(var(--method-patch))] border-[hsl(var(--method-patch))]/40 bg-[hsl(var(--method-patch))]/5", button: "text-[hsl(var(--method-patch))] border-[hsl(var(--method-patch))]/40 bg-[hsl(var(--method-patch))]/5 hover:bg-[hsl(var(--method-patch))]/10" },
    DELETE: { label: "DELETE", pill: "text-destructive border-destructive/40 bg-destructive/5", button: "text-destructive border-destructive/40 bg-destructive/5 hover:bg-destructive/10" },
};

function MethodDropdown({ method, onChange }: { method: HttpMethod; onChange: (m: HttpMethod) => void }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((o) => !o)}
                className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border transition-colors ${methodStyles[method].button}`}
            >
                {method}
                <ChevronDown className="w-3 h-3" />
            </button>
            {open && (
                <div className="absolute left-0 top-full mt-1 z-50 bg-surface-1 border border-border rounded-lg shadow-lg overflow-hidden min-w-[110px]">
                    {(Object.keys(methodStyles) as HttpMethod[]).map((m) => (
                        <button
                            key={m}
                            onClick={() => { onChange(m); setOpen(false); }}
                            className={`w-full text-left px-3.5 py-2 text-xs font-bold transition-colors hover:bg-surface-2 ${methodStyles[m].pill}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const tabs = ["Params", "Headers", "Body", "Auth", "Pre-request"];

const paramsData = [
    { key: "limit", value: "10", description: "Number of results", enabled: true },
    { key: "page", value: "1", description: "Page number", enabled: true },
];

const headersData = [
    { key: "Content-Type", value: "application/json", enabled: true },
    { key: "Authorization", value: "Bearer ••••••••", enabled: true },
    { key: "X-Request-ID", value: "req_abc123", enabled: false },
];

function ParamsTab() {
    return <KeyValueTable rows={paramsData} showDescription addLabel="Add param" />;
}

function HeadersTab() {
    return <KeyValueTable rows={headersData} addLabel="Add header" />;
}

function BodyTab() {
    const [bodyType, setBodyType] = useState("raw");
    const types = ["none", "raw", "form-data", "x-www-form-urlencoded"];

    return (
        <div className="px-4 py-3">
            <div className="flex items-center gap-2 mb-3">
                {types.map((t) => (
                    <button
                        key={t}
                        onClick={() => setBodyType(t)}
                        className={`text-[11px] px-3 py-1 rounded-full border transition-colors ${
                            bodyType === t
                                ? "border-secondary text-secondary bg-secondary/10"
                                : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        {t}
                    </button>
                ))}
                {bodyType === "raw" && (
                    <span className="text-[11px] text-muted-foreground ml-2 px-2 py-1 rounded bg-surface-2 border border-border">JSON</span>
                )}
            </div>
            {bodyType === "raw" && (
                <div className="bg-editor-bg rounded-lg border border-border p-4 font-mono text-xs leading-relaxed">
                    <div><span className="text-secondary">{"{"}</span></div>
                    <div className="pl-4">
                        <span style={{ color: "#ff6eb4" }}>"email"</span>
                        <span className="text-foreground/60">: </span>
                        <span style={{ color: "#a8ff78" }}>"sahil@reqfly.dev"</span>
                        <span className="text-foreground/40">,</span>
                    </div>
                    <div className="pl-4">
                        <span style={{ color: "#ff6eb4" }}>"password"</span>
                        <span className="text-foreground/60">: </span>
                        <span style={{ color: "#a8ff78" }}>"••••••••"</span>
                    </div>
                    <div><span className="text-secondary">{"}"}</span></div>
                </div>
            )}
            {bodyType === "none" && (
                <p className="text-xs text-muted-foreground">This request does not have a body.</p>
            )}
            {bodyType === "form-data" && (
                <p className="text-xs text-muted-foreground">Form data editor (mock placeholder)</p>
            )}
            {bodyType === "x-www-form-urlencoded" && (
                <p className="text-xs text-muted-foreground">URL-encoded form editor (mock placeholder)</p>
            )}
        </div>
    );
}

function AuthTab() {
    return (
        <div className="px-4 py-3 space-y-4">
            <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block mb-1.5">Auth Type</label>
                <button className="flex items-center justify-between w-full max-w-xs bg-surface-2 border border-border rounded-md px-3 py-2 text-xs text-foreground">
                    Bearer Token
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </button>
            </div>
            <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block mb-1.5">Token</label>
                <input
                    type="password"
                    readOnly
                    defaultValue="abcdef1234567890"
                    className="w-full max-w-md bg-surface-2 border border-border rounded-md px-3 py-2 text-xs text-foreground focus:outline-none"
                />
                <p className="text-[10px] text-muted-foreground mt-1.5">Token will be added as Authorization header</p>
            </div>
        </div>
    );
}

function PreRequestTab() {
    return (
        <div className="px-4 py-3">
            <div className="bg-editor-bg rounded-lg border border-border p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                <div>// Write pre-request scripts here</div>
                <div>// pm.environment.set('token', 'value')</div>
            </div>
        </div>
    );
}

export default function RequestPanel() {
    const [activeTab, setActiveTab] = useState("Headers");
    const [method, setMethod] = useState<HttpMethod>("GET");

    return (
        <div className="flex flex-col">
            {/* Request bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface-1">
                <MethodDropdown method={method} onChange={setMethod} />
                <div className="flex-1">
                    <input
                        type="text"
                        readOnly
                        placeholder="https://api.example.com/users"
                        className="w-full bg-surface-2 text-foreground text-sm px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-secondary/40 placeholder:text-muted-foreground"
                    />
                </div>
                <button className="gradient-pink glow-pink text-white text-xs font-semibold px-6 py-2 rounded-lg transition-all hover:opacity-90">
                    Send
                </button>
            </div>

            <PanelTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab content */}
            <div className="flex-1 overflow-auto">
                {activeTab === "Params" && <ParamsTab />}
                {activeTab === "Headers" && <HeadersTab />}
                {activeTab === "Body" && <BodyTab />}
                {activeTab === "Auth" && <AuthTab />}
                {activeTab === "Pre-request" && <PreRequestTab />}
            </div>
        </div>
    );
}
