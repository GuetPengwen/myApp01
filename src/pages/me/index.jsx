import {Component} from "react";
import {View, Text, Image} from '@tarojs/components'
import TabBar from '../common/Index'
import './index.scss'
import { AtNavBar,AtGrid,AtTabBar, AtDivider} from 'taro-ui'
import { AtIcon } from 'taro-ui'
import { AtList, AtListItem } from "taro-ui"

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render() {
    let BASE_URL='http://43.138.164.107/images';
    return (
      <View className='me'>
        <View className='vip'>
          <AtIcon className='vip-icon' value='sketch' size='35' color='#FFD700'></AtIcon>
          <View className='v-title1'>会员下单95折</View>
          <View className='vip-title'>VIP</View>
          <View className='v-title2'>绑定手机号码</View>
          <view className="divider"></view>
          <Image className='myavatar' src={`${BASE_URL}/myavatar.jpg`}></Image>
          <Image className='yhjuan' src={`${BASE_URL}/yhjuan.jpg`}></Image>
          <Image className='yuer' src={`${BASE_URL}/yuer.jpg`}></Image>
          <View className='yhj'>0</View>
          <View className='yu'>0.00</View>
          <View className='keyong'>可用劵</View>
          <View className='yuee'>余额</View>
        </View>

        <AtList className='mylist'>
          <AtListItem title='我的订单' arrow='right' />
          <AtListItem title='我的地址' arrow='right' />
          <AtListItem title='我的优惠劵' arrow='right' />
        </AtList>


        <AtTabBar
          className='mytab'
          tabList={[
            { title: '点餐', iconType: 'shopping-cart'},
            { title: '订单', iconType: 'shopping-bag'},
            { title:'联系客服',iconType:'message'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />


        <TabBar current={3}></TabBar>
      </View>
    )
  }
}
