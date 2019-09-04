import moment from 'moment'

const labelSize=20
const tickSize=15
const titleSize=25

export default {
                data:{
                    datasets:[
                        {
                            label:'Calories',
                            data:[{ x:moment().valueOf(),y:487},{x:moment().subtract(2,'days').valueOf(),y:342}],
                            fill:false,
                            borderColor: 'rgba(68, 114, 199, 0.6)',
                            pointBackgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
                            ],
                            lineTension:0.3
                        }
                    ]},
                options:{
                    title:{
                        display:true,
                        text:`CALORIE TRACKER FOR THE LAST WEEK`,
                        fontSize:titleSize,
                        fontFamily: 'Agency FB',
                        fontColor: '#4472C7'
                    },
                    legend:{
                        display:false,
                        position:'right'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontFamily: 'Agency FB',
                                fontColor: '#4472C7',
                                fontSize: tickSize
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'CALORIES PER DAY',
                                fontFamily: 'Agency FB',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }],
                        xAxes: [{
                            type: 'linear',
                            time:{
                                unit:'day'
                            },
                            ticks: {
                                fontFamily: 'Agency FB',
                                fontColor: '#4472C7',
                                fontSize: tickSize,
                                min:moment().startOf('day').subtract(6,'day').valueOf(),
                                max:moment().startOf('day').valueOf(),
                                callback: function(value) { 
                                    return moment(value).format('Do MMM') 
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'DATE',
                                fontFamily: 'Agency FB',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }]
                    }
                }
}   
