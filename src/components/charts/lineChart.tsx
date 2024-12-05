import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface DataPoint {
    label: string;
    y: number;
    x: string;
    percentage?: number;
    color?: string
}
export default function LineChart() {
    const DataPoint = [
        { y: 50, label: '50' },
        { y: 50, label: '50' },
        { y: 50, label: '50' },
        { y: 50, label: '50' },
        { y: 53, label: '53' },
        { y: 50, label: '50' },
        { y: 50, label: '50' },
        { y: 53, label: '53' },
        { y: 50, label: '50' },
    ] as DataPoint[]


    const options = {
        animationEnabled: false,
        exportEnabled: false,
        // theme: "light2", 
        title: {

        },
        axisY: {
            minimum: 49,
            maximum: 54,
            interval: 3,
            labelFontSize: 0,
            lineThickness: 0,
            gridThickness: 0,
            tickLength: 0,
            margin: -60
        },
        axisX: {
        },
        axisX2: {
            lineThickness: 0,
            tickLength: 0,
            labelFontSize: 16,
            labelAutoFit: true,
            innerWidth: 200,
            margin: 10,
        },
        data: [{
            markerType: "none",
            type: "line",
            axisXType: "secondary",
            dataPoints: DataPoint
        }],
        width: 100 * DataPoint.length,
        height: 100,
    }
    return (
        <div className={`w-[] LineChart_container`}>
            <CanvasJSChart options={options} />
        </div>
    );
}
