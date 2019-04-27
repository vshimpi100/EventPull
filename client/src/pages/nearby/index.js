import React, { Component } from "react";
import SortMobile from "../../components/mobile/page-components/nearby/Sort-Nearby";
import SortDesktop from "../../components/desktop/page-components/nearby/Sort-Nearby"
import EventCardMobile from "../../components/mobile/shared/general/Event-Card";
import EventCardDesktop from "../../components/desktop/shared/general/Event-Card";
import windowSize from 'react-window-size';

class Nearby extends Component {

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
        <div>
          <SortDesktop />
          <EventCardDesktop />
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
