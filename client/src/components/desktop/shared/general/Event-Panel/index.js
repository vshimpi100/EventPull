import React, { Component } from 'react';
import { Card, Icon, Comment, Tooltip } from 'antd';
import moment from 'moment';
import './style.css';

const { Meta } = Card;

class EventPanel extends Component {
    
    render() {
        console.log(this.props);
        return (
            <Card
                className='event-panel inline'
                style={{ width: '22vw' }}
                cover={<img className='event-card-img' alt="example" src={this.props.image} />}
                extra={<Icon type="close" id="delete-button" />}
                actions={[<a href=''>Tickets</a>, <a href=''>Directions</a>, <a href=''>Calender</a>, <a href=''>Share</a>]}
            >
                <Meta
                    title={this.props.title}
                    className='sub-info'
                />
                <Comment
                    className='event-panel-comment'
                    author={<a href='#'>{this.props.creator}</a>}
                    datetime={(
                        <span>{this.props.date_created}</span>
                    )}
                />
            </Card>
        )
    }
}

export default EventPanel;