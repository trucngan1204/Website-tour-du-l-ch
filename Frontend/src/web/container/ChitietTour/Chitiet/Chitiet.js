import React from 'react'
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import 'antd/dist/antd.css';
import Danhgia from '../Danhgia/Danhgia';
import Chitiettour from '../DetailTour/DetailTour';
import Dichvudikem from '../Dichvudikem/Dichvudikem';
import Chitietgia from '../Gia/Chitietgia';
import "./Chitiet.css"
function Detail(props) {
    const { TabPane } = Tabs;
    const renderTabBar = (props, DefaultTabBar) => (
        <Sticky bottomOffset={80}>
            {({ style }) => (
                <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
            )}
        </Sticky>
    );
    return (
        <div className="mb-5 ">
            <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="Chi tiết tour" key="1" >
                        <Chitiettour id={props.id} />
                    </TabPane>
                    <TabPane tab="Giá" key="2">
                        <Chitietgia id={props.id} />
                    </TabPane>
                    <TabPane tab="Dịch vụ đi kèm" key="3">
                        <Dichvudikem id={props.id} />
                    </TabPane>
                    <TabPane tab="Đánh giá khách hàng" key="6">
                        <Danhgia id={props.id} />
                    </TabPane>
                </Tabs>
            </StickyContainer>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
