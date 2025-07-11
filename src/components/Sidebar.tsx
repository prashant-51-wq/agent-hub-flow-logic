
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Workflow, 
  BarChart3, 
  Users, 
  CreditCard,
  Settings,
  Store,
  Zap,
  Contact,
  Calendar,
  MessageSquare,
  Phone,
  Globe,
  TrendingUp,
  Megaphone
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: "marketplace", label: "Agent Marketplace", icon: Store },
    { id: "workflows", label: "My Workflows", icon: Workflow },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "crm", label: "CRM", icon: Contact },
    { id: "conversations", label: "Conversations", icon: MessageSquare },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "websites", label: "Websites & Landing Pages", icon: Globe },
    { id: "advertising", label: "Ad Campaigns", icon: Megaphone },
    { id: "performance", label: "Performance Dashboard", icon: TrendingUp },
    { id: "agents", label: "My Agents", icon: Bot },
    { id: "clients", label: "Sub Accounts", icon: Users },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "automations", label: "Automations", icon: Zap },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 border-r bg-card h-[calc(100vh-81px)]">
      <div className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                activeSection === item.id && "bg-muted text-primary font-medium"
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
              {item.id === "clients" && (
                <Badge variant="secondary" className="ml-auto">
                  12
                </Badge>
              )}
              {item.id === "conversations" && (
                <Badge variant="destructive" className="ml-auto">
                  5
                </Badge>
              )}
              {item.id === "advertising" && (
                <Badge variant="default" className="ml-auto">
                  3
                </Badge>
              )}
            </Button>
          ))}
        </div>

        <div className="mt-8 p-4 border rounded-lg bg-muted/50">
          <h4 className="font-medium text-sm mb-2">Quick Stats</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Active Agents</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span>Workflows</span>
              <span className="font-medium">156</span>
            </div>
            <div className="flex justify-between">
              <span>Leads</span>
              <span className="font-medium">1,247</span>
            </div>
            <div className="flex justify-between">
              <span>Sub Accounts</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Active Campaigns</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span>Websites</span>
              <span className="font-medium">15</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
