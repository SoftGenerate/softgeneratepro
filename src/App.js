import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
  <title>softgenerate</title>
  <meta name="description" content="softgenerate provides cutting-edge IT solutions, including web development, mobile apps, e-commerce, and AI-driven platforms. We deliver innovative and high-performance digital solutions to help businesses grow." />
  <meta name="keywords" content="Web Development, Mobile App Development, E-commerce Solutions, AI Development, IT Consulting, Software Solutions, React, SEO Optimization" />
  <meta name="author" content="softgenerate" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="softgenerate | Innovative IT Solutions" />
  <meta property="og:description" content="We specialize in web and mobile app development, AI-driven solutions, and e-commerce platforms to help businesses succeed in the digital world." />
  <meta property="og:image" content="URL_TO_YOUR_LOGO_OR_FEATURED_IMAGE" />
  <meta property="og:url" content="softgenerate.com" />
  <meta name="twitter:title" content="softgenerate | Innovative IT Solutions" />
  <meta name="twitter:description" content="Explore our innovative IT solutions, from web development to AI-powered platforms." />
  <meta name="twitter:image" content="URL_TO_YOUR_LOGO_OR_FEATURED_IMAGE" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

      
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
