import BookEvent from "@/components/BookEvent";
import Image from "next/image";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const EventDatailItem = ({icon , alt, label}:{icon:string, alt:string, label:string}) => {
  return(
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17}/>
    <p>{label}</p>
  </div>
)}

const EventAgenda = ({agendaItems}:{agendaItems:string[]}) => {
  return (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul>
  </div>
)}

const EventTags = ({tags}:{tags:string[]}) => {
  return(
    <div className="flex flex-row gap-1.5 flex-wrap">
      {tags.map((tag)=>(
        <div className="pill" key={tag}>{tag}</div>
      )
      )}
    </div>
  )
}

const bookinks:number = 10;

const EventDetailsPage = async ({params}:{params: Promise<{slug: string}>}) => {
  const { slug } = await params;
  const request = await fetch(`${BASE_URL}/api/events/${slug}`)
  const { event } = await request.json();

  if (!event) return notFound();

  return (
    <section id="event">
      <div className="header">
        <h2>Event Description</h2>
        <p>{event.description}</p>
      </div>
      <div className="details">
        {/*left side */}
        <div className="content">
          <Image src={event.image} alt="Event Banner" width={800} height={800} className="banner"></Image>

          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{event.overview}</p>
          </section>

          <section className="flex-col-gap-2">
            <h2>Event Details</h2>
            <EventDatailItem icon="/icons/calendar.svg" alt="calendar" label={event.date}/>
            <EventDatailItem icon="/icons/clock.svg" alt="time" label={event.time}/>
            <EventDatailItem icon="/icons/pin.svg" alt="location" label={event.location}/>
            <EventDatailItem icon="/icons/mode.svg" alt="mode" label={event.mode}/>
            <EventDatailItem icon="/icons/audience.svg" alt="audience" label={event.audience}/>
          </section>

          <EventAgenda agendaItems={JSON.parse(event.agenda[0])}/>

          <section>
            <div className="flex-col-gap-2">
              <h2>About the Organizer</h2>
              <p>{event.organizer}</p>
            </div>
          </section>

          <section>
            <EventTags tags={JSON.parse(event.tags[0])}/>
          </section>

        </div>
        {/*rigth side */}
        <aside className="booking">
          <div className="signup-card">
            <h3>Book Your Spot</h3>
            {bookinks > 0 ? (
              <p className="text-sm">
                Join {bookinks} people who have already booked their spot
              </p>
              ):(
                <p className="text-sm">Be the firt to book your sport!</p>
              )}
            
            <BookEvent/>
          </div>
        </aside>
      </div>

    </section>
  )
}

export default EventDetailsPage