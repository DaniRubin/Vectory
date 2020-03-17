import React, { Component } from "react";
import Config from "../config.json";

class Header extends Component {
  state = {
    time: "00:00:00"
  };
  render() {
    this.componentDidMount();
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Vectory
            </a>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#">{this.state.time}</a>
            </li>
            {Config.sites.map(site => (
              <li
                className={this.props.ChoosedSite === site ? "green" : "black"}
              >
                <a href="#" onClick={() => this.props.onSiteChange(site)}>
                  <span className="glyphicon glyphicon-queen"></span>
                  {site}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: this.makeTime() }), 1000);
  }
  makeTime() {
    var d = new Date();
    return (
      d.getHours() +
      ":" +
      this.padTime(d.getMinutes()) +
      ":" +
      this.padTime(d.getSeconds())
    );
  }
  padTime(int) {
    if (int / 10 < 1) return "0" + int;
    return int;
  }
}

export default Header;
