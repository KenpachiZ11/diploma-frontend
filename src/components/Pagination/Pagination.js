import React from 'react';
import { Pagination as P } from 'antd';

export const Pagination = ({ ...props }) => {
    console.log(props)
    return (
        <P defaultCurrent={1} total={5000} />
    )
}
