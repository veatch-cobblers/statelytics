import React, {Component} from 'react'
import {csv, extent, json, select} from "d3";
import * as topojson from "topojson";
import * as d3 from "d3";
import unemployed_data_csv from '../../data/unemployment_income_2007_to_2017.csv';


class Map extends Component {

    constructor(props) {
        super(props);
        this.createMap = this.createMap.bind(this);
    }

    componentDidMount() {
        this.createMap();
    }

    componentWillUpdate() {
        this.createMap();
    }

    createMap() {
        const node = this.node;
        select(node).selectAll('*').remove();
        var path = d3.geoPath();

        // var x = d3.scaleLinear()
        //     .domain([1, 10])
        //     .rangeRound([600, 860]);

        let rankingMetric = d3.map();

        Promise.all([
            csv(unemployed_data_csv, (d) => {
                if (d[this.props.rankingMetric] !== undefined) {
                    let metric = +d[this.props.rankingMetric].replace(/[^0-9.-]+/g, "");
                    rankingMetric.set(d[this.props.id], metric);
                }
            }),
            json("https://d3js.org/us-10m.v1.json")])
            .then((files) => {
                let us = files[1];

                // var color = d3.scaleThreshold()
                //     .domain(d3.range(2,10))
                //     .range(d3.schemeGreens[9]);

                let color = d3.scaleOrdinal()
                    .domain(extent(us, (d) => rankingMetric.get(d.id)))
                    .range(this.props.color);

                select(node).append("g")
                    .attr("class", "counties")
                    .selectAll("path")
                    .data(topojson.feature(us, us.objects.counties).features)
                    .enter().append("path")
                    .attr("fill", function (d) {
                        return color(d.rate = parseInt(rankingMetric.get(d.id)));
                    })
                    .on("mouseover", (d) => console.log(d))
                    .attr("d", path)
                    .append("title")
                    .text(function (d) {
                        return d.rate + "%";
                    });

                select(node).append("path")
                    .datum(topojson.mesh(us, us.objects.states, function (a, b) {
                        return a !== b;
                    }))
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

