import React from "react";
import currencyFormatter from "../utils/currencyFormatter";
const HouseRow = ({house}) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};
const HouseRowMemoized = React.memo(HouseRow);
export default HouseRow;
export { HouseRowMemoized };
