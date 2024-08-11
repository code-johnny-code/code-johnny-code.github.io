import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a variety of unique services and experiences, so you are sure to find something for everyone!
          </p>
        </div>
        <div className="row">
          {/*{props.data*/}
          {/*  ? props.data.map((d, i) => (*/}
          {/*      <div key={`${d.name}-${i}`} className="col-md-4">*/}
          {/*        {" "}*/}
          {/*        <i className={d.icon}></i>*/}
          {/*        <div className="service-desc">*/}
          {/*          <h3>{d.name}</h3>*/}
          {/*          <p>{d.text}</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    ))*/}
          {/*  : "loading"} */}
          {
          ([<div key={`tour-image-key`} className="col-md-4" style={{height: '410px'}}>
            {" "}
            <img src={require('./utv.jpg')} alt={'UTV tour'} style={{width: '200px'}}/>
            <div className="service-desc">
              <h3>UTV Tours</h3>
              <p>Let us personally show you some of the most beautiful sights in the area. We will tour our sprawling 94-acre property, stopping along the way to observe wildlife, view hidden bluffs and rock formations, visit the private spring, and ultimately take in the view from atop the cabin lookout.</p>
            </div>
          </div>,
            <div key={`hike-image-key`} className="col-md-4" style={{height: '410px'}}>
              {" "}
              <img src={require('./hike.jpeg')} alt={'UTV tour'} style={{width: '200px'}}/>
              <div className="service-desc">
                <h3>Guided Hikes</h3>
                <p>See all the same great sights as the UTV tours, but entirely on foot! Plan for a challenging hike over steep and rocky terrain.</p>
              </div>
            </div>,
            <div key={`bee-image-key`} className="col-md-4" style={{height: '410px'}}>
              {" "}
              <img src={require('./bees.jpeg')} alt={'Beekeeping Experience'} style={{width: '200px'}}/>
              <div className="service-desc">
                <h3>Beekeeping Experience (Seasonal and Weather Dependent)</h3>
                <p>Don a suit and step up to a living, functioning honey bee hive. Allow us to teach you more about the mesmerizing inner workings of a honey bee colony and see if you can find the queen.</p>
              </div>
            </div>,
            <div key={`cabin-image-key`} className="col-md-4" style={{height: '410px'}}>
              {" "}
              <img src={require('./cabin.jpeg')} alt={'Cabin'} style={{width: '200px'}}/>
              <div className="service-desc">
                <h3>Hilltop Cabin Rental</h3>
                <p>Perched atop the mountain's ridge with a commanding view of the area, this cabin is the perfect getaway in the Eureka Springs countryside.</p>
              </div>
            </div>,
            <div key={`tree-image-key`} className="col-md-4" style={{height: '410px'}}>
              {" "}
              <img src={require('./tree.jpg')} alt={'Champion Tree Hike'} style={{width: '200px'}}/>
              <div className="service-desc">
                <h3>Champion Tree Hike</h3>
                <p>Take a short UTV ride to our sister-site (Chinquapin Forest) 2 minutes down the road, where we will hike to the current Arkansas State Champion Ozark Chinquapin tree.</p>
              </div>
            </div>,
            <div key={`shoot-image-key`} className="col-md-4" style={{height: '410px'}}>
              {" "}
              <img src={require('./range.jpg')} alt={'Shooting Range Experience'} style={{width: '200px'}}/>
              <div className="service-desc">
                <h3>Shooting Range Experience</h3>
                <p>Throughout the Ozarks, you will find that many rural households value shooting as much as any other skill one is expected to acquire as they grow up.</p>
                <p>For those so inclined, come learn how to safely handle pistols, rifles, and shotguns, then test your abilities on our live fire range.</p>
              </div>
            </div>])
        }
        </div>
      </div>
    </div>
  );
};
