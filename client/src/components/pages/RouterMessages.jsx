import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Join from "../Join";
import DirectMessages from "../DirectMessagesComp/DirectMessagesComp";
//user first views pg= join component pass login info to query str, then passes data to chat
export default function RouterMessages() {
  console.log("went into");
  return (
    <Router>
      <Switch>
        <Route path="/DirectMessages">
          <DirectMessages />
        </Route>
        <Route path="/">
          <Join />
        </Route>
      </Switch>
    </Router>
  );
}

/* <Router>
<Router path="/" exact component={Join}/>
<Router path="/direct_messages" exact component={DirectMessage}/>
</Router> */

//
