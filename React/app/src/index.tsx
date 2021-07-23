import ReactDOM from 'react-dom';
// import GuestList from './state/GuestLIst';
// import UserSearch from './state/UserSearch';
import EventComponeny from './events/EventComponent'

const App = () => {
  return (
    <div>
      <EventComponeny/>
      {/* <UserSearch /> */}
      {/* <GuestList /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
