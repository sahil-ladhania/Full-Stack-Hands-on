import { Trash2 } from "lucide-react";

interface KeyValueRow {
    key: string;
    value: string;
    description?: string;
    enabled: boolean;
}

interface KeyValueTableProps {
    rows: KeyValueRow[];
    showDescription?: boolean;
    addLabel?: string;
}

export default function KeyValueTable({ rows, showDescription = false, addLabel = "Add row" }: KeyValueTableProps) {
    const colSpan = showDescription ? 5 : 4;

    return (
        <div className="px-4 py-3">
            <table className="w-full">
                <thead>
                    <tr className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        <th className="w-8 py-1" />
                        <th className="text-left py-1 font-medium">Key</th>
                        <th className="text-left py-1 font-medium">Value</th>
                        {showDescription && (
                            <th className="text-left py-1 font-medium">Description</th>
                        )}
                        <th className="w-8 py-1" />
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="group border-b border-border/50 hover:bg-surface-2/50 transition-colors">
                            <td className="py-2 px-1">
                                <input type="checkbox" defaultChecked={row.enabled} className="w-3.5 h-3.5 rounded accent-primary" />
                            </td>
                            <td className="py-2">
                                <span className="text-xs text-foreground/90">{row.key}</span>
                            </td>
                            <td className="py-2">
                                <span className="text-xs text-muted-foreground">{row.value}</span>
                            </td>
                            {showDescription && (
                                <td className="py-2">
                                    <span className="text-xs text-muted-foreground/60">{row.description}</span>
                                </td>
                            )}
                            <td className="py-2 px-1">
                                <button className="text-muted-foreground/40 hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={colSpan} className="py-2">
                            <button className="text-xs text-muted-foreground hover:text-secondary transition-colors">
                                + {addLabel}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
