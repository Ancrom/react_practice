import { Component } from "react";

class AppBody extends Component {
  state = {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, sint.",
    colors: [],
  };

  getRandomColor = () => {
    const color =
      "#" + (((1 + Math.random()) * (1 << 24)) | 0).toString(16).substr(-6);
    return color;
  };

  generateColors = () => {
    const { text } = this.state;
    const colors = text.split("").map(() => this.getRandomColor());
    this.setState({ colors });
  };

  componentDidMount() {
    this.generateColors();
  }

  render() {
    const { text, colors } = this.state;
    return (
      <div className="app-body">
        <p>
          {text.split("").map((char, index) => (
            <span key={index} style={{ color: colors[index] }}>
              {char}
            </span>
          ))}
        </p>
        <button onClick={this.generateColors}>Click</button>
      </div>
    );
  }
}

export default AppBody;
