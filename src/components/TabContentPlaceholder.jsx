import { memo } from 'react';
import { Empty } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const TabContentPlaceholder = memo((props) => {
    console.log('Loader rendered');
    return (
        <Empty
            image={props.isLoading ? <LoadingOutlined style={{ fontSize: '75px' }} /> : Empty.PRESENTED_IMAGE_SIMPLE}
            description={props.isLoading ? 'Data is loading' : 'Data is empty'}
        />
    );
}, (prevProps, nextProps) => {
    return prevProps.isLoading === nextProps.isLoading;
});

export default TabContentPlaceholder;