import ReactDOM from "react-dom";
// import GuestList from './state/GuestLIst';
// import UserSearch from './state/UserSearch';
// import EventComponeny from './events/EventComponent'
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
      {/* <EventComponeny/> */}
      {/* <UserSearch /> */}
      {/* <GuestList /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
