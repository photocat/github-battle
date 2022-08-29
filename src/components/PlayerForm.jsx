import { Button, Form, Input, Card, Spin } from 'antd';

const PlayerForm = (props) => {

    const onFinish = (values, name) => {
        props.handlePlayerState(values.username, name);
    }

    return (
         <Card
            title={props.playerName}
            headStyle={{ textAlign: 'center' }}
        >
            <Spin spinning={props.isLoading}>
                    <Form
                        name="player"
                        labelAlign='left'
                        onFinish={(values) => onFinish(values, props.playerName)}
                        autoComplete="off"
                        layout='vertical'
                    >
                        <Form.Item
                            label="Github user nickname"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input github user nickname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                </Form>
            </Spin> 
        </Card>
    );
}

export default PlayerForm;