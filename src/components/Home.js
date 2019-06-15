import React from 'react'
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Landing page</h1>
                <p>Description of what this application does and how it does it</p>
                <Link to="/area-list">
                    <p>Lets go bby</p>
                </Link>
            </div>
        );
    }
}

export default Home;