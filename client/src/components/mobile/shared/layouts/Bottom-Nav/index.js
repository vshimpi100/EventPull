import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Badge, TabBar } from "antd-mobile";
import { Icon as WebIcon } from "antd";
import "./style.css";
import { FaCompass, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab",
      hidden: false
    };
  }

  render() {
    return (
      <div style={{ position: "fixed", width: "100%", bottom: 0 }}>
        <TabBar
          id="bottomNav"
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="Explore"
            key="Explore"
            icon={
              <FaCompass
                style={{
                  width: "22px",
                  height: "22px"
                }}
              />
            }
            selectedIcon={
              <FaCompass
                style={{
                  width: "22px",
                  height: "22px",
                  color: "#4ca1f0"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
            data-seed="logId"
          />
          <TabBar.Item
            title="Nearby"
            key="Nearby"
            icon={
              <FaMapMarkerAlt
                style={{
                  width: "22px",
                  height: "22px"
                }}
              />
            }
            selectedIcon={
              <FaMapMarkerAlt
                style={{
                  width: "22px",
                  height: "22px",
                  color: "#4ca1f0"
                }}
              />
            }
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
            data-seed="logId1"
          />
          <TabBar.Item
            title="Nearby"
            key="Nearby"
            icon={
              <FaRegHeart
                style={{
                  width: "22px",
                  height: "22px"
                }}
              />
            }
            selectedIcon={
              <FaRegHeart
                style={{
                  width: "22px",
                  height: "22px",
                  color: "#4ca1f0"
                }}
              />
            }
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          />
        </TabBar>
      </div>
    );
  }
}

export default BottomNav;
