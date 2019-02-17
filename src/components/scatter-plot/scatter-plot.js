import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../../data/cleanedStates.csv';
import {select} from "d3";
import colors from '../../data/colors.js'

class ScatterPlot extends Component{

    constructor(props){
        super(props);

        this.state ={
        	openCategory : false,
			stateProps : {},
		}
		this.createScatter = this.createScatterPlot.bind(this);
        this.onbuttonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = (d) => {
    	console.log("Clicked");
		this.setState({
			openCategory: true,
			stateProps: d.state,
		});
		console.log("State" + this.state.openCategory);
	}

    componentDidMount(){
        this.createScatterPlot();
    }

    componentDidUpdate(){
        this.createScatterPlot();
    }

    componentWillUpdate(){
        this.createScatter();
    }

    createScatterPlot(){
        //width and height
        const node = this.node
		var w = 1000;
		var h = 600;
		var padding = 75;
		let yMetric = this.props.yMetric;
        let xMetric = this.props.xMetric;
        console.log(yMetric);
        d3.csv(data, (row) => {
            console.log(row);
            if(row[yMetric] !== undefined && row[xMetric] !== undefined){
			return {
				county_code: +row['FIPStxt'],
				state: row['State'],
				areaName: row['Area_name'],
				unemployed: row['Unemployed_2016'],
				employed: row['Employed_2016'],
				medianIncome: row['Median_Household_Income_2016'],
				yMetric: +row[yMetric].replace(/[^0-9.-]+/g, ""),
				xMetric: +row[xMetric].replace(/[^0-9.-]+/g, "")
			}}
		}
		).then(data => {
		    console.log(data);
			select(node).selectAll('*').remove();
			data = data.filter(d => (d.county_code % 1000 === 0))
			data = data.filter(d => !(isNaN(d.yMetric) || isNaN(d.xMetric) || d.xMetric === 0))
			
			var xScale = d3.scaleLinear()
			.domain(d3.extent(data, function(d) { return d.xMetric; }))
			.range([padding, w - padding * 2]);
			
		var yScale = d3.scaleLinear()
			.domain(d3.extent(data, function(d) { return d.yMetric; }))
			.range([h - padding, padding]);
		
		// var xAxis = d3.axisBottom().scale(xScale);
		
		// var yAxis = d3.axisLeft().scale(yScale).ticks(5);
		
		//create svg element

			
			var circle = select(node).selectAll("circle")
			.data(data)
			.enter()
			.append("g")
			circle.append("circle")
			.attr("class", "dot")
			.attr("cx", function(d) {
				return xScale(d.xMetric);
			})
			.attr("cy", function(d) {
				return yScale(d.yMetric);
			})
			.attr("r", 20)
			.attr("fill", (d) => colors[d.state.toUpperCase()])
			.attr("opacity", .5)
			.on("click", (d) => {console.log(d); return this.props.changeView(d)});

			circle.append("text")
			.attr("x", (d) => xScale(d.xMetric))
			.attr("y", (d) => yScale(d.yMetric) + 5)
			.text((d) => d.state) 

			.attr("text-anchor", "middle") 
			.attr("pointer-events", "none")
		});
    }
	
    render(){
        return(
        	<div>
			 <svg ref={node => this.node = node} width={1000} height={600}></svg>
			</div>
        );
    }
}

export default ScatterPlot