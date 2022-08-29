import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import './App.css';

//AntD Layout elements
const { Header, Content, Footer } = Layout;

//Pages for navigation
import Home from './pages/Home';
import Popular from './pages/Popular';
import Battle from './pages/Battle';
import Results from "./pages/Results";

//Menu items
const MENU_ITEM = ['Home', 'Popular', 'Battle'];

function App() {
    const location = useLocation().pathname;

    const highlightMenuItem = () => {
        let pathName = location.split('/')[1];
        const currentPage = MENU_ITEM.map((item, i) => {
            if (item.toLowerCase() === pathName) {
                return i + '';
            } else if (pathName === '') {
                return '0';
            } else {
                return false;
            }
        });
        return currentPage;
    }

    return (
        <Layout className="layout">
            {/* Header */}
            <Header className="header">
                <div className="logo">
                    <GithubFilled style={{ fontSize: '32px', color: 'white' }} />
                </div>
                
                {/* Menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    selectedKeys={highlightMenuItem()}
                    style= {{ width: '100%' }}
                    items={
                        MENU_ITEM.map((item, i) => {
                            return {
                                key: i,
                                label: <Link to={item === 'Home' ? '/' : item.toLowerCase()}>{item}</Link>
                            }
                        })
                    }
                />
            </Header>

            {/* Pages */}
            <Content className="page">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="popular" element={<Popular />} />
                    <Route path="battle" element={<Battle />} />
                    <Route path="battle/results" element={<Results />} />
                </Routes>
            </Content>

            {/* Footer */}
            <Footer  className="footer"> Github Battle ©2022</Footer>
        </Layout>
    );
}

export default App
