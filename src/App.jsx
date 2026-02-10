import "./App.css";
import Header from "./Commponets/header/header";

import BodyOfStudents from "./Commponets/Body/BodyOfStudents";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#0b0b14] text-white">
        <Header />

        <BodyOfStudents />
      </div>
    </>
  );
}

export default App;
