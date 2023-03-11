import { RiLineChartLine } from 'react-icons/ri';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
      <Sidebar />
      <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8'>
        <Header />
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8'>
          {/* Card 1 */}
          <div className='bg-primary-100/90 p-8 rounded-xl text-gray-300 flex flex-col gap-4'>
            <RiLineChartLine className='text-5xl' />
            <h4 className='text-2xl'>Earnings</h4>
            <span className='text-5xl text-white'>&euro; 8.350</span>
            <span className='py-1 px-3 bg-primary-300/80 rounded-full'>
              + 10% since last month
            </span>
          </div>
          {/* Card 2 */}
          <div className='p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl'>
            <div className='flex items-center gap-4 bg-primary-100/10 rounded-xl p-4'>
              <span className='bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl'>
                98
              </span>
              <div>
                <h3 className='font-bold'>Rank</h3>
                <p className='text-gray-500'>In top 30%</p>
              </div>
            </div>
            <div className='bg-primary-100/10 rounded-xl p-4'>
              <div className='flex items-center gap-4 mb-4'>
                <span className='bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl'>
                  32
                </span>
                <div>
                  <h3 className='font-bold'>Projects</h3>
                  <p className='text-gray-500'>8 this month</p>
                </div>
              </div>
              <div className='flex items-center gap-2 text-gray-500 text-sm'>
                <span className='bg-primary-100/20 py-1 px-4 rounded-full'>
                  Mobile app
                </span>
                <span className='bg-primary-100/20 py-1 px-4 rounded-full'>
                  Branding
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className='col-span-1 md:col-span-2 flex flex-col justify-between'>
            <h1 className='text-2xl font-bold mb-8'>Your projects</h1>
            <div className='bg-white p-8 rounded-xl shadow-2xl'>
              <div className='flex items-center gap-4 mb-8'>
                <img
                  src='https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg'
                  alt='User'
                  className='w-14 h-14 object-cover rounded-full'
                />
                <div>
                  <h3 className='font-bold'>Logo design for Bakery</h3>
                  <p className='text-gray-500'>1 day remaining</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img
                  src='https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg'
                  alt='User'
                  className='w-14 h-14 object-cover rounded-full'
                />
                <div>
                  <h3 className='font-bold'>Logo design for Bakery</h3>
                  <p className='text-gray-500'>1 day remaining</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
