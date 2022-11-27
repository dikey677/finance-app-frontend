import Table from "./Table";

const Chart = () => {
  return (
    <>
      <div className="chart">
        <p className="chart__title">Ваш баланс</p>
        <span className="chart__balance">₴ 24 000.00</span>
      </div>

      <div className="table">
        <Table />
      </div>
    </>
  );
};

export default Chart;
