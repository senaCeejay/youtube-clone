import React, { useState } from 'react';
import logo from "../assets/Relaxation-bro.png"
import * as LR from 'lucide-react';
import Button from '../components/Button';

const PageHeader = () => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    return (
        <div className='flex items-center justify-between gap-10 pt-2 mx-4 mb-6 lg:gap-20'>
            <div className={`items-center flex-shrink-0 gap-4 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button variant="ghost" size="icon" >
                    <LR.Menu />
                </Button>

                <img src={logo} alt="" className='h-6 ' style={{ height: '50px' }} />
            </div>
            <form className={`justify-center flex-grow  gap-4  ${showFullWidthSearch ? "flex" : "hidden md:flex"} `}>

                <Button onClick={() => {
                    setShowFullWidthSearch(false)
                }} type="button" size="icon" variant="ghost" className="flex-shrink-0 md:hidden">
                    <LR.ArrowLeft />
                </Button>
                <div className='flex flex-grow max-w-[600px]'>
                    <input type='search' placeholder='Search' className='w-full px-4 py-1 text-lg border rounded-l-full shadow-inner outline-none border-secondary-border shadow-secondary focus:border-blue-500' />
                    <Button className="flex-shrink-0 px-4 py-2 border border-l-0 rounded-r-full border-secondary-border">
                        <LR.Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <LR.Mic />
                </Button>
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button onClick={() => {
                    setShowFullWidthSearch(true)
                }} variant="ghost" size="icon" className="md:hidden">
                    <LR.Search />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <LR.Mic />
                </Button>
                <Button onClick={() => {
                    alert("hi")
                }} variant="ghost" size="icon">
                    <LR.Upload />
                </Button>
                <Button variant="ghost" size="icon">
                    <LR.Bell />
                </Button>
                <Button variant="ghost" size="icon">
                    <LR.Users />
                </Button>
            </div>
        </div >
    );
}

export default PageHeader;
