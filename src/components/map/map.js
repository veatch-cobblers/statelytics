import React, { Component } from 'react'
import {csv, json, max, scaleLinear, select} from "d3";
import * as topojson from "topojson";
import * as d3 from "d3";
import unemployed_data_csv from '../../data/unemployment_income_2007_to_2017.csv';

class Map extends Component{

    constructor(props){
        super(props);
        this.createMap = this.createMap.bind(this);
    }

    componentDidMount(){
        this.createMap();
    }

    componentWillMount(){
        this.createMap();
    }

    createMap(){
        const node = this.node

        var path = d3.geoPath();

        var x = d3.scaleLinear()
            .domain([1, 10])
            .rangeRound([600, 860]);

        var color = d3.scaleThreshold()
            .domain(d3.range(2, 10))
            .range(d3.schemeBlues[9]);

        var g = select(node).append("g")
            .attr("class", "key")
            .attr("transform", "translate(0,40)");

        select(node).selectAll("rect")
            .data(color.range().map(function(d) {
                d = color.invertExtent(d);
                if (d[0] == null) d[0] = x.domain()[0];
                if (d[1] == null) d[1] = x.domain()[1];
                return d;
            }))
            .enter().append("rect")
            .attr("height", 8)
            .attr("x", function(d) { return x(d[0]); })
            .attr("width", function(d) { return x(d[1]) - x(d[0]); })
            .attr("fill", function(d) { return color(d[0]); });

        g.append("text")
            .attr("class", "caption")
            .attr("x", x.range()[0])
            .attr("y", -6)
            .attr("fill", "#000")
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text("Unemployment rate");

        g.call(d3.axisBottom(x)
            .tickSize(13)
            .tickFormat(function(x, i) { return i ? x : x + "%"; })
            .tickValues(color.domain()))
            .select(".domain")
            .remove();

        let unemployment = d3.map();

        Promise.all([
            csv(unemployed_data_csv, (d) =>{  console.log(d); unemployment.set(d['FIPStxt'], d['Unemployment_rate_2017'])}),
            json("https://d3js.org/us-10m.v1.json")])
            .then( (files) => {
                let us = files[1];
                    select(node).append("g")
                        .attr("class", "counties")
                        .selectAll("path")
                        .data(topojson.feature(us, us.objects.counties).features)
                        .enter().append("path")
                        .attr("fill", function(d) { return color(d.rate = unemployment.get(d.id)); })
                        .on("mouseover", (d) => console.log(d))
                        .attr("d", path)
                        .append("title")
                        .text(function(d) { return d.rate + "%"; });

                    select(node).append("path")
                        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
                        .attr("class", "states")
                        .attr("d", path);
                });

    }

    render() {
        return <svg ref={node => this.node = node}
                    width={960} height={600}>
        </svg>
    }
}

export default Map