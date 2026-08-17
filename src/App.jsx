import Navbar from "./components/Navbar/Navbar";
import Additional from "./sections/Additional/Additional";
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
        <Additional />
      </main>
    </>
  );
}

export default App;