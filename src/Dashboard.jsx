import {useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'

let url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1'    

function Dashboard() {
 
function CandlestickChart({ data }) {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) {
            return; // Handle empty data
        }
        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 200;

        // Create scales
        const xScale = d3.scaleTime()
            .domain([new Date(data[0][0]), new Date(data[data.length - 1][0])])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([d3.min(data, d => d[3]), d3.max(data, d => d[2])])
            .range([height, 0]);

        // Plot candlesticks
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(new Date(d[0])))
            .attr('y', d => yScale(Math.max(d[1], d[2])))
            .attr('width', 5) // Width of each candlestick
            .attr('height', d => Math.abs(yScale(d[1]) - yScale(d[2])))
            .attr('fill', d => d[1] > d[2] ? 'red' : 'green'); // Red for bearish, green for bullish

        // Add axes
        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        svg.append('g')
            .call(d3.axisLeft(yScale));

        // Add labels, titles, and styles as needed
    }, [data]);

    return (
        <svg ref={svgRef} width={400} height={200}>
            {/* Chart elements will be rendered here */}
        </svg>
    );
}



    const [data, setData] = useState(null);
   

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = data[0]
                console.log('time:', new Date(time).toLocaleString())
                console.log('open:', open)
                console.log('high:', high)
                console.log('low:', low)
                console.log('close:', close)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [data]);

    return (
        <div>
            <CandlestickChart data={data} />
        </div>
    )
}

export default Dashboard