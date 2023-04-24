import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

    const onclicksss = async () => {
//    let res = await axios.get('http://https://ai-payroll-api-dev.demo.bnksolution.com/users');
//    http://api.themoviedb.org/3/movie/popular?api_key=6460de6560376b65422bf1e31a0d4e21
    let res = await axios.get('http://localhost:8080/user/1');
    console.log(res);
//        axios.get('https://localhost:8080/user/1')
//          .then(function (response) {
//            // handle success
//            console.log(response);
//          })
//          .catch(function (error) {
//            // handle error
//            console.log("error")
//            console.log(error);
//          })
//          .finally(function () {
//            // always executed
//          });
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onclicksss}>Đổi mật khẩu</button>
      </header>
    </div>
  );
}

export default App;
