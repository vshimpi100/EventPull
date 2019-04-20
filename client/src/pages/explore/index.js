import React, { Component } from 'react';
import Sort from '../../components/page-components/explore/Sort-Explore';
import EventCard from '../../components/shared/general/Event-Card';

class Explore extends Component {
    render() {
        return (
            <div className='content'>
                <div className='sort'>
                    <Sort />
                </div>
                <div className='content-body'>
                    <EventCard />
                </div>
            </div>
        )
    }
}

export default Explore;