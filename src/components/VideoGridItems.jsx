import React, { useEffect, useRef, useState } from 'react';
import FormatDuration from '../utils/formatDuration';
import FormatTimeAgo from '../utils/formatTimeAgo';

const VideoGridItems = ({ id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl }) => {
    const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current == null) return;

        if (isVideoPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isVideoPlaying]);

    const handleVideoEnd = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div
            className="flex flex-col gap-2"
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
        >
            <a href={`/watch?v=${id}`} className="relative aspect-video">
                <img
                    src={thumbnailUrl}
                    className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl"}`}
                />
                <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
                    {/* {formatDuration(duration)} */}
                </div>
                <video
                    className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"}`}
                    ref={videoRef}
                    muted
                    playsInline
                    src={videoUrl}
                    onEnded={handleVideoEnd}
                />
            </a>
            <div className="flex gap-2">
                <a href={`/@${channel.id}`} className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
                </a>
                <div className="flex flex-col">
                    <a href={`/watch?v=${id}`} className="font-bold">
                        {title}
                    </a>
                    <a href={`/@${channel.id}`} className="text-sm text-secondary-text">
                        {channel.name}
                    </a>
                    <div className="text-sm text-secondary-text">
                        {VIEW_FORMATTER.format(views)} Views •
                        {/* {formatTimeAgo(postedAt)} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGridItems;
