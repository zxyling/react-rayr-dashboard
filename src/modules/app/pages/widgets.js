/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React from 'react';
import {Box, Row, Col} from 'components';

const {Header, Body} = Box;

export default () => {

    return (
        <Row>
            <Col md={12}>
                <Box widget={true}>
                    <Header border={true}>
                        <h3 className="box-title">组件元件</h3>
                    </Header>
                    <Body>
                        Is this template really for free? That's unbelievable!
                    </Body>
                </Box>
            </Col>
        </Row>
    )
};
