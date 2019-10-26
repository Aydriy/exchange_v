import React from 'react';
import MyCalendar from './MyCalendar.jsx'



const style = {
  position: "relative",
  margin: "0 auto 10px auto"
}

class Calendar extends React.Component {

  onDayClick = (e, day) =>{
    console.log({day});
  }
  render(){
  return (

    <div className="App">
      <header className="App-header">
       <MyCalendar style={style} width="450px" onDayClick={(e, day)=> this.onDayClick(e, day)} />
      </header>
    </div>
  );
}
}
export default Calendar;
