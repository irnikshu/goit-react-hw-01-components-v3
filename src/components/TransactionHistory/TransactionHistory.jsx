import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';
import Transactions from './Transactions/Transaction';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(item => (
    <Transactions
      type={item.type}
      amount={item.amount}
      currency={item.currency}
      key={item.id}
    />
  ));
  return (
    <div className={styles.containerTable}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>{elements}</tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
