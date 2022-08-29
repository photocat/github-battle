import { Col, Row, Statistic } from "antd";
import { FireFilled, GithubFilled, SmileFilled, StarFilled } from "@ant-design/icons";

const PlayerCardConent = (props) => {
    return (
        <Row gutter={[10, 10]} style={{width: '100%'}}>
            <Col xs={24} md={12} lg={12} xl={6}>
                <Statistic
                    title="Score"
                    value={props.user.score.value || 0}
                    prefix={<FireFilled style={{ color: 'red'}} />}
                />
            </Col>
            <Col xs={24} md={12} lg={12} xl={6}>
                <Statistic
                    title="Stars"
                    value={props.user.score.stars || 0}
                    prefix={<StarFilled style={{ color: '#001529'}} />}
                />
            </Col>
            <Col xs={24} md={12} lg={12} xl={6}>
                <Statistic
                    title="Public repos"
                    value={props.user.profile.public_repos || 0}
                    prefix={<GithubFilled style={{ color: '#001529'}} />}
                />
            </Col>
            <Col xs={24} md={12} lg={12} xl={6}>
                <Statistic
                    title="Followers"
                    value={props.user.profile.followers || 0}
                    prefix={<SmileFilled style={{ color: '#001529'}} />}
                />
            </Col>
        </Row>
    );
}

export default PlayerCardConent;