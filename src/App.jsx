import {} from "react";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Subscriptions from "./Pages/Subscriptions";
import Create from "./Pages/Create";
import Video from "./Pages/Video";
import Record from "./Pages/Record";
import Song from "./Pages/Song";
import Peer from "./Pages/Peer";
import MusicDistribute from "./Pages/MusicDistribute";
import Mastering from "./Pages/Mastering";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Promote from "./Pages/Promote";
import Opportunity from "./Pages/Opportunity";
import Review from "./Pages/Review";
import Fan from "./Pages/Fan";
import Career from "./Pages/Career";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Help from "./Pages/Help";
import Right from "./Pages/Right";
import More from "./Pages/More";
import Vision from "./Pages/Vision";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // This makes it instant instead of smooth
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/service" element={<Services />} />
            <Route path="/subscription" element={<Subscriptions />} />
            <Route path="/create" element={<Create />} />
            <Route path="/video" element={<Video />} />
            <Route path="/record" element={<Record />} />
            <Route path="/song" element={<Song />} />
            <Route path="/peer" element={<Peer />} />
            <Route path="/music" element={<MusicDistribute />} />
            <Route path="/mastering" element={<Mastering />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/review" element={<Review/>} />
            <Route path="/fan-reach" element={<Fan/>} />
            <Route path="/career" element={<Career/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/right" element={<Right/>} />
            <Route path="/more" element={<More/>} />
            <Route path="/vision" element={<Vision/>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
