import { useState } from "react";
import Header from "./components/Header";
import UsersCount from "./Views/UsersCount";
import SliderImages from "./Views/Slider";

function App() {
  // state on hooks
  const [userNumbers, setUserNumbers] = useState(20);
  

  const buttonClicked = () => {
    console.log("button clicked");
  };

  const buttonWithParams = (params) => {
    console.log("button with params");
    setUserNumbers(params + 10);
  };

  return (
    <div className="p-4">
      {/* use child component with props */}
      <div className="border">
      <Header title="Header Title" headerClass="text-center text-danger" />
      </div>

      {/* event handling */}
      <div className="my-3 border">
      <p>user numbers : {userNumbers}</p>
      <button className="btn btn-primary my-4" onClick={buttonClicked}>
        Button
      </button>
      <div>
      <button
        className="btn btn-outline-primary mx-3"
        onClick={() => buttonWithParams(userNumbers)}
      >
        Button with params
      </button>
      </div>
      </div>

      {/* using view within components  */}
      <div className="border my-3">
      <UsersCount></UsersCount>
      </div>

       {/* using slider component  */}
      <div className="border my-3 w-50">
      <SliderImages />
      </div>
    </div>
  );
}

export default App;
