import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Websites extends Component {
  render() {
    return (
      <div className="websites">
        <div className="websites-layout">
          <h2> Websites </h2>
          <Card body>
            <CardTitle><a href="http://www.dallascowboys.com">Dallas Cowboys Official Website</a></CardTitle>
            <CardText>
              The Official Site of the Dallas Cowboys. You can find most of your needs here from Scores, News, and Gear
            </CardText>

          </Card>
          <Card body className="text-center">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
          <Card body className="text-right">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default Websites;
