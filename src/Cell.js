import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  updateCol = () => {
    const newCol = "#333";
    this.setState({ color: newCol });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.updateCol}
      />

      // </div>
    );
  }
}

// import React, { Component } from "react";

// export default class Cell extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: this.props.value
//     };
//   }

//   updateColor = () => {
//     const newColor = "#333";
//     this.setState({ color: newColor });
//   };

//   render() {
//     return (
//       <div
//         className="cell"
//         style={{ backgroundColor: this.state.color }}
//         onClick={this.updateColor}
//       />
//     );
//   }
//   return;
// }
