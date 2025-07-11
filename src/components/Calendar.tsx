
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon,
  Plus,
  Clock,
  Users,
  Video,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export function Calendar() {
  const appointments = [
    {
      id: 1,
      title: "Sales Demo - TechStart Inc",
      client: "Sarah Johnson",
      time: "10:00 AM - 11:00 AM",
      date: "Today",
      type: "Video Call",
      status: "Confirmed",
      description: "Product demonstration and Q&A session"
    },
    {
      id: 2,
      title: "Follow-up Call",
      client: "Michael Chen",
      time: "2:30 PM - 3:00 PM",
      date: "Today",
      type: "Phone Call",
      status: "Confirmed",
      description: "Discuss proposal and next steps"
    },
    {
      id: 3,
      title: "Client Onboarding",
      client: "Emily Rodriguez",
      time: "9:00 AM - 10:30 AM",
      date: "Tomorrow",
      type: "In Person",
      status: "Pending",
      description: "Setup and training session"
    },
    {
      id: 4,
      title: "Strategy Session",
      client: "David Wilson",
      time: "3:00 PM - 4:00 PM",
      date: "Tomorrow",
      type: "Video Call",
      status: "Confirmed",
      description: "Review automation strategy"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video Call": return <Video className="h-4 w-4" />;
      case "Phone Call": return <Phone className="h-4 w-4" />;
      case "In Person": return <MapPin className="h-4 w-4" />;
      default: return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Calendar</h2>
          <p className="text-muted-foreground">Manage appointments and schedule meetings</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>

      {/* Calendar Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Meetings</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">2 more than yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-green-600">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Show Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-green-600">+5% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42min</div>
            <p className="text-xs text-muted-foreground">Standard meetings</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mini Calendar */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>December 2024</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 font-medium text-muted-foreground">{day}</div>
              ))}
              {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                <div key={day} className={`p-2 hover:bg-muted rounded cursor-pointer ${day === 11 ? 'bg-primary text-primary-foreground' : ''} ${[12, 15, 18, 22].includes(day) ? 'bg-blue-100 text-blue-800' : ''}`}>
                  {day}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Next few scheduled meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {getTypeIcon(appointment.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{appointment.title}</div>
                    <div className="text-sm text-muted-foreground">{appointment.client}</div>
                    <div className="text-sm text-muted-foreground truncate">{appointment.description}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {appointment.time}
                      </Badge>
                      <Badge className={getStatusColor(appointment.status)} variant="secondary">
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {appointment.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
