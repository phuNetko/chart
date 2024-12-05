import './App.css'
import LineChart from './components/charts/lineChart'
import Pyramid from './components/charts/pyramid'
import StackedBar from './components/charts/stackedbar'
import VideoPlayer from './components/video/video'
const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }]
};
function App() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row'>
        <Pyramid data={{
          data1: 30,
          data2: 20,
          data3: 10
        }} />
        <Pyramid data={{
          data1: 30,
          data2: 50,
          data3: 20
        }} />
        <Pyramid data={{
          data1: 50,
          data2: 60,
          data3: 20
        }} />
      </div>
      <div className='flex flex-row gap-4'>
        <StackedBar />
        <StackedBar />
      </div>
      <div className='flex flex-row gap-5'>
        <div className='flex flex-col w-[500px] h-max overflow-x-auto test'>
          <LineChart />
          <LineChart />
        </div>
        <div className='flex '>
          <VideoPlayer {...videoJsOptions} />
        </div>
      </div>
    </div>
  )
}

export default App


