import propTypes from 'prop-types';
import css from './Transactions.module.css';
// ? // Компонент таблиці транзакцій ;
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history__table']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: propTypes.array.isRequired,
};
