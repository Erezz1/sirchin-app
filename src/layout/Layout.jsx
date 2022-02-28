import Input from '../components/Input';
import Seo from '../components/Seo';
import Tabs from '../components/Tabs';

const Layout = ({ children }) => {
    return (
        <>
            <Input />
            <Tabs />
            <Seo />

            { children }
        </>
    )
}

export default Layout;
