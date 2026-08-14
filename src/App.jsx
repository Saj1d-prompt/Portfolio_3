import Navbar from "./components/Navbar/Navbar";

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
      </main>
    </>
  );
}

export default App;