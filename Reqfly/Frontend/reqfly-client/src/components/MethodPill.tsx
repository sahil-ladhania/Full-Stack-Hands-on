type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const methodColors: Record<HttpMethod, string> = {
    GET: "bg-success text-white",
    POST: "bg-method-post text-white",
    PUT: "bg-method-put text-white",
    PATCH: "bg-method-patch text-white",
    DELETE: "bg-destructive text-white",
};

interface MethodPillProps {
    method: HttpMethod;
}

export default function MethodPill({ method }: MethodPillProps) {
    return (
        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${methodColors[method]}`}>
            {method}
        </span>
    );
}
