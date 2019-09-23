import moment from 'moment'
import numeral from 'numeral'

export default (foodsDiary, weights, exercisesDiary, { chartType } ) => {
    const labelSize=15
    const tickSize=14
    const titleSize=20

    if(chartType.chart==='calorie-tracker'){
        //1 week
        if(chartType.option==='week'){
            let calories = []
            const ending = 6;
            const start = 0;
        
            for (let i = ending; i >= start; i--) {
                const date = moment().startOf('day').subtract(i,'days').valueOf()
                let totalEnergy = 0
                foodsDiary.forEach((food)=>{
                    const diaryDate = food.diaryDate
                    if(diaryDate===date){
                        const num = numeral(food.numberOfServings).value()
                        const calories = numeral(food.nutrition.energy.amount).value()
                        const foodEnergy = calories*num
                        totalEnergy = totalEnergy + foodEnergy
                    }
                })
                // exercisesDiary.forEach((exercise)=>{
                //     const diaryDate = exercise.diaryDate
                //     if(diaryDate===date){
                //         const exerciseEnergy = numeral(exercise.energy).value()
                //         totalEnergy = totalEnergy - exerciseEnergy
                //     }
                // })
                calories[ending-i]={ x: date, y: totalEnergy }
            }
        
            return {
                data:{
                    datasets:[
                        {
                            label:'Calories',
                            data:calories,
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
                        fontFamily: 'Shadows Into Light',
                        fontColor: '#4472C7'
                    },
                    legend:{
                        display:false,
                        position:'right'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'CALORIES PER DAY',
                                fontFamily: 'Shadows Into Light',
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
                                fontFamily: 'Shadows Into Light',
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
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }]
                    }
                }
            }   
        } 
        
            //2 week
            if(chartType.option==='fortnight'){
                let calories = []
                const ending = 13;
                const start = 0;
            
                for (let i = ending; i >= start; i--) {
                    const date = moment().startOf('day').subtract(i,'days').valueOf()
                    let totalEnergy = 0
                    foodsDiary.forEach((food)=>{
                        const diaryDate = food.diaryDate
                        if(diaryDate===date){
                            const num = numeral(food.numberOfServings).value()
                            const calories = numeral(food.nutrition.energy.amount).value()
                            const foodEnergy = calories*num
                            totalEnergy = totalEnergy + foodEnergy
                        }
                    })
                    calories[ending-i]={ x: date, y: totalEnergy }
                }
            
                return {
                    data:{
                        datasets:[
                            {
                                label:'Calories',
                                data:calories,
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
                            text:`CALORIE TRACKER FOR THE LAST FORTNIGHT`,
                            fontSize:titleSize,
                            fontFamily: 'Shadows Into Light',
                            fontColor: '#4472C7'
                        },
                        legend:{
                            display:false,
                            position:'right'
                        },
                        scales: {
                            yAxes:[{
                                ticks: {
                                    fontFamily: 'Shadows Into Light',
                                    fontColor: '#4472C7',
                                    fontSize: tickSize
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'CALORIES PER DAY',
                                    fontFamily: 'Shadows Into Light',
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
                                    fontFamily: 'Shadows Into Light',
                                    fontColor: '#4472C7',
                                    fontSize: tickSize,
                                    min:moment().startOf('day').subtract(13,'day').valueOf(),
                                    max:moment().startOf('day').valueOf(),
                                    callback: function(value) { 
                                        return moment(value).format('Do MMM') 
                                    }
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'DATE',
                                    fontFamily: 'Shadows Into Light',
                                    fontColor: '#4472C7',
                                    fontSize: labelSize
                                }
                            }]
                        }
                    }
                }   
            } 
        


            if(chartType.option==='2months'){
                let calories = []
                const ending = 7;
                const start = 0;
            
                for (let i = ending; i >= start; i--) {
                    const weekEnd = moment().startOf('day').subtract(i,'week').valueOf()
                    const weekStart = moment().startOf('day').subtract(i+1,'week').valueOf()
                    let totalEnergy = 0
                    foodsDiary.forEach((food)=>{
                        const diaryDate = food.diaryDate
                        if(diaryDate <= weekEnd && diaryDate > weekStart){
                            const num = numeral(food.numberOfServings).value()
                            const calories = numeral(food.nutrition.energy.amount).value()
                            const foodEnergy = calories*num
                            totalEnergy = totalEnergy + foodEnergy
                        }
                    })
                    calories[ending-i]={ x: weekStart, y: totalEnergy }
                }

            return {
                data:{
                    datasets:[
                        {
                            label:'Calories',
                            data:calories,
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
                        text:`CALORIE TRACKER FOR THE LAST 2 MONTHS`,
                        fontSize:titleSize,
                        fontFamily: 'Shadows Into Light',
                        fontColor: '#4472C7'
                    },
                    legend:{
                        display:false,
                        position:'right'
                    },
                    scales: {
                        yAxes:[{
                            ticks: {
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'CALORIES PER WEEK',
                                fontFamily: 'Shadows Into Light',
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
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize,
                                min:moment().startOf('day').subtract(7,'week').valueOf(),
                                max:moment().startOf('day').valueOf(),
                                callback: function(value) { 
                                    return moment(value).format('Do MMM')
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'DATE',
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }]
                    }
                }
            }   
        }    
    }else if (chartType.chart==='weight-tracker'){
        
        
        if(chartType.option==='3months'){
            
            const weightsOrdered = weights.sort((a,b)=>{
                return a.date > b.date ? 1 : -1;
        })
        const dataset = weightsOrdered.map((weightItem)=>{
                
                const start = moment().startOf('day').subtract(3,'month').valueOf()
                const end = moment().startOf('day').valueOf()
                const checkDate = numeral(weightItem.date).value()
                
                if( checkDate > start && checkDate <= end){
                    const weightValue = numeral(weightItem.weight).value()
                    const dateValue = numeral(weightItem.date).value()
                    return { x: dateValue, y:weightValue}
                }
            })
            
            return {
                data:{
                    datasets:[
                        {
                            label:'Weight',
                            data:dataset,
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
                            lineTension:0   
                        }
                    ]},
                options:{
                    title:{
                        display:true,
                        text:`WEIGHT TRACKER FOR THE LAST 3 MONTHS`,
                        fontSize:titleSize,
                        fontFamily: 'Shadows Into Light',
                        fontColor: '#4472C7'
                    },
                    legend:{
                        display:false,
                        position:'right'
                    },
                    scales: {
                        yAxes:[{
                            ticks: {
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'WEIGHT KG',
                                fontFamily: 'Shadows Into Light',
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
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize,
                                min:moment().startOf('day').subtract(3,'month').valueOf(),
                                max:moment().startOf('day').valueOf(),
                                callback: function(value) { 
                                    return moment(value).format('Do MMM') 
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'DATE',
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }]
                    }
                }
            }   
        } 
        
        
        
        
        if(chartType.option==='6months'){
            const weightsOrdered = weights.sort((a,b)=>{
                return a.date > b.date ? 1 : -1;
        })
        const dataset = weightsOrdered.map((weightItem)=>{
                
                const start = moment().startOf('day').subtract(6,'month').valueOf()
                const end = moment().startOf('day').valueOf()
                const checkDate = numeral(weightItem.date).value()
                
                if( checkDate > start && checkDate <= end){
                    const weightValue = numeral(weightItem.weight).value()
                    const dateValue = numeral(weightItem.date).value()
                    return { x: dateValue, y:weightValue}
                }
            })
            
            return {
                data:{
                    datasets:[
                        {
                            label:'Weight',
                            data:dataset,
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
                            lineTension:0
                        }
                    ]},
                options:{
                    title:{
                        display:true,
                        text:`WEIGHT TRACKER FOR THE LAST 6 MONTHS`,
                        fontSize:titleSize,
                        fontFamily: 'Shadows Into Light',
                        fontColor: '#4472C7'
                    },
                    legend:{
                        display:false,
                        position:'right'
                    },
                    scales: {
                        yAxes:[{
                            ticks: {
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'WEIGHT KG',
                                fontFamily: 'Shadows Into Light',
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
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize,
                                min:moment().startOf('day').subtract(6,'month').valueOf(),
                                max:moment().startOf('day').valueOf(),
                                callback: function(value) { 
                                    return moment(value).format('Do MMM') 
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'DATE',
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }]
                    }
                }
            }   
        }
        
        
        
        
        
        if(chartType.option==='year'){
            const weightsOrdered = weights.sort((a,b)=>{
                return a.date > b.date ? 1 : -1;
        })
        const dataset = weightsOrdered.map((weightItem)=>{
                
                const start = moment().startOf('day').subtract(1,'year').valueOf()
                const end = moment().startOf('day').valueOf()
                const checkDate = numeral(weightItem.date).value()
                
                if( checkDate > start && checkDate <= end){
                    const weightValue = numeral(weightItem.weight).value()
                    const dateValue = numeral(weightItem.date).value()
                    return { x: dateValue, y:weightValue}
                }
            })
            
            return {
                data:{
                    datasets:[
                        {
                            label:'Weight',
                            data:dataset,
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
                            lineTension:0 
                        }
                    ]},
                options:{
                    title:{
                        display:true,
                        text:`WEIGHT TRACKER FOR THE PREVIOUS YEAR`,
                        fontSize:titleSize,
                        fontFamily: 'Shadows Into Light',
                        fontColor: '#4472C7'
                    },
                    legend:{
                        display:false,
                        position:'right'
                    },
                    scales: {
                        yAxes:[{
                            ticks: {
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'WEIGHT KG',
                                fontFamily: 'Shadows Into Light',
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
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: tickSize,
                                min:moment().startOf('day').subtract(1,'year').valueOf(),
                                max:moment().startOf('day').valueOf(),
                                callback: function(value) { 
                                    return moment(value).format('Do MMM') 
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'DATE',
                                fontFamily: 'Shadows Into Light',
                                fontColor: '#4472C7',
                                fontSize: labelSize
                            }
                        }]
                    }
                }
            }   
        }
    }
}


    


