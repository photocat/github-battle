import { memo } from 'react';
import { Col, Row, Menu } from 'antd';

const LangSelector = memo((props) => {

    const highlightMenuItem = () => {
        let currentPage = props.LANGUAGES.findIndex((item) => item === props.activeLang);
        if (currentPage) {
            return [currentPage + ''];
        } else {
            return ['0'];
        }
    }

    console.log('Lang selector render');

    return (
        <Row style= {{ width: '100%' }}>
            <Col span={18} offset={3} style= {{ width: '100%' }}>
                <Menu
                    style={{ marginBottom: '30px' }}
                    onClick={(item) => props.handleTabSwitch(props.LANGUAGES[item.key])}
                    selectedKeys={highlightMenuItem()}
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    items={
                        props.LANGUAGES.map((item, i) => {
                            return {
                                key: i,
                                label: item
                            }
                        })
                    }
                />
            </Col>
        </Row>
    );
}, (prevProps, nextProps) => {
    return prevProps.LANGUAGES === nextProps.LANGUAGES && prevProps.activeLang === nextProps.activeLang;
})

export default LangSelector;