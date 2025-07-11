
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Target,
  Eye,
  Users,
  BarChart3,
  Globe,
  Facebook,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Megaphone,
  Mouse,
  Clock
} from "lucide-react";

export function PerformanceDashboard() {
  const overallMetrics = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "From all campaigns"
    },
    {
      title: "Website Traffic",
      value: "158,420",
      change: "+15.2%",
      trend: "up",
      icon: Users,
      description: "Unique visitors"
    },
    {
      title: "Ad Spend",
      value: "$23,710",
      change: "+12.8%",
      trend: "up",
      icon: Megaphone,
      description: "Total ad investment"
    },
    {
      title: "Conversion Rate",
      value: "8.2%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      description: "Overall conversion"
    }
  ];

  const platformPerformance = [
    {
      platform: "Google Ads",
      icon: Globe,
      spend: "$12,450",
      impressions: "145,230",
      clicks: "3,421",
      conversions: "89",
      roas: "3.6x",
      cpa: "$139.89"
    },
    {
      platform: "Facebook Ads",
      icon: Facebook,
      spend: "$8,920",
      impressions: "89,456",
      clicks: "1,892",
      conversions: "45",
      roas: "2.8x",
      cpa: "$198.22"
    },
    {
      platform: "Organic Search",
      icon: Eye,
      spend: "$0",
      impressions: "234,567",
      clicks: "12,345",
      conversions: "156",
      roas: "∞",
      cpa: "$0"
    }
  ];

  const websitePerformance = [
    {
      name: "AI Automation Services",
      visitors: "45,231",
      bounceRate: "32.1%",
      avgSession: "4:32",
      conversions: "234",
      conversionRate: "5.2%"
    },
    {
      name: "Free Consultation Landing",
      visitors: "28,456",
      bounceRate: "28.5%",
      avgSession: "3:45",
      conversions: "356",
      conversionRate: "12.5%"
    },
    {
      name: "Enterprise Solutions",
      visitors: "12,890",
      bounceRate: "45.2%",
      avgSession: "2:18",
      conversions: "89",
      conversionRate: "6.9%"
    }
  ];

  const topPerformingAds = [
    {
      name: "AI Automation for Small Business",
      platform: "Google Ads",
      impressions: "45,230",
      clicks: "1,234",
      ctr: "2.73%",
      conversions: "45",
      conversionRate: "3.65%"
    },
    {
      name: "Free AI Consultation",
      platform: "Facebook Ads",
      impressions: "28,456",
      clicks: "892",
      ctr: "3.13%",
      conversions: "56",
      conversionRate: "6.28%"
    },
    {
      name: "Enterprise AI Solutions",
      platform: "LinkedIn Ads",
      impressions: "12,345",
      clicks: "234",
      ctr: "1.90%",
      conversions: "12",
      conversionRate: "5.13%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Performance Dashboard</h2>
          <p className="text-muted-foreground">Comprehensive analytics across all marketing channels</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline">
            Export Report
          </Button>
        </div>
      </div>

      {/* Overall Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallMetrics.map((metric) => (
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

      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList>
          <TabsTrigger value="platforms">Platform Performance</TabsTrigger>
          <TabsTrigger value="websites">Website Analytics</TabsTrigger>
          <TabsTrigger value="ads">Top Performing Ads</TabsTrigger>
          <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Advertising Platform Performance</CardTitle>
                <CardDescription>Compare performance across different advertising platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformPerformance.map((platform) => (
                    <div key={platform.platform} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <platform.icon className="h-8 w-8" />
                        <div>
                          <div className="font-medium">{platform.platform}</div>
                          <div className="text-sm text-muted-foreground">
                            {platform.impressions} impressions • {platform.clicks} clicks
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-8 text-right">
                        <div>
                          <div className="font-bold">{platform.spend}</div>
                          <div className="text-xs text-muted-foreground">Spend</div>
                        </div>
                        <div>
                          <div className="font-bold">{platform.conversions}</div>
                          <div className="text-xs text-muted-foreground">Conversions</div>
                        </div>
                        <div>
                          <div className="font-bold text-green-600">{platform.roas}</div>
                          <div className="text-xs text-muted-foreground">ROAS</div>
                        </div>
                        <div>
                          <div className="font-bold">{platform.cpa}</div>
                          <div className="text-xs text-muted-foreground">CPA</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="websites" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Performance</CardTitle>
              <CardDescription>Traffic and conversion metrics for your websites</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {websitePerformance.map((website) => (
                  <div key={website.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{website.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {website.visitors} visitors
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-8 text-right">
                      <div>
                        <div className="font-bold">{website.bounceRate}</div>
                        <div className="text-xs text-muted-foreground">Bounce Rate</div>
                      </div>
                      <div>
                        <div className="font-bold">{website.avgSession}</div>
                        <div className="text-xs text-muted-foreground">Avg Session</div>
                      </div>
                      <div>
                        <div className="font-bold">{website.conversions}</div>
                        <div className="text-xs text-muted-foreground">Conversions</div>
                      </div>
                      <div>
                        <div className="font-bold text-green-600">{website.conversionRate}</div>
                        <div className="text-xs text-muted-foreground">Conv Rate</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ads" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Ads</CardTitle>
              <CardDescription>Your best performing advertisements across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformingAds.map((ad, index) => (
                  <div key={ad.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">#{index + 1}</Badge>
                      <div>
                        <div className="font-medium">{ad.name}</div>
                        <div className="text-sm text-muted-foreground">{ad.platform}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-8 text-right">
                      <div>
                        <div className="font-bold">{ad.impressions}</div>
                        <div className="text-xs text-muted-foreground">Impressions</div>
                      </div>
                      <div>
                        <div className="font-bold">{ad.clicks}</div>
                        <div className="text-xs text-muted-foreground">Clicks</div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-600">{ad.ctr}</div>
                        <div className="text-xs text-muted-foreground">CTR</div>
                      </div>
                      <div>
                        <div className="font-bold text-green-600">{ad.conversionRate}</div>
                        <div className="text-xs text-muted-foreground">Conv Rate</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roi" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ROI by Channel</CardTitle>
                <CardDescription>Return on investment across marketing channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Google Ads</span>
                    <span className="font-bold text-green-600">360% ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Facebook Ads</span>
                    <span className="font-bold text-green-600">280% ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Organic Search</span>
                    <span className="font-bold text-green-600">∞ ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Marketing</span>
                    <span className="font-bold text-green-600">420% ROI</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis</CardTitle>
                <CardDescription>Breakdown of marketing spend</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Spend</span>
                    <span className="font-bold">$23,710</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Revenue Generated</span>
                    <span className="font-bold text-green-600">$87,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Net Profit</span>
                    <span className="font-bold text-green-600">$63,740</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Overall ROAS</span>
                    <span className="font-bold text-green-600">3.69x</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
