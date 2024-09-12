import React, { Component } from 'react';
import "./about.scss";
export default class About extends Component {
  render() {

    return (
<section id="about">

  <div className='videos'>
    <p>Display your Youtube Videos</p>
        <div class="video1">
          <iframe 
          embed-player slide-media width={375} height={240} 
          src="https://www.youtube.com/embed/PYv92JTFeMk?autoplay=1&mute=1"
          title='homeVideo'
           frameborder="0"
           allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
          </div>
        <p>Cozy Rain</p>
          <div class="video2">
          <iframe embed-player slide-media width={375} height={240} 
           src="https://www.youtube.com/embed/lVnVTFxR5K0?autoplay=1&mute=1" 
          title="Aquarium 4K VIDEO (ULTRA HD) 🐠" 
          frameborder="0" 
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
          </div>
        <p>Aquarium</p>

          <div class="video3">
          <iframe embed-player slide-media width={375} height={240} 
          src="https://www.youtube.com/embed/aXKfB2-VhNE?autoplay=1&mute=1"
          title="Autumn 4K - 4K Autumn Forest / Relaxing Nature Video &amp; River Sound [ October Golden Season ]"
            frameborder="0" 
            allow="accelerometer; autoplay; fullscreen;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
             </iframe>
          </div>
          <p>Autumn Forest</p>
          </div>
        </section>
  );
    }}

    <iframe width="1280" height="720" src="https://www.youtube.com/embed/PYv92JTFeMk" title="Cozy Reading Nook on Balcony with Smooth Jazz Music | Rain &amp; Fireplace Sounds for Relaxing, Sleeping" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>