import EventCard from '@/components/EventCard'
import Explorebtn from '@/components/Explorebtn'

const events = [
  {image: '/images/event1.png', title:'Event 1'},
  {image: '/images/event2.png', title:'Event 2'}
]

const Page = () => {
  return (
    <section>
      <h1 className='text-center mt-10'>The Hub for Every Dev <br/> Event you can`t Miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in One Place</p>
      <Explorebtn />

      <div className='mt-20 space-y-7' style={{ padding: '50px' }}>
        <h3>Featured Events</h3>

        <ul className='events'>
          {events.map((event) => (
            <li key={event.title}>
            <EventCard{...event} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Page