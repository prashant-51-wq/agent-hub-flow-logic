
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Megaphone, 
  Plus, 
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Play,
  Pause,
  TrendingUp,
  DollarSign,
  Target,
  BarChart3,
  Facebook,
  Globe
} from "lucide-react";

export function AdCampaigns() {
  const campaigns = [
    {
      id: 1,
      name: "AI Automation Lead Gen",
      platform: "Google Ads",
      status: "Active",
      budget: "$500/day",
      spent: "$12,450",
      impressions: "145,230",
      clicks: "3,421",
      ctr: "2.35%",
      conversions: "89",
      cpa: "$139.89",
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      name: "Enterprise AI Solutions",
      platform: "Facebook Ads",
      status: "Active",
      budget: "$300/day",
      spent: "$8,920",
      impressions: "89,456",
      clicks: "1,892",
      ctr: "2.11%",
      conversions: "45",
      cpa: "$198.22",
      lastUpdated: "4 hours ago"
    },
    {
      id: 3,
      name: "Free Consultation Offer",
      platform: "LinkedIn Ads",
      status: "Paused",
      budget: "$200/day",
      spent: "$2,340",
      impressions: "23,456",
      clicks: "456",
      ctr: "1.94%",
      conversions: "12",
      cpa: "$195.00",
      lastUpdated: "1 day ago"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Google Ads": return <Globe className="h-4 w-4" />;
      case "Facebook Ads": return <Facebook className="h-4 w-4" />;
      case "LinkedIn Ads": return <Target className="h-4 w-4" />;
      default: return <Megaphone className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Paused": return "bg-yellow-100 text-yellow-800";
      case "Ended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Ad Campaigns</h2>
          <p className="text-muted-foreground">Manage your advertising campaigns across all platforms</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Reports
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$23,710</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">258,142</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,769</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. CPA</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$162.34</div>
            <p className="text-xs text-muted-foreground">-8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList>
          <TabsTrigger value="campaigns">All Campaigns</TabsTrigger>
          <TabsTrigger value="google">Google Ads</TabsTrigger>
          <TabsTrigger value="facebook">Facebook Ads</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn Ads</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search campaigns..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      {getPlatformIcon(campaign.platform)}
                      <div>
                        <CardTitle className="text-lg">{campaign.name}</CardTitle>
                        <CardDescription>{campaign.platform}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {campaign.status === "Active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Budget</div>
                      <div className="font-medium">{campaign.budget}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Spent</div>
                      <div className="font-medium">{campaign.spent}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Impressions</div>
                      <div className="font-medium">{campaign.impressions}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Clicks</div>
                      <div className="font-medium">{campaign.clicks}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">CTR</div>
                      <div className="font-medium text-green-600">{campaign.ctr}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Conversions</div>
                      <div className="font-medium">{campaign.conversions}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">CPA</div>
                      <div className="font-medium">{campaign.cpa}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Updated</div>
                      <div className="font-medium text-xs">{campaign.lastUpdated}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance Analytics</CardTitle>
              <CardDescription>Detailed performance metrics across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Track ROI, attribution, and conversion paths across all your campaigns
                </p>
                <Button>View Analytics Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
