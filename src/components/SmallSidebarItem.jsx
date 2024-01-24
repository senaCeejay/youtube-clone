import React from 'react';

const SmallSidebarItem = ({ Icon, title, url }) => {
    return (
        <a href={url} className="">
            <Icon className="w-6 h-6" />
            <div className='text-sm'>{title}</div>
        </a >
    );
}

export default SmallSidebarItem;
