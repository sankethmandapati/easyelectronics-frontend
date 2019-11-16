import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table, { Col } from './DataTable';

const headers = [
    'Category',
    'Description',
    'Complementary'
];

const TableBody = (col) => (
    <>
        <Col>
            <Link to={`/editCategory/${col._id}`}>
                {
                    col.name
                }
            </Link>
        </Col>
        <Col>
            {
                col.description
            }
        </Col>
        <Col>
            {
                col.complementary ? 'Yes' : 'No'
            }
        </Col>
    </>
);

export default ({
    getAll = () => {},
    categories
}) => {
    useEffect(() => {
        getAll();
    }, []);
    return (
        <div>
            <Link className="add-category-button" to="/addCategory">+ Add Category</Link>
            <Table 
                data={ categories } 
                headers={ headers }
                renderColumns={ TableBody }
            />
        </div>
    );
}