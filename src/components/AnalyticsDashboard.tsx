
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign,
  Bot,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export function AnalyticsDashboard() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "From last month"
    },
    {
      title: "Active Sub Accounts",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Users,
      description: "New this month"
    },
    {
      title: "Deployed Agents",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: Bot,
      description: "Across all accounts"
    },
    {
      title: "Workflow Executions",
      value: "8,429",
      change: "-3.2%",
      trend: "down",
      icon: Activity,
      description: "This week"
    }
  ];

  const accountPerformance = [
    {
      name: "Acme Corp",
      type: "Main Account",
      revenue: "$18,450",
      agents: 24,
      workflows: 45,
      growth: "+15%"
    },
    {
      name: "TechStart Inc",
      type: "Sub Account",
      revenue: "$8,920",
      agents: 12,
      workflows: 23,
      growth: "+28%"
    },
    {
      name: "Marketing Pro",
      type: "Sub Account",
      revenue: "$6,780",
      agents: 8,
      workflows: 18,
      growth: "+8%"
    },
    {
      name: "Sales Boost",
      type: "Sub Account",
      revenue: "$4,560",
      agents: 6,
      workflows: 12,
      growth: "+35%"
    },
    {
      name: "Support Hub",
      type: "Sub Account",
      revenue: "$3,890",
      agents: 5,
      workflows: 9,
      growth: "+12%"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Monitor performance across all accounts and workflows</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-600" />
                )}
                <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {metric.change}
                </span>
                <span>{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Performance</CardTitle>
            <CardDescription>Revenue and activity by account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accountPerformance.map((account) => (
                <div key={account.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">{account.name}</div>
                    <div className="text-sm text-muted-foreground">{account.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{account.revenue}</div>
                    <div className="text-sm text-muted-foreground">
                      {account.agents} agents • {account.workflows} workflows
                    </div>
                  </div>
                  <Badge variant={account.growth.startsWith('+') ? "default" : "secondary"}>
                    {account.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Agents</CardTitle>
            <CardDescription>Most successful AI agents this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Customer Support Pro", executions: 2450, success: 98 },
                { name: "Email Marketing Genius", executions: 1890, success: 94 },
                { name: "Sales Call Assistant", executions: 1560, success: 91 },
                { name: "Appointment Scheduler", executions: 1340, success: 99 },
                { name: "E-commerce Assistant", executions: 980, success: 87 }
              ].map((agent) => (
                <div key={agent.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {agent.executions.toLocaleString()} executions
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{agent.success}%</div>
                    <div className="text-xs text-muted-foreground">Success rate</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest workflow executions and agent activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "2 minutes ago", action: "Customer Support Pro processed 5 tickets", status: "success" },
              { time: "8 minutes ago", action: "New sub-account 'Digital Agency' created", status: "info" },
              { time: "15 minutes ago", action: "Email Marketing Genius sent 120 personalized emails", status: "success" },
              { time: "23 minutes ago", action: "Sales Call Assistant qualified 3 new leads", status: "success" },
              { time: "45 minutes ago", action: "Workflow 'Order Processing' encountered an error", status: "error" },
              { time: "1 hour ago", action: "Appointment Scheduler booked 8 meetings", status: "success" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <div className="text-sm font-medium">{activity.action}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
