import { useState } from "react";
import "./App.css";
import AccountModal from "./components/AccountModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => setShowModal(!showModal)}
        className="py-4 mx-auto text-center  px-10 rounded-md bg-green-500 text-white text-2xl font-semibold"
      >
        Modal
      </button>
      {showModal && <AccountModal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
