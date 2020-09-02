import React from "react";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(res =>res.json())
    .then(json => {
      console.log(this.state.items)
      this.setState({
        isLoaded: true,
        items: json,
        })
      })
  }

  render() {
    var { items = [] } = this.props;
    var { isLoaded} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
      console.log(this.state.items)
    }
    else {
      return (
        <div className="App">
         
        <ul>
          {items.map( item => (
            <li key={item.id}> 
            Name: {item.flight_number} | {item.email} | {item.username} | {item.address} | {item.street}
            </li>
          ))}
        </ul>
     </div>
      );
    }
  }
}
export default App;