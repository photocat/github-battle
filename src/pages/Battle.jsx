import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Player as Lottie } from '@lottiefiles/react-lottie-player';
import { Button, Col, Row } from "antd";
import Player from "../components/Player";
import { getUserData } from "../api";

const Battle = () => {
    const [githubUserDataOne, setGithubUserDataOne] = useState(null);
    const [githubUserDataTwo, setGithubUserDataTwo] = useState(null);
    const [playerOneIsLoading, setPlayerOneIsLoading] = useState(false);
    const [playerTwoIsLoading, setPlayerTwoIsLoading] = useState(false);
    const animationRef = useRef(null);

    const navigate = useNavigate();

    const handlePlayerState = async (nickname, player) => {
        if (player === 'Player One') {
            setPlayerOneIsLoading(true);
        } else {
            setPlayerTwoIsLoading(true);
        }
        getUserData(nickname)
            .then((data) => {
                if (player === 'Player One') {
                    setGithubUserDataOne(data);
                    setPlayerOneIsLoading(false);
                } else {
                    setGithubUserDataTwo(data)
                    setPlayerTwoIsLoading(false);
                }
            })
            .catch((error) => {
                console.log(error.message)
                if (player === 'Player One') {
                    setPlayerOneIsLoading(false);
                } else {
                    setPlayerTwoIsLoading(false);
                }
            })
    }

    const handlePlayerStateReset = (player) => {
        if (player === 'Player One') {
            setGithubUserDataOne(null);
        } else {
            setGithubUserDataTwo(null)
        }
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <h1 className="title">Lets battle!</h1>
                </Col>
            </Row>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={10}>
                    <Player
                        playerName='Player One'
                        handlePlayerState={handlePlayerState}
                        reset={handlePlayerStateReset}
                        isLoading={playerOneIsLoading}
                        data={githubUserDataOne}
                    />
                </Col>
                <Col xs={24} md={4} className='buttonHolder'>
                    {githubUserDataOne && githubUserDataTwo &&
                        <Lottie
                            ref={animationRef}
                            autoplay={true}
                            src="https://assets7.lottiefiles.com/packages/lf20_xvqam5qh.json"
                            style={{ height: 'auto', width: '100%' }}
                        ></Lottie>
                    }
                </Col>
                <Col xs={24} md={10}>
                    <Player
                        playerName='Player Two'
                        handlePlayerState={handlePlayerState}
                        reset={handlePlayerStateReset}
                        isLoading={playerTwoIsLoading}
                        data={githubUserDataTwo}
                        keepLastFrame={true}
                    />
                </Col>
            </Row>
             <Row className="play-again">
                {githubUserDataOne && githubUserDataTwo &&
                    <Button
                            type="primary"
                            shape="round"
                            size='large'
                            onClick={() => navigate(
                                {
                                    pathname: '/battle/results',
                                    search: '?player1=' + githubUserDataOne.login + '&player2=' + githubUserDataTwo.login
                                }
                            )}
                        >
                            Battle
                    </Button>
                }
            </Row>
        </>
    );
}

export default Battle;