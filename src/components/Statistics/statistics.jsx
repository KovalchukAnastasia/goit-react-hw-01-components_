import PropTypes from 'prop-types';
import ItemStat from './item';
import { Section, List } from "./statistics.styled"

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ItemStat
            key={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired

};

export default Statistics;

