import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

const scheduleItems = [
  {
    time: "8:00 AM",
    title: "Registration & Breakfast",
    speaker: "",
    type: "break",
    location: "Main Lobby",
  },
  {
    time: "9:00 AM",
    title: "Opening Keynote: The Future of AI in QA",
    speaker: "Sarah Chen",
    type: "keynote",
    location: "Main Hall",
  },
  {
    time: "10:00 AM",
    title: "Test Automation at Scale",
    speaker: "Marcus Johnson",
    type: "talk",
    location: "Room A",
  },
  {
    time: "11:00 AM",
    title: "Building Quality Engineering Teams",
    speaker: "Elena Rodriguez",
    type: "talk",
    location: "Room B",
  },
  {
    time: "12:00 PM",
    title: "Lunch & Networking",
    speaker: "",
    type: "break",
    location: "Dining Area",
  },
  {
    time: "1:30 PM",
    title: "Workshop: AI-Powered Testing Tools",
    speaker: "David Kim",
    type: "workshop",
    location: "Workshop Room",
  },
  {
    time: "3:00 PM",
    title: "Panel: Quality Metrics That Matter",
    speaker: "Multiple Speakers",
    type: "panel",
    location: "Main Hall",
  },
  {
    time: "4:30 PM",
    title: "Closing Remarks & Networking",
    speaker: "",
    type: "break",
    location: "Main Hall",
  },
]

const typeColors: Record<string, string> = {
  keynote: "bg-primary text-primary-foreground",
  talk: "bg-accent text-accent-foreground",
  workshop: "bg-chart-2 text-primary-foreground",
  panel: "bg-chart-3 text-primary-foreground",
  break: "bg-muted text-muted-foreground",
}

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Event Schedule</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            A full day of learning, networking, and inspiration. June 5, 2025.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {scheduleItems.map((item, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-2 text-primary font-semibold min-w-[100px]">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <Badge className={typeColors[item.type]} variant="secondary">
                          {item.type}
                        </Badge>
                      </div>
                      {item.speaker && <p className="text-sm text-muted-foreground">{item.speaker}</p>}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
