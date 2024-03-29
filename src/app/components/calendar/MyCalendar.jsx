import React from 'react';
import moment from 'moment';
import 'moment/locale/uk';



moment.locale('uk');

class MyCalendar extends React.Component {

  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  constructor(props) {
    super(props);
    this.width = props.width || "350px"
    this.style = props.style || {};
    this.style.width = this.width;
    
  }

  weekdays = moment.localeData().weekdays();
  weekdaysShort = moment.localeData().weekdaysShort();
  months = moment.months();

  year = () => this.state.dateContext.format("Y");

  month = () => this.state.dateContext.format("MMMM")

  daysInMonth = () => this.state.dateContext.daysInMonth();

  currentDate = () => this.state.dateContext.get("date");

  currentDay = () => this.state.dateContext.format("D");

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;

  }

  setMonth = (month) =>{
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({dateContext: dateContext});
  }

  nextMonth = () =>{
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({dateContext: dateContext});
    this.props.onNextMonth && this.props.onNextMonth();
  }

  prevMonth = () =>{
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({dateContext: dateContext});
    this.props.onPrevMonth && this.props.onPrevMonth();
  }

  onSelectChange = (e, data) =>{
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  }

  SelectList = (props) => {
    let popup = props.date.map((date) => {
      return (
        <div key={date}>
          <a href="#" onClick={(e) => {this.onSelectChange(e, date)}}>
            {date}
          </a>
        </div>
      );
    });

    return (
      <div className="month-popup">
        {popup}
      </div>
    );
  }

  onChangeMonth = (e, month) =>{
    this.setState({showMonthPopup: !this.state.showMonthPopup});
  };

  MonthNav = () => {
    return (
      <span className="label-month" onClick={(e)=>{this.onChangeMonth(e, this.month())}}>
        {this.month()}
        {this.state.showMonthPopup &&
        <this.SelectList date={this.months} />
        }
      </span>
    )
  }

  showYearEditor = () =>{
    this.setState({
      showYearNav: true
    });
  }

  setYear = (year) =>{
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({dateContext: dateContext});
  }

  onYearChange = (e) =>{
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  }

  onKeyUpYear = (e) =>{
    if(e.which ===13 || e.which ===27){
      this.setYear(e.target.value);
      this.setState({
        showYearNav:false
      });
    }
  }

  YearNav = () =>{
    return(
      this.state.showYearNav ? 
      <input className="editor-year" 
             defaultValue={this.year()} 
             ref={(yearInput)=>{this.yearInput = yearInput}}
             onKeyUp={(e)=> this.onKeyUpYear(e)}
             onChange={(e)=> this.onYearChange(e)}
             type="number" 
             placeholder="year" /> 
             : 
      <span className="label-year" onDoubleClick={(e)=>{this.showYearEditor()}}>
        
        {this.year()}
      </span>
    )
  }

  onDayClick = (e, day) =>{
    this.props.onDayClick && this.props.onDayClick(e, day)
  }

  render() {

    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      )
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80} className="emptySlot">
          {""}
        </td>);
    }

    console.log("blanks: ", blanks);

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay() ? "day current-day" : "day");
      daysInMonth.push(
        
        <td key={d} className={className}>
          <div className="daydiv">
          <span onClick={(e) =>{this.onDayClick(e, d)}}>
            {d}
          </span>
          </div>
        </td>
      );
    }

    console.log("days: ", daysInMonth);

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      };

      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElems = rows.map((d, i) => {
      return (
        <tr key={i * 100}>
          {d}
        </tr>
      )
    });

    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
          
            <tr className="calendar-header">
              <td colSpan="5">
                <this.MonthNav />
                {" "}
                <this.YearNav />
              </td>
              <td className="nav-month" colSpan="2">
                  <i className="prevArrow fa fa-fw fa-chevron-left" onClick={(e)=> {this.prevMonth()}}></i>
                  
                  <i className="nextArrow fa fa-fw fa-chevron-right" onClick={(e)=> {this.nextMonth()}}></i>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyCalendar