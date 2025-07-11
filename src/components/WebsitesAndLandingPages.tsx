
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Plus, 
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Copy,
  Trash2,
  ExternalLink,
  Smartphone,
  Desktop,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

export function WebsitesAndLandingPages() {
  const websites = [
    {
      id: 1,
      name: "AI Automation Services",
      url: "https://aiautomation.com",
      type: "Main Website",
      status: "Live",
      visitors: "12,458",
      conversions: "3.2%",
      lastUpdated: "2 days ago",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Free AI Consultation",
      url: "https://getconsultation.com",
      type: "Landing Page",
      status: "Live",
      visitors: "8,920",
      conversions: "12.5%",
      lastUpdated: "1 week ago",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Enterprise AI Solutions",
      url: "https://enterprise-ai.com",
      type: "Landing Page",
      status: "Draft",
      visitors: "0",
      conversions: "0%",
      lastUpdated: "3 hours ago",
      thumbnail: "/api/placeholder/400/300"
    }
  ];

  const templates = [
    {
      id: 1,
      name: "SaaS Landing Page",
      category: "Business",
      preview: "/api/placeholder/300/200",
      features: ["Responsive", "Contact Forms", "Pricing Tables"]
    },
    {
      id: 2,
      name: "AI Service Provider",
      category: "Technology",
      preview: "/api/placeholder/300/200",
      features: ["Modern Design", "Service Showcase", "Testimonials"]
    },
    {
      id: 3,
      name: "Lead Generation",
      category: "Marketing",
      preview: "/api/placeholder/300/200",
      features: ["High Converting", "A/B Testing", "Analytics"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Websites & Landing Pages</h2>
          <p className="text-muted-foreground">Create and manage high-converting websites and landing pages</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>

      <Tabs defaultValue="websites" className="space-y-6">
        <TabsList>
          <TabsTrigger value="websites">My Websites</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="builder">Page Builder</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search websites..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((website) => (
              <Card key={website.id} className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Globe className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{website.name}</CardTitle>
                      <CardDescription>{website.url}</CardDescription>
                    </div>
                    <Badge variant={website.status === "Live" ? "default" : "secondary"}>
                      {website.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span>{website.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Visitors:</span>
                      <span className="font-medium">{website.visitors}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Conversion:</span>
                      <span className="font-medium text-green-600">{website.conversions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Updated:</span>
                      <span>{website.lastUpdated}</span>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Desktop className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        Use Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="builder" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Drag & Drop Page Builder</CardTitle>
              <CardDescription>Create professional websites with our intuitive builder</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Desktop className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visual Page Builder</h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop elements to create stunning websites without coding
                </p>
                <Button>Launch Builder</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4:32</div>
                <p className="text-xs text-muted-foreground">+0:45 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                <Smartphone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.1%</div>
                <p className="text-xs text-muted-foreground">-5.2% from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
