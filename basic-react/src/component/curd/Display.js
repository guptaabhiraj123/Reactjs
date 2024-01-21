import React from 'react'
import {Link} from 'react-router-dom'

function Display() {
  return (
    <>
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>1</td>
            <td>Abhiraj</td>
            <td>guptaabhiraj421@gmail.com</td>
            <td>Abhi</td>
            <td>
              <Link>view</Link>
              <Link>edit</Link>
              <Link>delete</Link>
            </td>
          </tr>
        </thead>
      </table>
    </div>

    </>
  )
}

export default Display