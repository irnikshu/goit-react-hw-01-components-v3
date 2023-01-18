import PropTypes from 'prop-types';

import styles from './statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats, id }) => {
  const elements = stats.map(stat => (
    <li
      key={stat.id}
      style={{ backgroundColor: getRandomHexColor() }}
      className={styles.item}
    >
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>{' '}
    </li>
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
