import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Profile />
      </main>
    </>
  );
}

export default App;