import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Row, Col, Skeleton, Button } from "antd";
import { summaryData } from "../api";
import PlayerCard from "../components/PlayerCard";
import PlayerCardConent from "../components/PlayerCardContent";

const Results = () => {
    const [searchParams] = useSearchParams();
    const [playerOneResult, setPlayerOneResult] = useState(null);
    const [playerTwoResult, setPlayerTwoResult] = useState(null);
    const [playerOneIsLoading, setPlayerOneIsLoading] = useState(false);
    const [playerTwoIsLoading, setPlayerTwoIsLoading] = useState(false);
    const [winner, setWinner] = useState(null);
    const playerOneNickname = searchParams.get('player1');
    const playerTwoNickname = searchParams.get('player2');
    const navigate = useNavigate();

    const whoIsWinner = (playerOne, playerTwo) => {
        if (playerOne > playerTwo) {
            setWinner('Player One Win!');
        } else if (playerOne == playerTwo) {
            setWinner("Wow it's a draw!");
        } else {
            setWinner('Player Two Win!');
        }
    }

    useEffect(() => {
        setPlayerOneIsLoading(true);
        setPlayerTwoIsLoading(true);
        Promise.all([
            summaryData(playerOneNickname),
            summaryData(playerTwoNickname),
        ])
            .then(([playerOne, playerTwo]) => {
                setPlayerOneResult(playerOne);
                setPlayerTwoResult(playerTwo);
                setPlayerOneIsLoading(false);
                setPlayerTwoIsLoading(false);
                whoIsWinner(playerOne.score.value, playerTwo.score.value);
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <>
            <Row>
                <Col span={24}>
                    {winner
                        ? <h1 className="title">{winner}</h1>
                        : <Skeleton className="title-placeholder" paragraph={{ rows: 0, }} />
                    }
                </Col>
            </Row>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={11}>
                    <PlayerCard
                        playerName={'Player One'}
                        data={playerOneResult ? playerOneResult.profile : {}}
                        isLoading={playerOneIsLoading}
                    >
                        { playerOneResult && <PlayerCardConent user={playerOneResult} /> }
                    </PlayerCard>
                </Col>
                <Col xs={24} md={2} className='buttonHolder'></Col>
                <Col xs={24} md={11}>
                        <PlayerCard
                            playerName={'Player Two'}
                            data={playerTwoResult ? playerTwoResult.profile : {}}
                            isLoading={playerTwoIsLoading}
                        >
                        { playerTwoResult && <PlayerCardConent user={playerTwoResult} /> }
                        </PlayerCard>
                </Col>
            </Row>
            <Row className="play-again">
                {playerOneResult && playerTwoResult &&
                    <Button
                        shape="round"
                        type="primary"
                        size="large"
                        onClick={()=>navigate('/battle')}
                    >
                        Play again
                    </Button>
                }
            </Row>
        </>
    );
}

export default Results;