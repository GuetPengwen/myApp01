import {Component} from "react";
import {View, Swiper, SwiperItem, ScrollView, Text} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import TabBar from '../common/Index'


export default class Index extends Component {

  constructor() {
    super();
    this.state={
      productList: []
    }
  }
  componentDidMount() {
    let _this=this;
    Taro.request({
      url:'https://www.juntaitec.cn/api/productList',
     // url: 'https://www.juntaitec.cn/api/productList', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        _this.setState({
          productList: res.data.data
        })
      }
    })
  }
  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }
  showProductDetail(id){
    console.log("查看商品的详情");
    // 跳转到商品详情页面
    /*
    1、如果点击某个商品的时候，怎样才能把数组中对应的商品对象拿到？
    遍历数组（进行for循环）
     */
    let p=null;
    this.state.productList.map((product)=>{
      if(id==product.id){
        p=product;
      }
    })

    Taro.preload(p);//把当前点击的商品信息进行预加载
    //跳转到商品详情页面
  //  Taro.navigateTo({url:'/pages/product-detail/index'})
    Taro.reLaunch({
      url: '/pages/product-detail/index'})
  }
  render() {
    const scrollTop = 0
    const Threshold = 20

    return (
      <View className='index'>
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
            <image src='http://43.139.94.243/images/ban1.jpg'></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src='http://43.139.94.243/images/ban2.jpg'></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src='http://43.139.94.243/images/ban3.jpg'></image>
          </SwiperItem>
        </Swiper>
        <ScrollView
          className='scrollview'
          scrollY
          enableFlex='true'
          scrollWithAnimation
          scrollTop={scrollTop}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          {
            this.state.productList.map((product)=>{
              return(
                <View className='goods-box' onClick={this.showProductDetail.bind(this,product.id)}>
                  <image className='goods-pic' src={product.src}></image>
                  <View className='goods-title'>{product.title}</View>
                  <View className='goods-titleTwo'>{product.secondtitle}</View>
                  <View className='row'>
                    <View className='goods-price'>{product.price.toFixed(2)}</View>
                    <Text className='goods-btn'>看相似</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
        <TabBar current={0}></TabBar>
      </View>
    )
  }
}
