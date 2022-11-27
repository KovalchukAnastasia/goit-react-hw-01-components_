import PropTypes from 'prop-types';
import { Item } from "./item.styled"

const ItemStat = ({ label, percentage }) => {
    return (
        <Item>
            <span>{label}</span>
            <span>{percentage}%</span>
        </Item>
    );
};

ItemStat.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default ItemStat;