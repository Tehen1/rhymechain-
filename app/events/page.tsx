import { db } from "@/lib/db"
import { events } from "@/lib/schema"
import { Calendar, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"

export default async function EventsPage() {
  const allEvents = await db.select().from(events).orderBy(events.eventDate)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold mb-8">
        <span className="neon-text">Upcoming Events</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allEvents.map((event) => (
          <div key={event.id} className="neon-card rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-900 to-pink-800 relative">
              {event.imageUrl ? (
                <img
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-white/20" />
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2">{event.name}</h3>
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{format(new Date(event.eventDate), "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <Clock className="h-4 w-4 text-primary" />
                <span>{format(new Date(event.eventDate), "h:mm a")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{event.location}</span>
                {event.isVirtual && (
                  <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded">Virtual</span>
                )}
              </div>
              {event.description && <p className="text-gray-300 mb-4">{event.description}</p>}
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-all duration-300 w-full">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
