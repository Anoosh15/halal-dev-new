  import React from 'react'
  import Navbar from './components/Navbar/Navbar';
  import Hero from './components/Herosection/Herosection';
  import Blacksection from './components/Blacksection/Blacksection';
  import Statsection from './components/Statsection/Statsection';
  import Investmentsection from './components/Investmentsection/Investment';
  import Advisorysection from './components/Advisorysection/Advisory';
  import Technicalsection from './components/Technicalsection/Technical';
  import FutureofHalal from './components/FutureofHalal/Future';
  import HalalIndustries from './components/HalalIndustries/HalalIndustries';
  import Header from './components/HalalIndustries/Header/Header';
  import NewsCard from './components/NewsCard/NewsCard';
  import Contactsection from './components/Contactsection/Contactsection';
  import Footer from './components/Footersection/Footer';
  const App = () => {
    return (
      <div className='App'>
        <Navbar />
        <Hero />
        {/* <Blacksection /> */}
        <Statsection />
        <Investmentsection />
        <Advisorysection />
        <Technicalsection />
        <FutureofHalal />
        <HalalIndustries />
        <Header />
        <NewsCard />
        <Contactsection />
        <Footer />



      </div>
    )
  }
  
  export default App;