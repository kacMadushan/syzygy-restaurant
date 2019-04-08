import React from 'react';
import PropTypes from 'prop-types';

const Columns = (props) => {
    const { col } = props;
    
    return (
        <div className={col}>
            { props.children }
        </div>
    );
}

Columns.propTypes = {
    col: PropTypes.string.isRequired
}

export default Columns;