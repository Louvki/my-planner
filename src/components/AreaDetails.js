import React from 'react'
import { connect } from 'react-redux';
import { createArea } from '../store/actions/areaActions';

class AreaDetails extends React.Component {
    render() {
        const { areas } = this.props;
        console.log(this.props);
        return (
            <div>
                <h1>Deeeee</h1>
                <ul>
                    {areas && areas.map(area => {
                        return (<li key={area.id}>{area.name}</li>)
                    })}
                </ul>
                <button></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AreaDetails);