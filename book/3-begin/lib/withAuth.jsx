import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

let globalUser = null;

export default function withAuth(
    BaseComplonent, 
    { loginRequired= true, logoutRequired = false} = {},
) {
    const propTypes = {
        user: PropTypes.shape({
            id: PropTypes.string, 
            isAdmin; PropTypes.bool,
        }),
        isFromServer: PropTypes.bool.isRequired,
    };
    
    const defaultProps= {user: null,
    };

    class App extends React.Component {
        static async getInitialProps(ctx){
            // 1. getInitialProps
            const isFromServer = typeof window === 'undefined';
            const user = ctx.req ? ctx.req.user && ctx.req.user.toObject(): globalUser;
            
            if (isFromServer && user){
                console.log('before', typeof user._id, user._id);
                user._id = user._id.toString();
                console.log('after', typeof user._id, user._id);
            }
            
            const props = {user, isFromServer};

            if (BaseComponent.getInitialProps){
                Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {})
            }

            return props;

        }


        componentDidMount(){
            // 2. componentDidMount
        }
        
        render(){
            // 3. render

            return (
                <>
                    <BaseComponent {...this.props} />
                </>
            );
        }

    }

    App.propTypes = propTypes;
    App.defaultProps = defaultProps;

    return App;
}