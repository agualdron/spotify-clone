import React, {useEffect} from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Footer({ spotify }) {
    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);

      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };

      const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

      const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

    return (
        <div className="footer">
            {/* <h1>Im the Footer</h1> */}

            <div className="footer__left">
                <img className="footer__albumLogo" src="https://images-na.ssl-images-amazon.com/images/I/61f0JzC0-SL._SX425_.jpg" alt="album"/>
                <div className="footer__songInfo">
                    <h4>Dragon lies bleeding</h4>
                    <p>Manowar</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
                {playing ? (
                    <PauseCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer__icon"/>
                ) : (
                    <PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer__icon" />

                )}
                <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__icon"/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__icon"/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" ></Slider>
                    </Grid>
                </Grid>
            </div>


        </div>
    )
}

export default Footer