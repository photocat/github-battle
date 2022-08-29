import { Col, Row } from 'antd';
import { Link } from "react-router-dom";
import { Player as Lottie } from '@lottiefiles/react-lottie-player';

const Home = () => {
    const goToBattlePage = () => {
        
    }

    return (
       <>
           <Row>
               <Col xs={{span: 24, offset: 0}} md={{span: 12, offset: 6}} lg={{span: 8, offset:8}} className='hero'>
                   <Lottie
                       autoplay={true}
                       loop={true}
                       src="https://assets1.lottiefiles.com/packages/lf20_Cko7Sr.json"
                       style={{ height: 'auto', width: '100%' }}
                   ></Lottie>
               </Col>
           </Row>
            <Row>
                <Col span={12} offset={6} className='hero'>
                    <h1 className='title'>Welcome to Github Battle!</h1>
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