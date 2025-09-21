import { useState, useEffect } from "react";
import HouseRow, { HouseRowMemoized } from "./HouseRow";

// Sample data for houses
const houseArray = [
{ id: 1, address: "123 Main St", country: "USA", price: 250000 },
{ id: 2, address: "456 Maple Ave", country: "Canada", price: 300000 },
{ id: 3, address: "789 Oak Dr", country: "UK", price: 200000 },
];

const HouseList = () => {

const [houses, setHouses] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/house");
    const data = await response.json();
    setHouses(data);
  };
  fetchData();
});

const addHouse = () => {
setHouses([...houses, 
    { id: 4, address: "101 Pine St", country: "Australia", price: 350000 }]);

};

return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(h => <HouseRowMemoized key={h.id} house={h} />)}
        </tbody>
      </table>
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default HouseList;
