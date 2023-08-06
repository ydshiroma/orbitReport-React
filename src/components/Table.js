const Table = ({ sat }) => {
  const tableRow = sat.map((data) => (
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{data.operational ? "Active" : "Inactive"}</td>
    </tr>
  ));
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {tableRow}
        </tbody>
      </table>
  );
};

export default Table;