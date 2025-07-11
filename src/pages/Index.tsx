
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { AgentMarketplace } from "@/components/AgentMarketplace";
import { WorkflowOverview } from "@/components/WorkflowOverview";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("marketplace");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "marketplace":
        return <AgentMarketplace />;
      case "workflows":
        return <WorkflowOverview />;
      case "analytics":
        return <AnalyticsDashboard />;
      default:
        return <AgentMarketplace />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default Index;
