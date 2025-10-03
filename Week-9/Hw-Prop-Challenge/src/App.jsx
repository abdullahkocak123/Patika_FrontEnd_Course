import { useState } from "react";
import UserInfo from "./UserInfo";

function App() {
  // Initial value
  const [user, setUser] = useState({ name: "Ahmet", age: 25 });

  //Update data when button clicked
  const handleUpdate = () => {
    setUser({ name: "Mehmet", age: 30 });
  };

  return (
    <div>
      <UserInfo name={user.name} age={user.age} />
      <button onClick={handleUpdate}>Bilgileri Güncelle</button>
    </div>
  );
}

export default App;
