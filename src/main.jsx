import './index.css'
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import ReactDOM from 'react-dom/client'
import ContactUs from './components/ContactUs.jsx';
import NotFound from './components/NotFouund.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Accordion from './components/Accordian.jsx';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Body />
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <ContactUs />
            },
            {
                path: 'restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />);


