const Currency = () => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-header">
          <td className="table-title">Валюта</td>
          <td className="table-title">Покупка</td>
          <td className="table-title">Продажа</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>USD</td>
          <td>27.55</td>
          <td>27.65</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>30.00</td>
          <td>30.10</td>
        </tr>
        <tr>
          <td>RUB</td>
          <td>00.00</td>
          <td>00.00</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Currency;
