export interface Event {
  image: string;
  title: string;
  slug: string;
  location: string;
  data: string;
  time: string;
}

export const events: Event[] = [
  {
    image: '/images/event1.png',
    title: 'Apple WWDC 2025',
    slug: 'apple-wwdc-2025',
    location: 'San Jose, California, USA',
    data: 'June 9–13, 2025',
    time: '10:00 AM PST',
  },
  {
    image: '/images/event2.png',
    title: 'Google I/O 2025',
    slug: 'google-io-2025',
    location: 'Mountain View, California, USA',
    data: 'May 14–15, 2025',
    time: '9:00 AM PST',
  },
  {
    image: '/images/event3.png',
    title: 'Microsoft Build 2025',
    slug: 'microsoft-build-2025',
    location: 'Seattle, Washington, USA',
    data: 'May 6–8, 2025',
    time: '10:00 AM PST',
  },
  {
    image: '/images/event4.png',
    title: 'NVIDIA GTC 2025',
    slug: 'nvidia-gtc-2025',
    location: 'San Jose, California, USA',
    data: 'March 17–20, 2025',
    time: '9:00 AM PST',
  },
  {
    image: '/images/event5.png',
    title: 'Web Summit Lisbon 2025',
    slug: 'web-summit-lisbon-2025',
    location: 'Lisboa, Portugal',
    data: 'November 10–13, 2025',
    time: '8:00 AM GMT',
  },
  {
    image: '/images/event6.png',
    title: 'CES 2026',
    slug: 'ces-2026',
    location: 'Las Vegas, Nevada, USA',
    data: 'January 6–9, 2026',
    time: '9:00 AM PST',
  }
];