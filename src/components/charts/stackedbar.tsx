import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface DataPoint {
    label: string;
    y: number;
    percentage?: number;
    color?: string
}
export default function StackedBar() {
    // console.log(data);
    const BACKGROUNDCOLOR = '#FFF7E4'
    const options = {
        backgroundColor: BACKGROUNDCOLOR,
        title: {
            // text: "Popular Majors Opted by Women & Men"
        },
        toolTip: {
            shared: false,
            enabled: false,
        },
        legend: {
            verticalAlign: "none", fontSize: 14, horizontalAlign: "center", fontWeight: 'normal',
        },
        axisX: {
            labelFontSize: 12, labelFontWeight: "bold", labelTextAlign: "left",
            gridColor: BACKGROUNDCOLOR, tickColor: BACKGROUNDCOLOR, lineColor: BACKGROUNDCOLOR, labelMaxWidth: 50, labelAutoFit: true
        },
        axisY: {
            suffix: "%", gridColor: BACKGROUNDCOLOR, tickColor: BACKGROUNDCOLOR, lineColor: "#ccc", labelAutoFit: true, interval: 20
        },
        axisY2: {

            suffix: "%", gridColor: BACKGROUNDCOLOR, tickColor: BACKGROUNDCOLOR, lineColor: BACKGROUNDCOLOR, labelAutoFit: true, interval: 20
        },
        indexLabelFontColor: "black",
        dataPointWidth: 25,
        data: [{
            type: "stackedBar100",
            axisYType: "secondary",
            color: "#F6AA00",
            name: "Women",
            showInLegend: true,
            indexLabel: "{y}",
            // indexLabelFontColor: "white",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { label: "助けてほしいこ", y: 60 },
                { label: "助けてほしい", y: 79 },
                { label: "Psyhcology", y: 77 },
            ] as DataPoint[]
        }, {
            type: "stackedBar100",
            color: "#FFF100",
            name: "Men",
            axisYType: "secondary",
            showInLegend: true,
            indexLabel: "{y}",
            // indexLabelFontColor: "white",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { label: "助けてほしいこ", y: 15 },
                { label: "助けてほしい", y: 21 },
                { label: "Psychology", y: 23 },
            ] as DataPoint[]
        }, {
            type: "stackedBar100",
            color: "#C8C8CB",
            name: "LGBT",
            axisYType: "secondary",
            showInLegend: true,
            indexLabel: "{y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { label: "助けてほしいこ", y: 35 },
                { label: "助けてほしい", y: 21 },
                { label: "Psychology", y: 23 },
            ] as DataPoint[]
        },
        {
            type: "stackedBar100",
            color: "#4DC4FF",
            name: "LGBT",
            axisYType: "secondary",
            showInLegend: true,
            indexLabel: "{y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { label: "助けてほしいこ", y: 35 },
                { label: "助けてほしい", y: 21 },
                { label: "Psychology", y: 23 },
            ] as DataPoint[]
        }],
        height: 200
    }
    return (
        <div className='w-[600px] h-[200px] StackedBar_container'>
            <CanvasJSChart options={options} />
        </div>
    );
}
