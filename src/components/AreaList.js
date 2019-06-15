import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createArea } from '../store/actions/areaActions';

class AreaList extends React.Component {
    render() {
        const { areas } = this.props;
        return (
            <div>
                <h1>Area List yuh boi</h1>
                <ul>
                    {areas && areas.map(area => {
                        return (
                            <li key={area.id}>
                                <Link to={`./areas/${area.id}`}>
                                    {area.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to={`./areas/new`}>
                    Add
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArea: (area) => dispatch(createArea(area))
    }
}

const mapStateToProps = (state) => {
    return {
        areas: state.area.areas
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaList);