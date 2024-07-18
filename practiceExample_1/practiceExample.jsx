import { Component } from "react";

class PracticeExample extends Component {
  state = {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, sint.",
    term: "",
    idxs: [-1],
  };

  handleBlur = (event) => {
    this.setState({ term: event.target.value });
  };

  findIdx = (text, term) => {
    const wordsArr = text.match(/\w+/g).map((word) => word.toLowerCase());
    const matchWords = wordsArr.filter(
      (word) => word.indexOf(term.toLowerCase()) > -1
    );
    const idxs = matchWords.map((word) => wordsArr.indexOf(word));
    this.setState({ idxs });
  };

  render() {
    const { text, term, idxs } = this.state;
    return (
      <div className="app-body">
        <p>
          {text.split(" ").map((word, i) => (
            <span style={{ color: idxs.includes(i) ? "red" : "" }} key={i}>
              {word + " "}
            </span>
          ))}
        </p>
        <input type="text" placeholder="text" onBlur={this.handleBlur}/>
        <button onClick={() => this.findIdx(text, term)}>click</button>
      </div>
    );
  }
}

export default PracticeExample;
