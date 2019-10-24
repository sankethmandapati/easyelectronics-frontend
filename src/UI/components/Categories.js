import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    useEffect(() => {
        props.getAll();
    }, []);
    return (
        <div>
            <Link to="/addCategory">Add Category</Link>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Premium
                        </th>
                        <th>
                            Validity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map(c => (
                            <tr>
                                <td>
                                    <Link to={`/editCategory/${c._id}`}>
                                        {
                                            c.name
                                        }
                                    </Link>
                                </td>
                                <td>
                                    {
                                        c.premiumAmount
                                    }
                                </td>
                                <td>
                                    {
                                        c.validityInDays
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}