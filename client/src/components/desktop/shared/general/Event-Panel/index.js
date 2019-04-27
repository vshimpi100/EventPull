import React, { Component } from 'react';
import { Card, Icon, Comment, Tooltip } from 'antd';
import moment from 'moment';
import './style.css';

const { Meta } = Card;

class EventPanel extends Component {
    render() {
        return (
            <Card
                className='event-panel inline'
                style={{ width: '22vw' }}
                cover={<img className='event-card-img' alt="example" src={this.props.image} />}
                extra={<Icon type="heart" id="save-button" />}
                actions={[<a href=''>Tickets</a>, <a href=''>Directions</a>, <a href=''>Calender</a>, <a href=''>Share</a>]}
            >
                <Meta
                    title={this.props.title}
                    className='sub-info'
                />
                <Comment
                    author={<a href='#'>zlmartin</a>}
                    datetime={(
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    )}
                />
            </Card>
        )
    }
}

export default EventPanel;