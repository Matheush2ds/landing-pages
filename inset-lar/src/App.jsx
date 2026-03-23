import { Helmet } from "react-helmet-async";
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audiences from './components/Audiences';
import Technology from './components/Technology';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Differentials from './components/Differentials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <>
      <Helmet>
        <title>Inset Lar | Dedetizadora e Desentupidora em Caldas Novas</title>
        <meta 
          name="description" 
          content="Dedetização e desentupimento com mais de 25 anos de mercado. Tecnologia exclusiva e atendimento 24h em Caldas Novas, Goiânia e região." 
        />
      </Helmet>

      {/* Cabeçalho */}
      <TopBar />
      <Navbar />
      
      {/* Principal */}
      <main>
        <Hero />
        <Audiences />
        <Technology />
        <Services />
        <SocialProof />
        <Differentials />
        <About />
        <ContactForm />
        <Location />
      </main>

      {/* Rodapé e Flutuantes */}
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App;