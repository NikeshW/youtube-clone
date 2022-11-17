import React,{useEffect} from 'react';
import Search from './Search';
import Thumbnail from "./Thumbnail"


const Home = ({videos, setVideos}) => {
    useEffect(() => {
        console.log(videos)
    }, [videos])

    return (
        <div>
            <Search setVideos={setVideos} />
            
            <Thumbnail videos={videos}/>
            
        </div>
    );
};

export default Home;