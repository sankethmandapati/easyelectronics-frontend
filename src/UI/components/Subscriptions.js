import React, {
    useEffect
} from 'react';

export default ({
    isAdmin,
    pendingRequests = [],
    approve,
    reject,
    getPendingRequests
}) => {
    useEffect(() => {
        if(pendingRequests.length === 0)
            getPendingRequests();
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Plan Name
                        </th>
                        <th>
                            Referrence Num
                        </th>
                        {
                            isAdmin ? (
                                <>
                                    <th>
                                        Approve
                                    </th>
                                    <th>
                                        Reject
                                    </th>
                                </>
                            ) : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingRequests.map(c => (
                            <tr>
                                <td>
                                    {
                                        c.requestedOn
                                    }
                                </td>
                                <td>
                                    {
                                        c.user.name
                                    }
                                </td>
                                <td>
                                    {
                                        c.subscriptionPlan.name
                                    }
                                </td>
                                <td>
                                    {
                                        c.referrenceNum
                                    }
                                </td>
                                {
                                    isAdmin ? (
                                        <>
                                            <td>
                                                <button onClick={ () => approve(c._id, {planId: c.subscriptionPlan._id}) }>
                                                    Approve
                                                </button>
                                                <button onclick={ () => reject(c._id, {}) }>
                                                    Reject
                                                </button>
                                            </td>
                                        </>
                                    ) : null
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}