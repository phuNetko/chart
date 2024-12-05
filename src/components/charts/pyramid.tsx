import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface DataPoint {
    label: string;
    y: number;
    percentage?: number;
    color?: string
}
export default function Pyramid({ data }: { data: any }) {
    const MIN_HEIGHT = 30;
    const BACKGROUNDCOLOR = '#FFF7E4'

    const adjustDataPoints = (dataPoints: DataPoint[]): DataPoint[] => {
        const total = dataPoints.reduce((sum, dp) => sum + dp.y, 0);
        return dataPoints.map(dp => ({
            ...dp,
            y: Math.max(dp.y, (dp.y / total) < (MIN_HEIGHT / 100) ? (total * MIN_HEIGHT / 100) : dp.y),
        }));
    };
    const dataPoints: DataPoint[] = adjustDataPoints([
        { label: "Impressions", y: data.data1, color: '#DEE8F7' },
        { label: "Clicked", y: data.data2, color: '#98B8E8' },
        { label: "Free Downloads", y: data.data3, color: '#5388D8' },
    ]);
    const options = {
        animationEnabled: false,
        backgroundColor: BACKGROUNDCOLOR,

        title: {
            text: "学校 全体"
        },
        toolTip: {
            enabled: false,
        },
        axisX: {
            margin: 10,
        },
        data: [{
            type: "pyramid",
            margin:0,
            showInLegend: false,
            indexLabelFormatter: function (e: any) {
                return `${e.dataPoint.y}`; 
            },
            indexLabelPlacement: "inside",
            indexLabelFontSize: 16,
            indexLabelFontStyle: "bold",
            dataPoints: dataPoints
        }],
        width: 290,
        margin: 0
    };
    return (
        <div className='relative w-[230px] overflow-hidden chart_pyramid_container'>
            <CanvasJSChart options={options} />
            {/* <span className='absolute'>haha</span> */}
        </div>
    );
}
