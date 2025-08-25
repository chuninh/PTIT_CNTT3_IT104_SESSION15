import { Component } from "react";

type State = {
  time: Date;
};

export default class Clock extends Component<{}, State> {
  private timerID:number|undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h3>
          Thời gian hiện tại:{" "}
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
        </h3>
      </div>
    );
  }
}
