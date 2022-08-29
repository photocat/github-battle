import { Button } from 'antd';
import PlayerCard from './PlayerCard';
import PlayerForm from './PlayerForm';

const Player = (props) => {

    return (
        props.data
            ? <PlayerCard
                playerName={props.playerName}
                data={props.data}
            >
                <Button
                    className='card-reset-button'
                    danger
                    size='large'
                    shape='rounded'
                    onClick={() => props.reset(props.playerName)}
                >
                    Reset
                </Button>
            </PlayerCard>
            : <PlayerForm
                playerName={props.playerName}
                isLoading={props.isLoading}
                handlePlayerState={props.handlePlayerState}
            />
    );
}

export default Player;