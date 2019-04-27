import React, { Component } from 'react';
import EventPanelDesktop from '../../components/desktop/shared/general/Event-Panel';
import dummyData from '../../utils/mock-data.json';

class Saved extends Component {
    state = {
        data: dummyData
    }

    handleView = (width) => {
        if (width <= 1024) {
            return (
                <div>

                </div>

            )
        } else {
            return (
                <section>
                    {this.state.data.map(element => {
                        return (
                            <EventPanelDesktop
                                title={element.title}
                                image={element.image}
                            />
                        )
                    })}
                </section>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleView(this.props.windowWidth)}
            </div>
        );
    }
}

export default Saved;