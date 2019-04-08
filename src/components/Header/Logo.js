import React from 'react';
import PropTypes from 'prop-types';

import AppLogo from '../../img/logo_new.png';

const Logo = (props) => {
    const { name } = props;
    return (
        <div className="logo">
            <div className="logo-inner">
                <img src={AppLogo} alt={name} />
            </div>
        </div>
    );
}

Logo.propTypes = {
    name: PropTypes.string
}

export default Logo;