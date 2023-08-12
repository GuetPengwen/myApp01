import {Component} from "react";
import {View, Swiper, SwiperItem, Button} from '@tarojs/components'
import './index.scss'
import TabBar from '../common/index'
import { AtRate } from 'taro-ui'


export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {

    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }



  render(){

  return (
    <View className='index'>
      <Swiper
        className='swiper'
        vertical={false}
        circular
        autoplay
      >
        <SwiperItem className='swiper-item'>
          <image src='https://g1.juntaitec.cn/images/3.jpg'></image>
        </SwiperItem>
        <SwiperItem className='swiper-item'>
          <image src='https://g1.juntaitec.cn/images/102.jpg'></image>
        </SwiperItem>
        <SwiperItem className='swiper-item'>
          <image src='https://g1.juntaitec.cn/images/101.jpg'></image>
        </SwiperItem>
      </Swiper>

      <Button className='btn1' type='default'>
        茶C社群获取【专属优惠券口令】
        <text className='bte1'>-输入口令-</text>
      </Button>
      <Button className='btn2' type='default'>
        <text className='bte2-1'>点亮计划</text>
        <text className='bte2-2'>集满5单即可解锁半价券</text>
        <AtRate
          size='30'
          margin='50'
          value={this.state.value}

        />
      </Button>
      <View className='BTN'>
        <Button className='btn3-1'>
          <image class='in' src='https://g1.juntaitec.cn/images/index3-3.jpg' onClick={this.jumpToOrder}></image>
        </Button>
        <Button className='btn3-2' >
          <image class='out' src='https://g1.juntaitec.cn/images/index3-2.jpg' onClick={this.jumpToOrder}></image>
        </Button>
      </View>

      <View className='BTN2'>
        <Button className='btn4-1'>
          <image class='tu' src='https://g1.juntaitec.cn/images/index4-1.jpg' onClick={this.jumpToOrder}></image>
        </Button>
        <Button className='btn4-2' >
          <image class='tu' src='https://g1.juntaitec.cn/images/index4-2.jpg' onClick={this.jumpToOrder}></image>
        </Button>
        <Button className='btn4-3'>
          <image class='tu' src='https://g1.juntaitec.cn/images/index4-3.jpg' onClick={this.jumpToOrder}></image>
        </Button>
        <Button className='btn4-4' >
          <image class='tu' src='https://g1.juntaitec.cn/images/index4-2.jpg' onClick={this.jumpToOrder}></image>
        </Button>
      </View>
      <TabBar current={0}></TabBar>
    </View>
   )
 }
}

