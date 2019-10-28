import React, { Component } from 'react';
import * as actions from './actions/index';
import { connect } from 'react-redux';
// import * as apiCaller from './api/apiCaller'
import './App.css';
import PieChart from './components/PieChart'
import HorizontalChart from './components/HorizontalChart'
import LineChart from './components/LineChart'
import PieChart2 from './components/PieChart2'

class App extends Component {
  componentDidMount() {
    this.props.GET_API();
  }
  render() {
    const { DataPieChart } = this.props
    const colorArr = ["tomato", "orange", "gold", "cyan", "navy", "green"]
    return (
      <div className='App'>
        <div className='one'>
          <PieChart Data={DataPieChart} colorArr={colorArr} />
          <LineChart />
        </div>
        <div className='two'>
          <HorizontalChart />
          <PieChart2 />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    DataPieChart: state.DataPieChart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    GET_API: () => { dispatch(actions.GET_API()) }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);