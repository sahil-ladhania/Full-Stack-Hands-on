import ReqflySidebar from "@/components/ReqflySidebar";
import RequestPanel from "@/components/RequestPanel";
import ResponsePanel from "@/components/ResponsePanel";

export default function Index() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <ReqflySidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <RequestPanel />
        <ResponsePanel />
      </main>
    </div>
  );
};