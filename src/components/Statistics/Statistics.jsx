import propTypes from 'prop-types';
import css from './Statistics.module.css';
// ? // Компонент статистики користувача ;
export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css['statistics']}>
      {title && (
        <h2 className={css['statistics__title']}>{title}</h2>
      )}
      <ul className={css['statistics__stat-list']}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css['stat-list__item']}>
              <span className={css['stat-item__label']}>{stat.label}:</span>
              <span className={css['stat-item__percentage']}>
                {stat.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};
