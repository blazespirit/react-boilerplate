import React     from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({title}) => {
    return (
        <div>{title}</div>
    )
}

AppHeader.propTypes = {
    title: PropTypes.string
}

export default AppHeader;