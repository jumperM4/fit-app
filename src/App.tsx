import { useState } from "react";

import NavBar from "@/scenes/navbar/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <div className="app bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
