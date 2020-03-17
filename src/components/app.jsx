import React, { Component } from "react";
import Counters from "./Counters";
import SatsList from "./allSats";
import Header from "./header";
import Config from "../config.json";

class App extends Component {
  state = {
    ChoosedSite: "none",
    openSat: null,
    satellites: [
      {
        id: 1,
        satName: "אופק 5",
        styleClasses: ["satBody"],
        lastPasses: [15111, 15112],
        statistics: {
          pass15111: {
            TCS: { param1: "not Found", param2: 2, param3: 7 },
            GPS: { param1: 1, param2: 2, param3: 3, param4: 10 }
          },
          pass15112: {
            TCS: { param1: 15, param2: 82, param3: 7 },
            GPS: { param1: 10, param2: 7, param3: 3, param4: 10 }
          }
        }
      },
      {
        id: 2,
        satName: "אופק 7",
        styleClasses: ["satBody"],
        lastPasses: [15111],
        statistics: {
          pass15111: {
            TCS: { param1: "not Found", param2: 2, param3: 7 },
            GPS: { param1: 1, param2: 2, param3: 3, param4: 10 }
          }
        }
      },
      {
        id: 3,
        satName: "אופק 8",
        styleClasses: ["satBody"],
        lastPasses: [15111],
        statistics: {
          pass15111: {
            TCS: { param1: "not Found", param2: 2, param3: 7 },
            GPS: { param1: 1, param2: 2, param3: 3, param4: 10 }
          }
        }
      },
      {
        id: 4,
        satName: "אופק 11",
        styleClasses: ["satBody"],
        lastPasses: [15111],
        statistics: {
          pass15111: {
            TCS: { param1: "not Found", param2: 2, param3: 7 },
            GPS: { param1: 1, param2: 2, param3: 3, param4: 10 }
          }
        }
      },
      {
        id: 5,
        satName: "שילוח 1",
        lastPasses: [15111],
        styleClasses: ["satBody"],
        statistics: {
          pass15111: {
            TCS: { param1: "not Found", param2: 2, param3: 7 },
            GPS: { param1: 1, param2: 2, param3: 3, param4: 10 }
          }
        }
      },
      {
        id: 6,
        satName: "שילוח 2",
        styleClasses: ["satBody"],
        lastPasses: [15111],
        statistics: {
          pass15111: {
            TCS: { param1: "not Found", param2: 2, param3: 7 },
            GPS: { param1: 1, param2: 2, param3: 3, param4: 10 }
          }
        }
      }
    ]
  };
  render() {
    if (this.state.ChoosedSite === "none")
      this.state.ChoosedSite = Config.defultSite;
    return (
      <React.Fragment>
        <Header
          ChoosedSite={this.state.ChoosedSite}
          onSiteChange={this.handleSiteChange}
        />
        <SatsList
          satellites={this.state.satellites}
          openSat={this.state.openSat}
          handleClick={this.handleOpenSatChange}
        />
      </React.Fragment>
    );
  }
  handleOpenSatChange = satId => {
    if (this.state.openSat === satId) {
      this.setState({ openSat: "none" });
    } else {
      this.setState({ openSat: satId });
    }
  };

  handleSiteChange = site => {
    if (this.state.ChoosedSite !== site) {
      this.setState({ openSat: "none" });
      this.setState({ ChoosedSite: site });
      let newSats = [...this.state.satellites];
      newSats[0].statistics.pass15111 = {
        TCS: { param1: "not Found", param2: "not Found", param3: 7 },
        GPS: { param1: "not Found", param2: "not Found", param3: 3, param4: 10 }
      };
      this.setState({ satellites: newSats });
    } else {
    }
  };
}

export default App;
