import Banner from "./components/Banner"
import "./App.css"
import HouseList from "./components/HouseList"
import House from "./components/House"
import { use } from "react"
function App() {

  const [selectedHouse, setSelectedHouse] = useState(null);
  return (
    <>
      <Banner headerText="Providing houses all over India !!!" />
      {selectedHouse ? <House house={selectedHouse} /> : <HouseList />}
      
    </>
  )
}

export default App