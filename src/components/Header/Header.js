import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const Header = (props) => {
    const { title, subtitle } = props;
    return (
        <div className="header">
            <Logo name={title} />
            <h1 className="app-title">{title}</h1>
            <h4 className="app-subtitle">{subtitle}</h4>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default Header;