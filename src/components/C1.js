import React,{useEffect,useState} from 'react';
import './style.css';

function C1()
{
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then((response) => response.json())
          .then((data) => setData(data.users));
    }, []);

    return(
        <div className='c1'>
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val) => {
                        return(
                            <tr>
                                <td>{val.id}</td>
                                <td><img src={val.image} alt='Profile' width="50" height="50"/></td>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.username}</td>
                                <td>{val.domain}</td>
                                <td>{val.ip}</td>
                                <td>{val.university}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default C1;