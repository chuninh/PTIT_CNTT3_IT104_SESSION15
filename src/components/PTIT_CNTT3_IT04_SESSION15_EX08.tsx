import { Component } from "react";

type State = {
  count: number;
};

export default class Counter extends Component<{}, State> {
  private timerID: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}
