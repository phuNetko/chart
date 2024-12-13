import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface Data {
    question: string,
    scores: Array<number>,
    answer: string,
}

interface LineChartProps {
    isTop?: boolean; // isTop là tùy chọn
    data?: Data
}

export default function LineChart(
    { isTop = false, data }: LineChartProps
) {

    const headers = ["第1回", "第2回", "第3回", "第4回", "第5回"];
    const dataDefault = //để default đẻe đè phòng khôg có dữ liệu:v
    {
        question: "",
        scores: [0, 0, 0, 0, 0],
        answer: "",
    }


    const Datapoints = data ? data : dataDefault
    const allScores = Datapoints.scores      // Kết hợp tất cả scores thành một mảng
    const minScore = Math.min(...allScores); // Tìm giá trị nhỏ nhất
    const maxScore = Math.max(...allScores); // Tìm giá trị lớn nhất

    let DataPoint = Datapoints.scores.map((score, index) => ({
        y: score,
        label: score.toString(),
        label2: headers[index]
    }))

    //cột đầu tiên mục đích để ẩn đi, kéo dài line ra như thiết kế
    const defaultElement = {
        y: DataPoint[0]?.y ?? 0,
        label: "0",
        label2: "0",
    };


    DataPoint = [defaultElement, ...DataPoint];

    const options = {
        animationEnabled: false,
        exportEnabled: false,
        title: {
        },
        toolTip: {
            enabled: false
        },
        axisY: {
            maximum: maxScore +5  , // chỗ này y hệt
            minimum: minScore - 10, //chỗ này tạo 1 hàm tính giá trị min của datapoint được truyền vào là được
            interval: 2,
            labelFontSize: 0,
            lineThickness: 0,
            gridThickness: 0,
            tickLength: 0,
            margin: -140            //chinh margin để mất cột đầu tiên( cho giống thiết kế.)
        },
        axisX: {
        },
        axisX2: [
            {
                lineThickness: 0,
                tickLength: 0,
                labelFontSize: 16,
                innerWidth: 200,
                margin: 10,
            },
            ...(isTop // check xem nó dứng trên đầu thì hiện thêm text, không thì thui
                ? [
                    {
                        lineThickness: 0,
                        tickLength: 0,
                        labelFontSize: 16,
                        labelAutoFit: true,
                        innerWidth: 200,
                        margin: 10,
                    },
                ]
                : [])

        ],
        data: [{

            markerType: "none",
            type: "line",
            axisXIndex: 0,
            axisXType: "secondary",
            color: '#5388D8',
            // toolTipContent: "",
            dataPoints: DataPoint.map((dp) => ({ y: dp.y, label: dp.label, toolTipContent: '' })),
        },
        ...(isTop
            ? [
                {
                    markerType: "none",
                    axisXIndex: 1,
                    lineThickness: 0,
                    type: "line",
                    color: '#5388D8',
                    axisXType: "secondary",
                    // toolTipContent: "{label}: {y}",
                    dataPoints: DataPoint.map((dp) => ({
                        y: dp.y,
                        label: dp.label2,
                    })),
                },
            ]
            : []),],
        width: 100 * DataPoint.length,
        height: isTop ? 110 : 80
    }
    return (
        <div className={`w-[] LineChart_container`}>
            <CanvasJSChart options={options} />
        </div>
    );
}
