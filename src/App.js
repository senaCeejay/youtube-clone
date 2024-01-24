import './App.css';
import CategoryPills from './components/CategoryPills';
import VideoGridItems from './components/VideoGridItems';
import { categories, videos } from './data/home';
import PageHeader from "./layout/PageHeader"
import { useState } from "react"
import SideBar from './layout/SideBar';
function App() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    return (
        <div className="flex flex-col max-h-screen">
            <PageHeader />
            <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
                <SideBar />
                <div className='px-8 pb-4 overflow-x-hidden'>
                    <div className="sticky top-0 z-10 pb-4 bg-white">
                        <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
                    </div>
                    <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
                        {videos.map(video => (
                            <VideoGridItems key={video.id} {...video} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
