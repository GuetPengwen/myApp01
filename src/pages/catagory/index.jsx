import {Image, View,Text,Swiper,ScrollView, SwiperItem} from '@tarojs/components'

import './index.scss'
import TabBar from '../common/Index'
import { AtTabs, AtTabsPane,AtTag ,AtIcon,} from 'taro-ui'
import {Component} from "react";
import Taro from "@tarojs/taro";

export default class Index extends Component{


  componentDidMount() {
    let _this=this;
    Taro.request({
      //  url:'http://g1.juntaitec.cn/productList',
      url:'https://676f575b25.imdo.co/productList',
      //  url: 'https://www.juntaitec.cn/api/productList', //仅为示例，并非真实的接口地址
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

  constructor() {
    super();
    this.state={
      current:0,
      br:'\n',
      productList: [],
      firstCategoryArr: [
        {id: 1, title: "水果鲜茶"},
        {id: 2, title: "茶香柠柠"},
        {id: 3, title: "醇香奶茶"},
        {id: 4, title: "鲜牛乳/鲜奶茶"},
        {id: 5, title: "咖啡"},
        {id: 6, title: "鲜萃果汁"},
        {id: 7, title: "茶与芝士"},
        {id: 8, title: "加料"},
      ],
      secondCategoryArr: [
      ],
      active:false
    }
  }
  handleClick=(index)=>{
    console.log("当前index：",index)
    //修改属性值
    this.setState({
      current:index
    })
  }

  render() {
    return (
      <View className='catagory'>

        <View className='title'>
          <Text className='title-word'>校内商业街店（花江，尧山）</Text>
          <AtIcon value='chevron-right' size='30' color='#808080'></AtIcon>
          <View  className='zq-wm'>
            <AtTag  type='primary' circle active='true' className='zq'>自取</AtTag>
            <AtTag  type='primary' circle className='wm'>外卖</AtTag>
          </View>
          <View className='md'>

            <Text className='md-word'>门店信息</Text>
            <AtIcon value='chevron-down' size='20' color='#808080'></AtIcon>
          </View>
        </View>



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
            <image src='https://g1.juntaitec.cn/images/11.jpg'></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src='https://g1.juntaitec.cn/images/22.jpg'></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src='https://g1.juntaitec.cn/images/33.jpg'></image>
          </SwiperItem>
        </Swiper>

        <AtTabs
          current={this.state.current}
          scroll
          height='700px'
          tabDirection='vertical'
          tabList={this.state.firstCategoryArr}
          onClick={this.handleClick.bind(this)}
        >
          {
            this.state.firstCategoryArr.map((firstLeveMenu)=>{
              return(
                <AtTabsPane tabDirection='vertical' current={this.state.current} index={0} className='tabsPane'>
                  {
                    this.state.productList.map((secondLeveMenu)=>{
                      //  console.log("ccccccc")
                      //判断二级菜单的pId是否等于一级菜单的Id
                      if(secondLeveMenu.pid==firstLeveMenu.id){
                        return(
                          <View className='paneContent' onClick={this.showProductDetail.bind(this,secondLeveMenu.id)}>
                            <Image className='left-image' style='height: 80px;width: 80px' src={secondLeveMenu.image}></Image>

                            <Text className='cart-title'>{secondLeveMenu.name}</Text>
                            <Text>{this.state.br}</Text>
                            <Text className='cart-secondname'>{secondLeveMenu.secondname}</Text>
                            <Text className='cart-price'>￥ {secondLeveMenu.price}</Text>
                          </View>
                        )
                      }
                    })
                  }
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
        <TabBar current={1}></TabBar>
      </View>
    )
  }
}
