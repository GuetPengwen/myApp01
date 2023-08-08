import {Component} from "react";
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index'
import { AtTabs, AtTabsPane } from 'taro-ui'

export default class Index extends Component {


  componentWillMount(){
    // console.log("参数值：",getCurrentInstance().router.params.id);
    //console.log("从主页传递过来的商品详情数据：",Taro.getCurrentInstance().preloadData);
    this.setState({
      product: Taro.getCurrentInstance().preloadData
    })
  }


  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      product: {},
      num: 0,
      showDot:false
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  addcart(){
    this.state.num++;
    if(this.state.num!=0){
      this.setState({
        showDot:true
      })
    }
  }
  showCart(){
    console.log("查看购物车");
    Taro.reLaunch({
      url: '/pages/cart/index'})

  }
  render() {
    const tabList = [{ title: '商品详情' }, { title: '产品参数' }]
    const tempProduct = this.state.product;

    return (
      <View className='product-detial'>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className='swiper-item'>
            <image src={tempProduct.imageOne}></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src={tempProduct.imageTwo}></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src={tempProduct.imageThree}></image>
          </SwiperItem>
        </Swiper>
        {/*商品标题价格*/}
        <View className='box-demo'>
          <Text className='title'>{tempProduct.title}{tempProduct.secondtitle}</Text>
          <Text className='price'>￥{tempProduct.price}</Text>
        </View>
        {/* <!--商品详情展示-->*/}
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <Image mode='widthFix' src={tempProduct.productDetail}></Image>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <Image mode='widthFix' src={tempProduct.productParameter}></Image>
          </AtTabsPane>
        </AtTabs>
         {/*// <!--底部加入购物车-->*/}
        <View className='bottom'>
          <View className='left'>
            <Image src='http://43.139.94.243/images/jindian.png' style='height:80rpx;width:90rpx'></Image>
            <Image src='http://43.139.94.243/images/cart.png' style="height:90rpx;width:90rpx" onClick={this.showCart.bind(this)}></Image>
            {this.state.showDot && <Text className='carts-icon-num'>{this.state.num}</Text>}

          </View>
          <View className='right'>
            <Text className='textone' onClick={this.addcart.bind(this)}>加入购物车</Text>
          </View>
          <View className='right'>
            <Text className='texttwo'>联系客服</Text>
          </View>
        </View>

      </View>
    )
  }
}
