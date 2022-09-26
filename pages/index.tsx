import { Footer, Navbar} from '@components/common'
import { Banner, Tournaments, Games, Winners } from '@components/Home'
import Hero from '@components/Home/Hero'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <div className='px-6 '>
        <Hero/>
        <Tournaments />
        <Games />
        <Winners />
        <Banner />
      </div>
      <Footer />

    </div>
  )
}

export default Home
