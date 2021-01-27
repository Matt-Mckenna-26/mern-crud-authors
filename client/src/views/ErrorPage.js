import React from 'react';
import {Link} from '@reach/router'

const ErrorPage = (props) => {
    return (
        <div>
            <h5>Im sorry but this Author does not exist, would you like to add them?</h5>
            <Link to='/new'>Add Author</Link>
        </div>
    )
    }

    export default ErrorPage;

