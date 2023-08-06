import satData from "./satData.js";

const Buttons = props => {
  const displaySats = props.displaySats;
  console.log(displaySats);
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  return (
    <div>
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;