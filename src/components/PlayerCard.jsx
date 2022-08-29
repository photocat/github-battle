import { Card, Avatar, Badge } from 'antd';
const { Meta } = Card;

const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

const PlayerCard = (props) => {
    return (
        <ConditionalWrapper
            condition={props.isWinner}
            wrapper={children => <Badge.Ribbon text={props.isWinner.text} color={props.isWinner.color}>{children}</Badge.Ribbon>}
        >

            <Card
                title={props.playerName}
                headStyle={{ textAlign: 'center' }}
                loading={props.isLoading}
            >
                <Meta
                    avatar={<Avatar src={props.data.avatar_url} size={{ xs: 50, sm: 75, lg: 100, xl: 100, xxl: 100}} />}
                    title={`@${props.data.login}`}
                    description={
                        <>
                            <p>{`${props.data.name || 'No user name'}`}</p>
                            <p>{`${props.data.location || ''}`}</p>
                        </>
                    }
                />
                <div className='card-content'>
                    {props.children}
                </div>
            </Card>
        </ConditionalWrapper>
    );
}

export default PlayerCard;