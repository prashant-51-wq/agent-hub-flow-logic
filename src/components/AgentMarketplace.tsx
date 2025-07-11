
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  MessageSquare, 
  Mail, 
  Phone, 
  Calendar,
  ShoppingCart,
  TrendingUp,
  Search,
  Star,
  Zap
} from "lucide-react";

export function AgentMarketplace() {
  const agents = [
    {
      id: 1,
      name: "Customer Support Pro",
      description: "Advanced AI agent for customer service automation with multi-language support",
      category: "Customer Service",
      icon: MessageSquare,
      price: "$49/month",
      rating: 4.8,
      users: 1240,
      features: ["24/7 Support", "Multi-language", "Sentiment Analysis"],
      popular: true
    },
    {
      id: 2,
      name: "Email Marketing Genius",
      description: "Automate email campaigns with AI-powered personalization and A/B testing",
      category: "Marketing",
      icon: Mail,
      price: "$79/month",
      rating: 4.9,
      users: 856,
      features: ["Personalization", "A/B Testing", "Analytics"],
      popular: false
    },
    {
      id: 3,
      name: "Sales Call Assistant",
      description: "AI agent that handles lead qualification and appointment scheduling",
      category: "Sales",
      icon: Phone,
      price: "$99/month",
      rating: 4.7,
      users: 432,
      features: ["Lead Scoring", "CRM Integration", "Call Recording"],
      popular: false
    },
    {
      id: 4,
      name: "Appointment Scheduler",
      description: "Smart scheduling agent that manages calendars and booking workflows",
      category: "Productivity",
      icon: Calendar,
      price: "$39/month",
      rating: 4.6,
      users: 980,
      features: ["Calendar Sync", "Automated Reminders", "Time Zone Detection"],
      popular: false
    },
    {
      id: 5,
      name: "E-commerce Assistant",
      description: "Complete shopping experience automation with order management",
      category: "E-commerce",
      icon: ShoppingCart,
      price: "$129/month",
      rating: 4.8,
      users: 623,
      features: ["Order Processing", "Inventory Management", "Customer Tracking"],
      popular: true
    },
    {
      id: 6,
      name: "Analytics Insights Bot",
      description: "Transform data into actionable insights with automated reporting",
      category: "Analytics",
      icon: TrendingUp,
      price: "$159/month",
      rating: 4.9,
      users: 289,
      features: ["Real-time Reports", "Predictive Analytics", "Custom Dashboards"],
      popular: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Agent Marketplace</h2>
          <p className="text-muted-foreground">Discover and hire AI agents to automate your workflows</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Zap className="mr-2 h-4 w-4" />
          Create Custom Agent
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search agents..." className="pl-10" />
        </div>
        <div className="flex space-x-2">
          <Badge variant="secondary">All Categories</Badge>
          <Badge variant="outline">Customer Service</Badge>
          <Badge variant="outline">Marketing</Badge>
          <Badge variant="outline">Sales</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="relative hover:shadow-lg transition-shadow">
            {agent.popular && (
              <Badge className="absolute -top-2 -right-2 bg-orange-500 hover:bg-orange-600">
                Popular
              </Badge>
            )}
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <agent.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {agent.category}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm">
                {agent.description}
              </CardDescription>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {agent.rating}
                </div>
                <span>{agent.users} users</span>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-sm">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {agent.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-2xl font-bold text-primary">{agent.price}</span>
                </div>
                <Button size="sm">
                  Hire Agent
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
