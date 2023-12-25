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


export const HAMBURGER_ICON = "https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png";

export const YOUTUBE_ICON = "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg";

export const PROFILE_ICON = "https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png";
 
const GOOGLE_API_KEY = "AIzaSyDdy0KuZC2YIJxLkPEN8VkTqqXJ_6VoS9M";

export const YoUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;


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
    },
    {
        icon: LibraryIcon,
        name: "Library"
    },
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
        icon: LikedIcon,
        name: "Liked Videos"
    },
    {
        icon: ShowMoreIcon,
        name: "Show More"
    },
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
]


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
