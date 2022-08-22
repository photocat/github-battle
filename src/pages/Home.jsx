import { Col, Row } from 'antd';
import { Link } from "react-router-dom";

const Home = () => {
    const goToBattlePage = () => {
        
    }

    return (
       <>
            <Row>
                <Col span={12} offset={6} className='hero'>
                    <h1 className='hero-title'>Welcome to Github Battle!</h1>
                    <Link
                        to='battle'
                        className='button'
                    >
                        Go to battle !
                    </Link>
                </Col>
            </Row>
        </>
    );
}

export default Home;