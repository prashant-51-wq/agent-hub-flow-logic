
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Send,
  Search,
  Filter,
  MoreVertical,
  Star,
  Archive,
  Reply,
  Forward,
  Trash2
} from "lucide-react";

export function Conversations() {
  const conversations = [
    {
      id: 1,
      contact: "John Smith",
      email: "john@example.com",
      lastMessage: "Thanks for the quick response! When can we schedule a call?",
      timestamp: "2 mins ago",
      unread: 3,
      channel: "email",
      priority: "high",
      tags: ["Hot Lead", "Enterprise"]
    },
    {
      id: 2,
      contact: "Sarah Johnson",
      email: "sarah@company.com",
      lastMessage: "I'm interested in your premium package. Can you send more details?",
      timestamp: "15 mins ago",
      unread: 1,
      channel: "chat",
      priority: "medium",
      tags: ["Prospect"]
    },
    {
      id: 3,
      contact: "Mike Wilson",
      phone: "+1 (555) 123-4567",
      lastMessage: "Left voicemail regarding the proposal discussion",
      timestamp: "1 hour ago",
      unread: 0,
      channel: "phone",
      priority: "low",
      tags: ["Follow-up"]
    }
  ];

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "email": return <Mail className="h-4 w-4" />;
      case "chat": return <MessageSquare className="h-4 w-4" />;
      case "phone": return <Phone className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Conversations</h2>
          <p className="text-muted-foreground">Manage all customer communications in one place</p>
        </div>
        <Button>
          <Send className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1">
          <Input placeholder="Search conversations..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Messages</TabsTrigger>
          <TabsTrigger value="unread">Unread (5)</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="chat">Live Chat</TabsTrigger>
          <TabsTrigger value="phone">Phone</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Conversations</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {conversations.map((conversation) => (
                      <div key={conversation.id} className="p-4 border-b hover:bg-muted/50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {getChannelIcon(conversation.channel)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-sm">{conversation.contact}</p>
                              {conversation.unread > 0 && (
                                <Badge variant="destructive">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {conversation.email || conversation.phone}
                            </p>
                            <p className="text-sm text-muted-foreground truncate mt-1">
                              {conversation.lastMessage}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-muted-foreground">
                                {conversation.timestamp}
                              </span>
                              <div className="flex space-x-1">
                                {conversation.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>John Smith</CardTitle>
                      <CardDescription>john@example.com</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                        J
                      </div>
                      <div className="flex-1 bg-muted p-3 rounded-lg">
                        <p className="text-sm">Hi! I'm interested in learning more about your AI automation services. Can you tell me about your pricing?</p>
                        <p className="text-xs text-muted-foreground mt-1">Yesterday, 2:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 justify-end">
                      <div className="flex-1 bg-primary text-primary-foreground p-3 rounded-lg max-w-md">
                        <p className="text-sm">Hello John! Thanks for your interest. I'd be happy to discuss our AI automation services with you. We offer several packages starting from $299/month.</p>
                        <p className="text-xs opacity-80 mt-1">Yesterday, 3:15 PM</p>
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                        Y
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                        J
                      </div>
                      <div className="flex-1 bg-muted p-3 rounded-lg">
                        <p className="text-sm">Thanks for the quick response! When can we schedule a call?</p>
                        <p className="text-xs text-muted-foreground mt-1">2 mins ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Type your message here..." 
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Reply className="h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          <Forward className="h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
