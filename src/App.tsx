import './App.css'
import LineChart from './components/charts/lineChart'
import Pyramid from './components/charts/pyramid'
import StackedBar from './components/charts/stackedbar'
import VideoPlayer from './components/video/video'
import SignupForm from './pages/testScreen'
const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }]
};
function App() {

  // const data = 
  //   {
  //     question: "Q1 この学校では、イライラしても、上手に気分転換したりストレス解消したりする方法を学んでいる。",
  //     scores: [50, 50, 50, 50, 53],
  //     answer: "全体評価",
  //   }

  const data = [
    {
      question: "Q1 この学校では、イライラしても、上手に気分転換したりストレス解消したりする方法を学んでいる。",
      scores: [50, 50, 50, 50, 53],
      answer: "全体評価",
    },
    {
      question: "Q2 この学校では、生徒が安心して過ごせる方法をサポートしています。",
      scores: [48, 49, 50, 52, 54],
      answer: "全体評価",
    },
  ];


  return (
    <div className='flex flex-col gap-4 pt-10 items-center'>
      {/* <div className='flex flex-row '>
        <Pyramid data={{
          data1: 30,
          data2: 20,
          data3: 50
        }} />
        <Pyramid data={{
          data1: 9,
          data2: 14,
          data3: 77
        }} />
        <Pyramid data={{
          data1: 50,
          data2: 60,
          data3: 20
        }} />
      </div>
      */}
      {/* <div className='flex flex-row gap-4 '>
        <StackedBar />
        <StackedBar />
      </div> */}



      <div className='flex flex-row gap-5 '>
        <div className='flex flex-col w-[500px] h-max overflow-x-auto test'>
          {
            data.map((item, index) => {
              return (
                <LineChart isTop={index == 0 ? true : false} data={item} />
              )
            }
            )}
        </div>





        {/* <div className='flex '>
           <VideoPlayer {...videoJsOptions} /> 
        </div> */}
      </div>
      {/* <SignupForm /> */}
    </div>
  )
}

export default App


