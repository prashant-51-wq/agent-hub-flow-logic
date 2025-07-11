
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { AgentMarketplace } from "@/components/AgentMarketplace";
import { WorkflowOverview } from "@/components/WorkflowOverview";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { CRM } from "@/components/CRM";
import { Conversations } from "@/components/Conversations";
import { Calendar } from "@/components/Calendar";
import { WebsitesAndLandingPages } from "@/components/WebsitesAndLandingPages";
import { AdCampaigns } from "@/components/AdCampaigns";
import { PerformanceDashboard } from "@/components/PerformanceDashboard";
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
      case "crm":
        return <CRM />;
      case "conversations":
        return <Conversations />;
      case "calendar":
        return <Calendar />;
      case "websites":
        return <WebsitesAndLandingPages />;
      case "advertising":
        return <AdCampaigns />;
      case "performance":
        return <PerformanceDashboard />;
      case "agents":
        return <div className="p-8 text-center text-muted-foreground">My Agents section coming soon...</div>;
      case "clients":
        return <div className="p-8 text-center text-muted-foreground">Sub Accounts section coming soon...</div>;
      case "billing":
        return <div className="p-8 text-center text-muted-foreground">Billing section coming soon...</div>;
      case "automations":
        return <div className="p-8 text-center text-muted-foreground">Automations section coming soon...</div>;
      case "settings":
        return <div className="p-8 text-center text-muted-foreground">Settings section coming soon...</div>;
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
