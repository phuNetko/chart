import * as React from 'react';
import videojs from 'video.js';
import '../../App.css'
// Styles
import 'video.js/dist/video-js.css';

interface VideoPlayerPropsInferface {
  videoJsOptions: videojs.PlayerOptions;
}

export default class VideoPlayer extends React.Component {
  private player?: videojs.Player;
  private videoNode?: HTMLVideoElement | any;

  constructor(props: VideoPlayerPropsInferface) {
    super(props);
    this.player = undefined;
    this.videoNode = undefined;
  }

  componentDidMount() {

    // instantiate video.js
    this.player = videojs(this.videoNode, this.props).ready(function () {
      // console.log('onPlayerReady', this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  render() {
    return (
      <div className="c-player">
        <div className="c-player__screen" data-vjs-player="true">
          <video ref={(node: HTMLVideoElement) => this.videoNode = node}
            poster='https://images.hdqwalls.com/download/city-rain-blur-bokeh-effect-7w-1920x1080.jpg'
            preload='auto'
            width="564"
            height="264"
          
            className="video-js" />
        </div>
      </div>
    );
  }
}