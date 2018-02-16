import React from 'react';
import cowboysPhoto from '../images/cowboysOfficial.png';
import bloggingBPhoto from '../images/bloggingtheboys.png';
import espnPhoto from '../images/espn.png';
import sportsDayPhoto from '../images/sports-day.png';


const Websites = () => {
    return (
      <div className="websites">
        <div className="websites-layout">
          <h2> Websites </h2>
          <div className="website-item">
            <a target="_blank" rel="noopener noreferrer" href="http://www.dallascowboys.com">
              <img src={cowboysPhoto} alt="" />
            </a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.dallascowboys.com">
                <h3>Dallas Cowboys Official Website</h3>
              </a>
              <br />This is the offical website of the Dallas Cowboys. All of your basic needs will be on this website. From scores, schedules, and news. The news team is solid and aren't afraid to make harsh criticisms of the team even under their payroll. The media player on this site is a bit buggy and has frustrated many. Make sure to check out their top tier podcasts produced by Kent Garrison (Talkin Cowboys, Cowboys Break, The Draft Show, and more).
            </div>
          </div>
          <div className="website-item">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://sportsday.dallasnews.com/dallas-cowboys">
                <h3>Sports Day Dallas</h3>
              </a>
              <br />Sports Day Dallas is a great site to read some in-depth articles from journalists Jon Machota and Bob Strum. They push out some well written articles throughout the year (whether you agree with them or not) and have articles that are well received by the community.
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://sportsday.dallasnews.com/dallas-cowboys">
              <img src={sportsDayPhoto} alt="" />
            </a>
          </div>
          <div className="website-item">
            <a target="_blank" rel="noopener noreferrer" href="http://www.espn.com/nfl/team/_/name/dal/dallas-cowboys">
            <img src={espnPhoto} alt="" />
            </a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.espn.com/nfl/team/_/name/dal/dallas-cowboys">
                <h3>ESPN: Dallas Cowboys</h3>
              </a>
              <br />This is your basic all-in-one stop where you will find exclusive ESPN content about the Cowboys. The wesbite is easy to navigate and should be your go to ifi you are looking for scores and statistics. You can find that most articles are written by Todd Archer, who is the ESPN Dallas Cowboys writer.
            </div>
          </div>
          <div className="website-item">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.bloggingtheboys.com">
                <h3>Blogging the Boys</h3>
              </a>
              <br />Owned by SB Nation, BTB does not have the top of the line beat writers or the access to exclusive content; however, they will publish some good articles throughout the year. The fan favorite content of this site is "Trolling The Nation". This is an article that pulls the best comments on SB Nations Thread of each Cowboys game and conglomerates them into a funny thread to relive the game.
            </div>
            <a target="_blank" rel="noopener noreferrer" href="http://www.bloggingtheboys.com">
              <img src={bloggingBPhoto} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Websites;
