import Homepage from "./homepage";
import { HashRouter, Route, Link } from 'react-router-dom';

/* import { HashRouter, Route, Switch, BrowserRouter as Router } from "react-router-dom";
//分别添加两个页面
import App from '../App';
import Home from '../Home';
const BasicRoute = () => (
    <Router>
      <Switch>
          <Route exact path="/" component={App} activeClassName="active"/>
          <Route exact path="/home" component={Home} activeClassName="active"/>
      </Switch>
  </Router>
);
export default BasicRoute; */
// export default class Router extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <App>
//           <Switch>
//             <Route
//               path="/"
//               render={() => {
//                 <Switch>
//                     <Route path='/homepage' exact component={Homepage} />
//                     <Redirect to="/welcomepage" />
//                 </Switch>
//               }}/>
//           </Switch>
//         </App>
//       </HashRouter>
//     );
//   };
// }
