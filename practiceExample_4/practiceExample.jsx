import { Component } from "react";

class PracticeExample extends Component {
  state = {
    areaText: "",
    tableData: {},
  };

  onBlur = (e) => {
    const text = e.target.value;
    if (text === "") {
      this.setState({ areaText: "", tableData: {} });
      return;
    }

    const updatedTableData = this.getTableData(text);
    this.setState({ areaText: text, tableData: updatedTableData });
  };

  getTableData = (text) => {
    const tableData = {};
    const textArray = text.match(/\w+/gi);
    for (let word of textArray) {
      if (word in tableData) {
        tableData[word][0] += 1;
      } else {
        tableData[word] = [1];
      }
      tableData[word][1] = Math.round((tableData[word][0] / textArray.length) * 100) + "%";
    }
    return tableData;
  };

  render() {
    const { tableData } = this.state;
    return (
      <div className="app-body">
        <textarea name="area" onBlur={this.onBlur}></textarea>
        <table>
          <tbody>
            {Object.entries(tableData).map(([word, data]) => (
              <tr key={word}>
                <td>{word}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PracticeExample;

