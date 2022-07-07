import React from 'react';
import './App.css';
import data from '../mock.data.json'

function App() {

  const [contacts, setContacts] = useState();

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jenny Chan</td>
            <td>3 waterfoot road</td>
            <td>333-09-892-213</td>
            <td>tester@gmail.com</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default App
