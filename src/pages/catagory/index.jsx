import {Image, View,Text,Swiper,ScrollView, SwiperItem} from '@tarojs/components'

import './index.scss'
import TabBar from '../common/Index'
import { AtTabs, AtTabsPane,AtTag ,AtIcon} from 'taro-ui'
import {Component} from "react";
import Taro from "@tarojs/taro";

export default class Index extends Component{


  componentDidMount() {
    let _this=this;
    Taro.request({
      //  url:'https://676f575b25.imdo.co/productList',
      url: 'https://www.juntaitec.cn/api/productList', //仅为示例，并非真实的接口地址
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
        {pId: 1, id: 111, title: "水果鲜茶1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'},
        {pId: 1, id: 112, title: "水果鲜茶2",img: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'},
        {pId: 1, id: 113, title: "水果鲜茶3",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 1, id: 115, title: "水果鲜茶4",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 1, id: 116, title: "水果鲜茶5",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 2, id: 211, title: "茶香柠柠1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'},
        {pId: 2, id: 212, title: "茶香柠柠2",img: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'},
        {pId: 2, id: 213, title: "茶香柠柠3",img: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png'},
        {pId: 3, id: 311, title: "MINI相机1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'},
        {pId: 3, id: 312, title: "MINI相机2",img: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'},
        {pId: 3, id: 313, title: "MINI相机3",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 4, id: 411, title: "电脑硬盘1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'},
        {pId: 4, id: 412, title: "电脑硬盘2",img: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'},
        {pId: 4, id: 413, title: "电脑硬盘3",img: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png'},
        {pId: 5, id: 511, title: "鼠标键盘1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'},
        {pId: 5, id: 512, title: "鼠标键盘2",img: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'},
        {pId: 5, id: 513, title: "鼠标键盘3",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 6, id: 611, title: "平板电脑1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'},
        {pId: 6, id: 612, title: "平板电脑2",img: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'},
        {pId: 6, id: 613, title: "平板电脑3",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
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
            <AtTag  type='primary' circle active='true'>自取</AtTag>
            <AtTag  type='primary' circle>外卖</AtTag>
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
            <image src={require('./11.jpg')}></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src={require('./22.png')}></image>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <image src={require('./33.png')}></image>
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
                    this.state.secondCategoryArr.map((secondLeveMenu)=>{
                      //  console.log("ccccccc")
                      //判断二级菜单的pId是否等于一级菜单的Id
                      if(secondLeveMenu.pId==firstLeveMenu.id){
                        return(
                          <View className='paneContent' onClick={this.showProductDetail.bind(this,secondLeveMenu.id)}>
                            <Image className='left-image' style='height: 80px;width: 80px' src={secondLeveMenu.img}></Image>

                            <Text className='cart-title'>{secondLeveMenu.title}</Text>
                            <Text>{this.state.br}</Text>
                            <Text className='cart-secondname'>西瓜/绿茶/脆波波</Text>
                            <Text className='cart-price'>￥ 13</Text>
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
