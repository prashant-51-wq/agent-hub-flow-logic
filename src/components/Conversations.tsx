
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MessageSquare,
  Phone,
  Video,
  Mail,
  Clock,
  User,
  Bot,
  Star,
  Archive,
  MoreHorizontal
} from "lucide-react";

export function Conversations() {
  const conversations = [
    {
      id: 1,
      contact: "Sarah Johnson",
      company: "TechStart Inc",
      lastMessage: "Thanks for the demo! When can we schedule the next call?",
      timestamp: "5 min ago",
      unread: 2,
      channel: "Email",
      priority: "High",
      agent: "AI Sales Assistant"
    },
    {
      id: 2,
      contact: "Michael Chen",
      company: "Digital Solutions",
      lastMessage: "I'm interested in your enterprise package. Can you send me more details?",
      timestamp: "23 min ago",
      unread: 1,
      channel: "WhatsApp",
      priority: "Medium",
      agent: "Customer Support Bot"
    },
    {
      id: 3,
      contact: "Emily Rodriguez",
      company: "Growth Marketing Pro",
      lastMessage: "The proposal looks great! I need to discuss with my team.",
      timestamp: "2 hours ago",
      unread: 0,
      channel: "SMS",
      priority: "High",
      agent: "Human Agent"
    },
    {
      id: 4,
      contact: "David Wilson",
      company: "E-commerce Hub",
      lastMessage: "Can you help me understand your pricing structure?",
      timestamp: "1 day ago",
      unread: 0,
      channel: "Live Chat",
      priority: "Low",
      agent: "AI Support Agent"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Email": return <Mail className="h-4 w-4" />;
      case "WhatsApp": return <MessageSquare className="h-4 w-4" />;
      case "SMS": return <Phone className="h-4 w-4" />;
      case "Live Chat": return <MessageSquare className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Conversations</h2>
          <p className="text-muted-foreground">Manage all customer communications in one place</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </Button>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Conversation
          </Button>
        </div>
      </div>

      {/* Conversation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-green-600">+8 new today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12min</div>
            <p className="text-xs text-green-600">-23% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Handled</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-green-600">+12% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-green-600">+0.3 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search conversations..." className="pl-10" />
        </div>
        <Button variant="outline">All Channels</Button>
        <Button variant="outline">Unread Only</Button>
      </div>

      {/* Conversations List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Conversations</CardTitle>
          <CardDescription>All customer interactions across channels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversations.map((conversation) => (
              <div key={conversation.id} className={`flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer ${conversation.unread > 0 ? 'bg-blue-50 border-blue-200' : ''}`}>
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    {conversation.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{conversation.contact}</div>
                      <div className="text-xs text-muted-foreground">• {conversation.company}</div>
                    </div>
                    <div className="text-sm text-muted-foreground truncate max-w-md">
                      {conversation.lastMessage}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        {getChannelIcon(conversation.channel)}
                        <span className="text-xs">{conversation.channel}</span>
                      </div>
                      <Badge variant="outline" size="sm">
                        {conversation.agent.includes('AI') ? <Bot className="h-3 w-3 mr-1" /> : <User className="h-3 w-3 mr-1" />}
                        {conversation.agent}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge className={getPriorityColor(conversation.priority)} variant="secondary">
                    {conversation.priority}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {conversation.timestamp}
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
