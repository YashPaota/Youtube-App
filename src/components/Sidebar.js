const Sidebar = () => {
    return (
        <div className="p-5 shadow-lg w-48">
        
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                
            </ul>
            <h1 className="font-bold pt-5 ">You  </h1>
            <ul>
                <li>Your Channel </li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
            </ul>
            <h1 className="font-bold pt-5 ">Explore </h1>
            <ul>
                <li>Trending </li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Podcasts</li>
                <li>Fashion</li>
            </ul>
        </div>
    )
}

export default Sidebar;