import { Home } from 'lucide-react';
import React from 'react';
import SmallSidebarItem from '../components/SmallSidebarItem';

const SideBar = () => {
    return (
        <aside className='sticky top-0 flex flex-col pb-4 ml-1 overflow-auto scrollbar-hidden lg:hidden'>
            <SmallSidebarItem Icon={Home} title="Home" url="/" />
        </aside>
    );
}

export default SideBar;

