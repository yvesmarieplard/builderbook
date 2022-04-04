import React from 'react';
import PropTypes, { object } from 'prop-types';
import Link from 'next/link';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';


const propTypes = {
    src: propTypes.string.isRequired, 
    alt: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(object).isRequired,
};

class MenuWithAvatar extends React.Component {
    constructor(){
        super();

        this.state = {
            anchorEl: undefined,
        };
    }

    handleClick: (event)=> {
        this.setState({ anchorEl: event.currentTarget });

    }

    handleClose: () => {
        this.setState ({ anchorEl: Null });
    }

    


}