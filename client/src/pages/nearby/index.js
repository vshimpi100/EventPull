import React, { Component } from "react";
import SortMobile from "../../components/mobile/page-components/nearby/Sort-Nearby";
import SortDesktop from "../../components/desktop/page-components/nearby/Sort-Nearby"
import EventCardMobile from "../../components/mobile/shared/general/Event-Card";
import EventCardDesktop from "../../components/desktop/shared/general/Event-Card";
import windowSize from 'react-window-size';
import dummyData from '../../utils/mock-data.json';

class Nearby extends Component {

  state = {
    data: dummyData
  }

  handleView = (width) => {
    if (width <= 1024) {
      return (
        <div>
          <SortMobile />
          <EventCardMobile />
        </div>

      )
    } else {
      return (
        <div style={{ paddingTop: "117px" }}>
          <SortDesktop />
          {this.state.data.map(element => {
            return (
              <section>
                <EventCardDesktop
                  title={element.title}
                  image={element.image}
                />
              </section>
            )
          })}

        </div>
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

export default windowSize(Nearby);
