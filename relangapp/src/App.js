import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
        <tr>
            <th>Consonants</th>
            <th>Labial</th>
            <th>Alveolar</th>
            <th>Velar</th>
        </tr>
        <tr>
            <th>Nasal</th>
            <td>m</td>
            <td>n</td>
            <td>ŋ</td>
        </tr>
        <tr>
            <th>Plosive</th>
            <td>p</td>
            <td>t</td>
            <td>k</td>
        </tr>
        <tr>
            <th>Approximant</th>
            <td>w</td>
            <td>ɹ</td>
            <td>j</td>
        </tr>
    </table>
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
      </header>
    </div>
  );
}

export default App;
