import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

/**
 * Class-based component, function-based is commented below this class.
 */
class App extends Component {
  state = {
    persons: [
      { id:'1', name: "Adwait", bike: "Duke 390" },
      { id:'2', name: "Vishal", bike: "AS 200" },
      { id:'3', name: "Mohit", bike: "Avenger 220" }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  togleShowPersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons});
  };

  changeNameHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    }),
      person = {...this.state.persons[personIndex]},
      persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  onChangeHandler = (event) => {
    console.log("Now changing names of persons via Input change.");
    this.setState({
      persons: [
        { name: event.target.value, bike: "Duke 390" },
        { name: "Vishal D", bike: "AS 200" },
        { name: "Mohit J", bike: "Avenger 220" }
      ]
    });
  };

  deletePersonHandler = index => {
    //let persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  render() {
    const style = {
      'backgroundColor': 'turquoise',
      font: 'Constantia',
      border:'1px solid black',
      'paddingBottom': '5px',
      padding: '10px'
    };

    let persons = null;
    if(this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                name={person.name}
                bike={person.bike}
                //click={() => this.deletePersonHandler(index)}
                click={this.deletePersonHandler.bind(this, index)}
                onChanged={(event) => this.changeNameHandler(event, person.id)}
                key={person.id}
              />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1 className="App-title">Hi, this is a React App!</h1>
        <button 
          style={style}
          onClick={this.togleShowPersonsHandler}
          //onClick={() => this.changeNameHandler("AD")}
        >
          Toggle show persons
        </button>
        {persons}
      </div>
    );
  }
};

export default App;
/**
 * Function based component
 **/
/*const App = props => {

  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: "Adwait", bike: "Duke 390" },
      { name: "Vishal", bike: "AS 200" },
      { name: "Mohit", bike: "Avenger 220" }
    ],
    otherState: "Trial"
  });  
  console.log(personsState);    // otherState exists till this point

  const changeNameHandler = () => {
    console.log("Now changing names of persons.");
    setPersonsState({
      persons: [
        { name: "Adwait D", bike: "Duke 390" },
        { name: "Vishal D", bike: "AS 200" },
        { name: "Mohit J", bike: "Avenger 220" }
      ]
    }); // otherState is lost as function based components do not merge the state updates- they overwrite it.
  };

  // restore the lost otherState value:
  const [ otherState, setOtherState ] = useState({
    otherState: 'Trial'
  });
  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1 className="App-title">Hi, this is a React App!</h1>
      <button onClick={changeNameHandler}>Change name</button>
      <Person name={personsState.persons[0].name} bike={personsState.persons[0].bike}/>
      <Person name={personsState.persons[1].name} bike={personsState.persons[1].bike}>Currently active: No</Person>
      <Person name={personsState.persons[2].name} bike={personsState.persons[2].bike}/>
    </div>
  );
};*/
