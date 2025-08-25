import { Component } from "react";

type State = {
  color: string;
};

export default class ColorForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "#000000",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Color:", this.state.color);
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Color: {this.state.color}</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Form</h3>
          <label>Màu sắc</label>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
