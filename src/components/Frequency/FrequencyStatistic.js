// Модули
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const FrequencyStatistic = ({ letters, handleSort, handleSortByLetter }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const labels = letters
    .filter((label, id) => id < 5)
    .map(({ symbol }, id) => symbol);
  const data = {
    labels,
    datasets: [
      {
        label: 'Graph for the first 5 rows from the table',
        data: letters.map(({ count }) => count),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <div className="mt-5">
        <h2>Statistic</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" onClick={() => handleSort('id')}>
                #
              </th>
              <th scope="col" onClick={handleSortByLetter}>
                Letter
              </th>
              <th scope="col" onClick={() => handleSort('count')}>
                Count
              </th>
              <th scope="col" onClick={() => handleSort('procent')}>
                Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            {letters.map(({ symbol, count, procent, id }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{symbol}</td>
                <td>{count}</td>
                <td>{procent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Bar className="mt-5" data={data} />
    </>
  );
};

FrequencyStatistic.propTypes = {
  letters: PropTypes.array.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleSortByLetter: PropTypes.func.isRequired,
};

export default FrequencyStatistic;
