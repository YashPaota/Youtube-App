import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
    path:"/",
    element:<MainContainer />,
    },
    {
      path:"/watch",
      element:<WatchPage />

    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
};

export default App;
