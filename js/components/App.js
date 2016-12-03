import React from 'react';
import Relay from 'react-relay';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './app.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Twitterati</h1>
            {this.props.tweet.tweet.map(tweet =>  
            //  <span key={tweet.id}><small>id: {tweet.id}</small> <br></br> {tweet.text}  <br></br>-- @<i>{tweet.user.screen_name}</i></span>
           
           <Card
           style={{
             margin:'5px 3px'
           }}
           >
           
    <CardHeader
      title={tweet.user.screen_name}
avatar={tweet.user.profile_image_url}
subtitle={tweet.created_at}    
    />
    <CardText>
     {tweet.text}+ {tweet.user.profile_image_url}
    </CardText>
  </Card>

            )}

      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    tweet: () => Relay.QL`
      fragment on Viewer {
        tweet{
          id,
          text,
          created_at
          user{
            screen_name,
            profile_image_url
          }
        }
      }
    `,
  },
});
