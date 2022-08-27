import React from "react";
import { Component } from "react";
import Main from '../src/components/Main'


class App extends Component{
  state={
    hours:[
      [5,7],[1,2],[0,1],[1,1],[1,3],[0,1]
    ] ,
    changeTime:'Yesterday',
    daily:true,
    weekly:false,
    monthly:false,
  }
  dailyHours = () => {
      let daily = [
        [5,7],[1,2],[0,1],[1,1],[1,3],[0,1]
      ]
      this.setState({
        hours : daily.slice(0), changeTime:'Yesterday'
      })
  }
  weeklyHours = () => {
      let weekly =[
        [32,36],[10,8],[4,7],[4,5],[5,10],[2,2]
      ];
      this.setState({
        hours : weekly.slice(0), changeTime:'Last Week'
      })
  }
  monthlyHours = () => {
      let monthly =[
        [103,128],[23,29],[12,19],[11,18],[21,23],[7,11]
      ]
      this.setState({
        hours : monthly.slice(0), changeTime:'Last Month'
      })
  }
  dailyActiver = () => {
    this.setState({
      daily:true,
      weekly:false,
      monthly:false,
    })
  }
  weeklyActiver = () => {
    this.setState({
      daily:false,
      weekly:true,
      monthly:false,
    })
  }
  monthlyActiver = () => {
    this.setState({
      daily:false,
      weekly:false,
      monthly:true,
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
    dailyActiver={this.dailyActiver}
    weeklyActiver={this.weeklyActiver}
    monthlyActiver={this.monthlyActiver}
    dailyStat={dailyStat}
    weeklyStat={weeklyStat}
    monthlyStat={monthlyStat}
    />
    )
  }
}
export default App