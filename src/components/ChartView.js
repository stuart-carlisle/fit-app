import React from 'react'
import { connect } from 'react-redux'
import selectChartData from '../selectors/chartSelector'
import selectChartDataMobile from '../selectors/chartSelectorMobile'
import selectChartDataTablet from '../selectors/chartSelectorTablet'
import Chart from './Chart'


export const ChartView = ({ chartData, chartDataMobile, chartDataTablet }) => {
 
    return (
            <div >
              <Chart chartData={chartData} chartDataMobile={chartDataMobile} chartDataTablet={chartDataTablet} />
            </div>
    )   
}

const mapStateToProps = (state) => {
  return {
    chartData: selectChartData(state.foodsDiary, state.weights, state.exercisesDiary, state.filters),
    chartDataMobile: selectChartDataMobile(state.foodsDiary, state.weights, state.exercisesDiary, state.filters),
    chartDataTablet: selectChartDataTablet(state.foodsDiary, state.weights, state.exercisesDiary, state.filters)
  }
}

export default connect(mapStateToProps)(ChartView)
