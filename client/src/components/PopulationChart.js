import React from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";

class PopulationChart extends React.Component {
    constructor(props) {
        let array1 = [];
        let array2 = [];

        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                let data = res.data.Countries;
                for (let i = 0; i < data.length; i++) {
                    array1.push(data[i].TotalConfirmed);
                    array2.push(data[i].Country);
                }
            })
            .catch(err => {
                console.log(err);
            });

        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#ffffff',
                    foreColor: '#333',
                },
                xaxis: {
                    categories: array2,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                fill: {
                    colors: ['#f44336'],
                },
                dataLabels: {
                    enabled: false,
                },
                title: {
                    text: 'Largest US Cities By Population',
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '25px',
                    },
                },
            },
            series: [
                {
                    name: "Numero de mortos",
                    data: array1,
                },
            ],
        };
    }

    render() {
        return (
            <>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450px"
                    width="100%"
                />
            </>
        );
    }
}

export default PopulationChart;