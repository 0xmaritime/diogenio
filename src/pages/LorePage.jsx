import Layout from '../components/layout/Layout';

const timelineEvents = [
  {
    year: '404 BCE',
    title: 'Birth of Diogenes',
    description: 'Born in Sinope, began his journey into philosophy and cynicism.'
  },
  {
    year: '360 BCE',
    title: 'The Barrel Life',
    description: 'Embraced extreme minimalism, made a wine barrel his home.'
  },
  {
    year: '336 BCE',
    title: 'Meeting Alexander',
    description: '"Stand out of my sunlight" - Famous encounter with Alexander the Great.'
  },
  {
    year: '323 BCE',
    title: 'Death of Diogenes',
    description: 'Passed away in Corinth, leaving a legacy of radical philosophy.'
  },
  {
    year: '2025 CE',
    title: 'DioGenio Launch',
    description: 'Ancient wisdom meets web3, bringing cynicism to the blockchain.'
  }
];

export default function LorePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gradient-primary mb-12 text-center">
          The Cynical Timeline
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-hair/30" />

          {/* Events */}
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-8">
                <div className="bg-card-dark p-6 rounded-xl shadow-lg border border-pink-hair/30">
                  <span className="text-text-secondary text-sm">{event.year}</span>
                  <h3 className="text-white text-xl font-bold mt-1 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary">{event.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                <div className="w-4 h-4 bg-pink-hair rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
