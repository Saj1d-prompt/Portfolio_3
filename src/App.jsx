import Navbar from "./components/Navbar/Navbar";
import Experience from "./sections/Experience/Experience";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";
import Work from "./sections/Work/Work";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <Work />
        <Experience />
      </main>
    </>
  );
}

export default App;