import HomeIcon from "../utils/images/home.svg"
import ShortsIcon from "../utils/images/shorts.svg"
import FeedbackIcon from "../utils/images/feedback.svg"
import SettingsIcon from "../utils/images/settings.svg"
import HelpIcon from "../utils/images/help.svg"
import ShowMoreIcon from "../utils/images/show-more.svg"
import LikedIcon from "../utils/images/like.svg"
import VideosIcon from "../utils/images/videos.svg"
import HistoryIcon from "../utils/images/history.svg"
import LibraryIcon from "../utils/images/library.svg"
import SubscribeIcon from "../utils/images/subscribe.svg"
import YoutubeStudioIcon from "../utils/images/Youtube-Studio.png";


export const HAMBURGER_ICON = "https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png";

export const YOUTUBE_ICON = "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg";

export const PROFILE_ICON = "https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png";
 
const GOOGLE_API_KEY = "AIzaSyDdy0KuZC2YIJxLkPEN8VkTqqXJ_6VoS9M";

export const YoUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_INFO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY;

export const SIDEBAR_OPTIONS = [
    {
        icon: HomeIcon,
        name: "Home"
    },
    {
        icon: ShortsIcon,
        name: "Shorts"
    },
    {
        icon: SubscribeIcon,
        name: "Subscriptions"
    },];


export const YOU =[

    {
        icon: HistoryIcon,
        name: "History"
    },
    {
        icon: VideosIcon,
        name: "Your Videos"
    },
    {
        icon: HomeIcon,
        name: "Watch Later"
    },
    {
        icon: ShowMoreIcon,
        name: "Show More"
    },
];



export const YOUTUBE_PRODUCTS = [
    {
        icon :"https://img.freepik.com/premium-vector/free-vector-youtube-icon-logo-social-media-logo_901408-454.jpg?",
        name:"Youtube Premium"
    },
    {
        icon : YoutubeStudioIcon,
        name:"Youtube Studio"
    },
    {
        icon :"https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg",
        name:"Youtube Music"
    },
    {
        icon :"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-kids-icon.png",
        name:"Youtube Kids"
    },
]


export const BOTTOM_SECTION = [
    {
        icon: SettingsIcon,
        name: "Settings"
    },
    {
        icon: HelpIcon,
        name: "Help"
    },
    {
        icon: FeedbackIcon,
        name: "Send Feeback"
    },
    
];

export const EXPLORE = [
{
    icon: LibraryIcon,
    name:"Trending"
},
{
    icon: LibraryIcon,
    name:"Shopping"
},
{
    icon: LibraryIcon,
    name:"Music"
},
{
    icon: LibraryIcon,
    name:"Movies"
},
{
    icon: LibraryIcon,
    name:"Live"
},
{
    icon: LibraryIcon,
    name:"Gaming"
},
{
    icon: LibraryIcon,
    name:"News"
},
{
    icon: LibraryIcon,
    name:"Sports"
},
{
    icon: LibraryIcon,
    name:"Learning"
},
{
    icon: LibraryIcon,
    name:"Fashion & Beauty"
},
{
    icon: LibraryIcon,
    name:"Podcasts"
},
{
    icon: LibraryIcon,
    name:"Trending"
},
];
    // {
    //     icon: LibraryIcon,
    //     name: "Library"
    // },
    
    // {
    //     icon: LikedIcon,
    //     name: "Liked Videos"
    // },
    
    



export const list = [
  "All",
  "Mixes",
  "Music",
  "Cricket",
  "Gaming",
  "News",
  "Lofi",
  "Thrillers",
  "Live",
  "Standup",
  "React",
  "JavaScript",
];

export const commentArray = [
    {
        name:"Yash Paota",
        text:"Thats a good one!!",
        replies:[
        {
            name:"Mohit Goel",
            text:"Thats a good one!!",
            replies:[{
                name:"Mohit Goel",
                text:"Thats a good one!!",
                replies:[{
                    name:"Mohit Goel",
                    text:"Thats a good one!!",
                    replies:[],
                },
                
                {
                    name:"Harshit Agarwal",
                    text:"Thats a good one!!",
                    replies:[],
                },],
            },
            
            {
                name:"Harshit Agarwal",
                text:"Thats a good one!!",
                replies:[],
            },],
        },
        
        {
            name:"Harshit Agarwal",
            text:"Thats a good one!!",
            replies:[],
        },
        
        {
            name:"Harsh Jangid",
            text:"Thats a good one!!",
            replies:[],
        },
        
        {
            name:"Aman Grover",
            text:"Thats a good one!!",
            replies:[],
        },

        ],
    },
    
    {
        name:"Mohit Goel",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Harshit Agarwal",
        text:"Thats a good one!!",
        replies:[
            {
                name:"Mohit Goel",
                text:"Thats a good one!!",
                replies:[],
            },
            
            {
                name:"Harshit Agarwal",
                text:"Thats a good one!!",
                replies:[],
            },
            
            {
                name:"Harsh Jangid",
                text:"Thats a good one!!",
                replies:[],
            },
            
            {
                name:"Aman Grover",
                text:"Thats a good one!!",
                replies:[],
            },
        ],
    },
    
    {
        name:"Harsh Jangid",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Aman Grover",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Ayush Paota",
        text:"Thats a good one!!",
        replies:[{
            name:"Mohit Goel",
            text:"Thats a good one!!",
            replies:[],
        },
        
        {
            name:"Harshit Agarwal",
            text:"Thats a good one!!",
            replies:[],
        },
        
        {
            name:"Harsh Jangid",
            text:"Thats a good one!!",
            replies:[],
        },
        
        {
            name:"Aman Grover",
            text:"Thats a good one!!",
            replies:[],
        },],
    },
    
    {
        name:"RAj Kumar Yadav",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Rohit",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Sunny",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Tamannah Bhatia",
        text:"Thats a good one!!",
        replies:[],
    },
    
    {
        name:"Shruti Kakkar",
        text:"Thats a good one!!",
        replies:[],
    },
    
]
