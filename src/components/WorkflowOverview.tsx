
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Settings, 
  MoreHorizontal,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus
} from "lucide-react";

export function WorkflowOverview() {
  const workflows = [
    {
      id: 1,
      name: "Customer Onboarding Flow",
      description: "Automated customer welcome sequence with document collection",
      status: "active",
      agent: "Customer Support Pro",
      lastRun: "2 hours ago",
      successRate: 98,
      totalRuns: 1247
    },
    {
      id: 2,
      name: "Lead Qualification Pipeline",
      description: "Score and route leads based on behavior and demographics",
      status: "active",
      agent: "Sales Call Assistant",
      lastRun: "5 minutes ago",
      successRate: 94,
      totalRuns: 856
    },
    {
      id: 3,
      name: "Email Campaign Automation",
      description: "Personalized email sequences with A/B testing",
      status: "paused",
      agent: "Email Marketing Genius",
      lastRun: "1 day ago",
      successRate: 87,
      totalRuns: 432
    },
    {
      id: 4,
      name: "Appointment Booking System",
      description: "Smart calendar management with conflict resolution",
      status: "active",
      agent: "Appointment Scheduler",
      lastRun: "30 minutes ago",
      successRate: 99,
      totalRuns: 2341
    },
    {
      id: 5,
      name: "Order Processing Workflow",
      description: "End-to-end order management from cart to delivery",
      status: "error",
      agent: "E-commerce Assistant",
      lastRun: "1 hour ago",
      successRate: 92,
      totalRuns: 1876
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "paused":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "paused":
        return <Pause className="h-4 w-4 text-yellow-600" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">My Workflows</h2>
          <p className="text-muted-foreground">Manage and monitor your automated workflows</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Workflow
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,752</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Average across all workflows</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {workflows.map((workflow) => (
          <Card key={workflow.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(workflow.status)}`} />
                    {getStatusIcon(workflow.status)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{workflow.name}</h3>
                    <p className="text-sm text-muted-foreground">{workflow.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {workflow.agent}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Last run: {workflow.lastRun}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="text-sm font-medium">{workflow.successRate}%</div>
                    <div className="text-xs text-muted-foreground">Success rate</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{workflow.totalRuns.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Total runs</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      {workflow.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
