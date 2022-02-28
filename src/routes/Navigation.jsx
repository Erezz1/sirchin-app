import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../container/Home';

import { routes } from './routes';

const Navigation = () => {

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map( route => (
                        <Route
                            key={ route.label }
                            path={ route.path }
                            element={ route.element }
                        />
                    ))
                }

                <Route path="/" element={ <Home /> } />
                {/* <Route path="/" element={ <Home /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation