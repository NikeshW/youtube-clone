import React from "react";
import "./About.css";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import BGvideo from "./BGvideo";

const About = () => {
  return (
    <IconContext.Provider value={{ color: "rgb(197, 102, 34)", size: "2em" }}>
      {/* <BGvideo source={cityscape}/> */}

      <div className="aboutpage">
        <div className="aboutpage-body">
          <h1 className="about-h1">Meet the developers:</h1>

          <div className="us">
            <div className="Nikesh">
              <h2>Nikesh W.</h2>
              <img
                src="https://cdn.dribbble.com/users/1118376/screenshots/3604186/developer-dribbble.gif"
                alt="nikesh"
                width={400}
              />
              <p>
                Hi I'm Nikesh,an aspiring Full Stack Web Developer.
                <br/> I'm always up for a game of chess. I like to read about health and fitness and I also practice calisthenics.
                
                <br />
                GitHub: 
                <a
                  href="https://github.com/NikeshW"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </p>
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
                where I am learning and growing each day.
                Other then coding, I enjoy watching
                documentaries, reading and 
                eating!
                <br />

                GitHub:
                <a
                  href="https://github.com/dilrubamajumder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </p>
            </div>
          </div>
  
          <div className="stuggles">
            <img
              src="https://devmastery.tech/static/developers-4984c0ac41b13002de2873e622efa63c.gif
            "
              alt="together-stressed"
              width={400}
            />
            <p className="h4-div">
              Even though this was a challenging project,
              <br /> we couldnt have been happier to have gotten the chance to
              work together and learn.
              <br /> We hope you enjoy our site!
            </p>
            <img
              src="https://cdn.dribbble.com/users/68398/screenshots/5786346/6.gif"
              alt="together"
              width={400}
            />
            <p className="success-p">Here lies some of our feelings, expressed in Gifs</p>
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
    </IconContext.Provider>
  );
};

export default About;
