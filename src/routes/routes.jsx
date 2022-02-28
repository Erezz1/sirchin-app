import { FcSearch, FcNews, FcPicture, FcVideoCall } from 'react-icons/fc'
import { BiSearchAlt2, BiNews, BiImage, BiVideo } from 'react-icons/bi';

import All from '../container/All';
import News from '../container/News';
import Images from '../container/Images';
import Videos from '../container/Videos';

export const routes = [
    {
        label: 'Todos',
        path: '/search',
        iconactive: <FcSearch />,
        iconinactive: <BiSearchAlt2 />,
        element: <All />
    },
    {
        label: 'Noticias',
        path: '/news',
        iconactive: <FcNews />,
        iconinactive: <BiNews />,
        element: <News />
    },
    {
        label: 'Imagenes',
        path: '/images',
        iconactive: <FcPicture />,
        iconinactive: <BiImage />,
        element: <Images />
    },
    {
        label: 'Videos',
        path: '/videos',
        iconactive: <FcVideoCall />,
        iconinactive: <BiVideo />,
        element: <Videos />
    },
]
