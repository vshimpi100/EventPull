import React, { Component } from 'react';
import CreateEvent from '../../general/CreateEvent';
import { Card, Row, Col, Button, Modal } from 'antd';
import './style.css';

class Sidebar extends Component {

    state = {
        visible: false,
    }

    showLogin = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const {visible} = this.state;
        return (
            <section>
                <Card className='sidebar' full style={{ width: "20%", padding: '0' }}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <div className='card-top'></div>
                            </Row>
                            <Row>
                                <h1 className='card-title'>Create Event</h1>
                            </Row>
                            <Row>
                                <p className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique.</p>
                            </Row>
                            <Row style={{ margin: '1rem auto', width: '90%' }}>
                                <Button type='primary' block onClick={this.showLogin}>Create New Event</Button>
                            </Row>
                        </Col>
                    </Row>
                </Card>
                <Modal
                    visible={visible}
                    onCancel={this.handleCancel}
                >
                    <CreateEvent onCancel={this.handleCancel} loadEvents={this.props.loadEvents} user={this.props.user} userID={this.props.userID} />
                </Modal>
            </section>
        )
    }
}

export default Sidebar;