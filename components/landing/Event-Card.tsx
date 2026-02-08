import { Event } from "@/types";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formatDateRange = () => {
    const start = format(new Date(event.date), "MMM d");
    if (event.endDate) {
      const end = format(new Date(event.endDate), "d, yyyy");
      return `${start}-${end}`;
    }
    return format(new Date(event.date), "MMM d, yyyy");
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <Badge
          className={`absolute top-4 right-4 ${
            event.status === "upcoming"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {event.status === "upcoming" ? "Upcoming" : "Past Event"}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formatDateRange()}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {event.description}
        </p>
        <div className="flex gap-3">
          {event.status === "upcoming" && event.ticketUrl && (
            <Button asChild size="sm" variant="hero">
              <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                Get Tickets
              </a>
            </Button>
          )}
          <Button asChild variant="ghost" size="sm">
            <Link href={`/events/${event.id}`}>
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
