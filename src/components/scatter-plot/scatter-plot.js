import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../../data/unemployment_income_2007_to_2017.csv';

class ScatterPlot extends Component{

    constructor(props){
        super(props);
        this.createScatter = this.createScatterPlot.bind(this);
    }

    componentDidMount(){
        this.createScatterPlot();
    }

    componentDidUpdate(){
        this.createScatterPlot();
    }

    createScatterPlot(){
        //width and height
		var w = 1000;
		var h = 600;
		var padding = 75;
		var i = 0;
		d3.csv(data, (row) => {
			return {
				county_code: +row['FIPStxt'],
				state: row['State'],
				employed: +row['Employed_2016'].replace(/[^0-9.-]+/g, ""),
				median_income: +row['Median_Household_Income_2016'].replace(/[^0-9.-]+/g, "")
			}
		}
		).then(data => {
			
			data = data.filter(d => (d.county_code % 1000 == 0))
			data = data.filter(d => !(isNaN(d.employed) || isNaN(d.median_income) || d.median_income === 0))
			
			var xScale = d3.scaleLinear()
			.domain(d3.extent(data, function(d) { return d.median_income; }))
			.range([padding, w - padding * 2]);
			
		var yScale = d3.scaleLinear()
			.domain(d3.extent(data, function(d) { return d.employed; }))
			.range([h - padding, padding]);
		
		var xAxis = d3.axisBottom().scale(xScale);
		
		var yAxis = d3.axisLeft().scale(yScale).ticks(5);
		
		//create svg element
		var svg = d3.select("body")
					.append("svg")
					.attr("width", w)
					.attr("height", h);
					
		//x axis
		svg.append("g")
			.attr("class", "x axis")	
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxis);
		
		//y axis
		svg.append("g")
			.attr("class", "y axis")	
			.attr("transform", "translate(" + padding + ", 0)")
			.call(yAxis);
			
			var circle = svg.selectAll("circle")
			.data(data)
			.enter()
			.append("g")
			circle.append("circle")
			.attr("class", "dot")
			.attr("cx", function(d) {
				return xScale(d.median_income);
			})
			.attr("cy", function(d) {
				return yScale(d.employed);
			})
			.attr("r", 20)
			.attr("fill", "green")
			.attr("opacity", .5)

			circle.append("text")
			.attr("x", (d) => xScale(d.median_income))
			.attr("y", (d) => yScale(d.employed) + 5)
			.text((d) => d.state) 
			.attr("text-anchor", "middle") 
		});
    }
	
    render(){
        return(
            <svg ref={node => this.node = node} width={400} height={400}></svg>
        );
    }
}

export default ScatterPlot