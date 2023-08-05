import Table from "react-bootstrap/Table";

const TableStat = () => {
  return (
    <Table className="tableStat">
      <thead>
        <tr>
          <th>Категория</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableStat;
