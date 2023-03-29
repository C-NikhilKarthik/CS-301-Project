import React, { useEffect, useState } from 'react'

function List_followers() {
    const [data, setData] = useState([]);

    const getData = async () => {
        console.log('hi')
      const response = await fetch("/friends",{
        method:"POST"
      });
      const json = await response.json();
      console.log(json.name);
      setData(json.name);
    };
  
    useEffect(() => {
      getData();
    },[]);
  
    return (
      <table>
        <thead>
          <tr>
            <th>Friends</th>
          </tr>
        </thead>
        <tr>
          <tbody>
            {data.map((item,index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </tr>
      </table>
    );
}

export default List_followers