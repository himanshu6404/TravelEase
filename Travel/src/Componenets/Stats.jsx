const stats = [
  { id: 1, name: 'Bookings every 24 hours', value: '1 Million+' },
  { id: 2, name: 'Verified Customers', value: '100 Million+' },
  { id: 3, name: 'New Users Annually', value: '1 Million+' },
];

export default function Example() {
  return (
    <section id="about">
    <div className="bg-[#161b22] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        {/* Heading Section */}
        <h2 className="text-lg font-semibold leading-8 text-cyan-400">Our Achievements</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted by millions around the globe
        </p>
        <p className="mt-4 text-lg leading-6 text-gray-400">
          We’re proud of the journey so far. Here's a glimpse of what we’ve achieved together.
        </p>

        {/* Stats Section */}
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center space-y-2">
              <dd className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
            </div>
          ))}
        </dl>

      </div>
      </div>
      </section>
  )
}
