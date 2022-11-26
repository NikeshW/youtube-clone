import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="aboutpage">
        <h1>Meet the developers:</h1>
        <div className="us">

        <div className="Nikesh">
          <h2>Nikesh W.</h2>
          <img
            src="https://cdn.dribbble.com/users/1118376/screenshots/3604186/developer-dribbble.gif"
            alt="nikesh"
            width={400}
          />
          <p>Hi I'm Nikesh</p>
        </div>
        <div className="Dilruba">
          <h2>Dilruba M.</h2>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif"
            alt="dilruba"
            width={400}
          />
          <p>
            Hi I'm Dilruba. Currently I'm an aspiring FullStack developer at
            Pursuit,
            <br />
            where I am learning and growing each day.
            <br /> Other then coding, I enjoy watching documentaries(crime!), reading(mostly fiction), 
            <br/> eating, and bringe watching confort shows!
          </p>
        </div>
        </div>
        {/* <div className="intersting-facts">
          <h3>Here are some fun things we enjoy, can you guess who?</h3>
          <img  
          src=""
            alt="together"
            width={400}/>
        </div> */}
        <div>
          <img
            src="https://devmastery.tech/static/developers-4984c0ac41b13002de2873e622efa63c.gif
            "
            alt="together-stressed"
            width={400}
          />
          <h4>
            Even though this was a challenging project,
            <br /> we couldnt have been happier to have gotten the chance to
            work together and learn.
            <br /> We hope you enjoy our site!
          </h4>
          <img
            src="https://cdn.dribbble.com/users/68398/screenshots/5786346/6.gif"
            alt="together"
            width={400}
          />
          <h3>Here lies some of our feelings, expressed in Gifs</h3>
        </div>
        <div className="feeling">
          <img
            src="https://media.tenor.com/-0otN6oc6oYAAAAd/chaos-working-hard.gif"
            alt="spongebob"
            width={300}
            height="200"
          />
          <img
            src="https://i.gifer.com/1oUQ.gif"
            alt="css"
            width={250}
            height="200"
          />
          <img
            src="https://i.gifer.com/Bm7C.gif"
            alt="why"
            width={200}
            height="200"
          />
          <img
            src="https://i.gifer.com/1yft.gif"
            alt="fire"
            width={250}
            height="200"
          />
          <img
            src="https://i.gifer.com/FBtL.gif"
            alt="together"
            width={200}
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
