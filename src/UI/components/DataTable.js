import React from 'react';
import '../../styles/datatable.scss';

export default ({
    headers = [],
    data = [],
    renderColumns = () => null
}) => (
    <table>
        <thead>
            <tr>
                {
                    headers.map(h => (
                        <th key={h}>
                            { h }
                        </th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map(c => (
                    <tr key={c._id}>
                        {
                            renderColumns(c)
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
);

export const Col = ({ children }) => (<td>
    {
        children
    }
</td>)