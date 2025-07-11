
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal,
  Phone,
  Mail,
  Calendar,
  User,
  Building,
  MapPin,
  Star,
  Clock,
  DollarSign,
  TrendingUp
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CRM() {
  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc",
      email: "sarah@techstart.com",
      phone: "+1 (555) 123-4567",
      status: "Hot Lead",
      value: "$25,000",
      source: "Website",
      lastContact: "2 hours ago",
      score: 85,
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      email: "m.chen@digitalsol.com",
      phone: "+1 (555) 987-6543",
      status: "Qualified",
      value: "$18,500",
      source: "LinkedIn",
      lastContact: "1 day ago",
      score: 72,
      location: "New York, NY"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Growth Marketing Pro",
      email: "emily@growthpro.com",
      phone: "+1 (555) 456-7890",
      status: "Follow Up",
      value: "$12,000",
      source: "Referral",
      lastContact: "3 days ago",
      score: 68,
      location: "Austin, TX"
    },
    {
      id: 4,
      name: "David Wilson",
      company: "E-commerce Hub",
      email: "david@ecommhub.com",
      phone: "+1 (555) 321-0987",
      status: "Cold Lead",
      value: "$8,000",
      source: "Google Ads",
      lastContact: "1 week ago",
      score: 45,
      location: "Miami, FL"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot Lead": return "bg-red-100 text-red-800";
      case "Qualified": return "bg-green-100 text-green-800";
      case "Follow Up": return "bg-yellow-100 text-yellow-800";
      case "Cold Lead": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">CRM Dashboard</h2>
          <p className="text-muted-foreground">Manage your leads, contacts, and customer relationships</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {/* CRM Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-green-600">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-green-600">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$485K</div>
            <p className="text-xs text-green-600">+23% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-green-600">+3.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search leads, companies, or emails..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
          <CardDescription>Manage and track your sales pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Building className="h-3 w-3" />
                      {lead.company}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="text-sm font-medium">{lead.email}</div>
                  <div className="text-sm text-muted-foreground">{lead.phone}</div>
                </div>

                <div className="hidden lg:block">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="h-3 w-3" />
                    {lead.location}
                  </div>
                  <div className="text-xs text-muted-foreground">Source: {lead.source}</div>
                </div>

                <div className="text-center">
                  <div className="font-bold text-lg">{lead.value}</div>
                  <div className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                    Score: {lead.score}
                  </div>
                </div>

                <div className="text-center">
                  <Badge className={getStatusColor(lead.status)}>
                    {lead.status}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {lead.lastContact}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                      <DropdownMenuItem>Add Note</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
