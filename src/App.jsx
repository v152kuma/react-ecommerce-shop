import Banner from "./components/Banner"
import "./App.css"
import HouseList from "./components/HouseList"

function App() {
  return (
    <>
      <Banner headerText="Providing houses all over India !!!" />
      <HouseList />
    </>
  )
}

export default App