import ReactDOM from 'react-dom';
// import GuestList from './state/GuestLIst';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
      {/* <GuestList /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
