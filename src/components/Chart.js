import React from 'react'
import { Line } from 'react-chartjs-2'

export default Chart = ({ chartData, chartDataMobile, chartDataTablet }) =>{ 
    
    const chart = (<Line
        data={chartData.data}
        height={200}
        options={chartData.options}
        />)

    const chartMobile = (<Line
        data={chartDataMobile.data}
        height={300}
        options={chartDataMobile.options}
        />)
    
    const chartTablet = (<Line
        data={chartDataTablet.data}
        height={200}
        options={chartDataTablet.options}
        />)
    
    const jsx= chartData ? chart :(<p>No chart data</p>)
    const jsxMobile= chartDataMobile ? chartMobile :(<p>No chart data</p>)
    const jsxTablet= chartDataTablet ? chartTablet :(<p>No chart data</p>)

    return(
        <div>
        <div className="content-container content-container--chart show-chart-large">
            {jsx}
        </div>
        <div className="content-container content-container--chart show-chart-small">
            {jsxMobile}
        </div>
        <div className="content-container content-container--chart show-chart-medium">
            {jsxTablet}
        </div>
        </div>
    )   
}
