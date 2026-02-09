import Explorebtn from '@/components/Explorebtn'

const Page = () => {
  return (
    <section>
      <h1 className='text-center mt-10'>The Hub for Every Dev <br/> Event you can`t Miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in One Place</p>
      <Explorebtn />

      <div className='mt-20 space-y-7' style={{ padding: '50px' }}>
        <h3>Featured Events</h3>

        <ul className='events'>
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event}>Event {event}</li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Page