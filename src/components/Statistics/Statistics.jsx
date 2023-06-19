import './Statistics.css';
import propTypes from 'prop-types';
// ? // Компонент статистики користувача ;
export const Statistics = ({ title = '', stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="statistics__title">{title}</h2>}
      <ul className="statistics__stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id} className="stat-list__item">
              <span className="stat-item__label">{stat.label}: </span>
              <span className="stat-item__percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.array.isRequired,
};
