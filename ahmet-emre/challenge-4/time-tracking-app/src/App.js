import React from "react";
import { Component } from "react";
import Main from '../src/components/Main'


class App extends Component{
  state={
    hours:[
      ["Work",32,36],["Play",10,8],["Study",4,7],["Exercise",4,5],["Social",5,10],["Self Care",2,2]
    ] ,
    changeTime:'Last Week',
    daily:false,
    weekly:true,
    monthly:false,
  }
  dailyHours = () => {
      let daily = [
        ["Work",5,7],["Play",1,2],["Study",0,1],["Exercise",1,1],["Social",1,3],["Self Care",0,1]
      ]
      this.setState({
        hours : daily.slice(0), changeTime:'Yesterday',daily:true, weekly:false,monthly:false,
      })
  }
  weeklyHours = () => {
      let weekly =[
        ["Work",32,36],["Play",10,8],["Study",4,7],["Exercise",4,5],["Social",5,10],["Self Care",2,2]
      ];
      this.setState({
        hours : weekly.slice(0), changeTime:'Last Week',daily:false, weekly:true,monthly:false,
      })
  }
  monthlyHours = () => {
      let monthly =[
        ["Work",103,128],["Play",23,29],["Study",12,19],["Exercise",11,18],["Social",21,23],["Self Care",7,11]
      ]
      this.setState({
        hours : monthly.slice(0), changeTime:'Last Month',daily:false, weekly:false,monthly:true,
      })
  }

  render() {
    let hourDisplayer=this.state.hours
    let currentDisplayer = this.state.changeTime
    let dailyStat = this.state.daily
    let weeklyStat = this.state.weekly
    let monthlyStat = this.state.monthly

    return(
     <Main
    hourCurrrent={hourDisplayer}
    changeTime={currentDisplayer} 
    dailyChange={this.dailyHours} 
    weeklyChange={this.weeklyHours} 
    monthlyChange={this.monthlyHours}
    dailyStat={dailyStat}
    weeklyStat={weeklyStat}
    monthlyStat={monthlyStat}
    />
    )
  }
}
export default App