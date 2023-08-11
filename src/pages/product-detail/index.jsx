import {Component} from "react";
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import {AtTag} from 'taro-ui'

export default class Index extends Component {


  componentWillMount() {
    // console.log("参数值：",getCurrentInstance().router.params.id);
    //console.log("从主页传递过来的商品详情数据：",Taro.getCurrentInstance().preloadData);
    this.setState({
      product: Taro.getCurrentInstance().preloadData
    })
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      product: {},
      num: 0,
      showDot: false
    }
  }

  onClick() {
    console.log("选中");
  }

  addcart() {
    this.state.num++;
    if (this.state.num != 0) {
      this.setState({
        showDot: true
      })
    }
  }


  render() {
    const tempProduct = this.state.product;

    return (
      <View className='product-detail'>
        <View className='head'>
          <image src='http://g1.juntaitec.cn/images/101.jpg'></image>
        </View>

        <View className='secondName'>
          <Text className='text-one'>暴打西瓜波波</Text>
          <Text className='text-two'>【巨清爽】无仔西瓜+有机绿茶，可冰沙可水果茶</Text>
        </View>

        <View className='line'></View>

        <View className='choice'>

          <View className='temperature'>
            <Text>温度</Text>
            <View className='tem-button'>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                沙冰
              </AtTag>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                常规冰
              </AtTag>
              <AtTag
                name='tag-2'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                水果茶
              </AtTag>
            </View>
          </View>

          <View className='sweetness'>
            <Text>甜度</Text>
            <View className='sweet-button'>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                常规糖
              </AtTag>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                7分糖
              </AtTag>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                五分糖
              </AtTag>
            </View>
          </View>
          <View className='material'>
            <Text>加料</Text>
            <View className='material-button'>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                椰果
              </AtTag>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                寒天
              </AtTag>
              <AtTag
                name='tag-1'
                type='primary'
                circle
                onClick={this.onClick.bind(this)}
              >
                芋圆
              </AtTag>
            </View>
          </View>
        </View>

        <View className='line'></View>

        <View className='detail'>
          <Text className='text-one'>商品详情</Text>
          <Text className='text-three'>暂无详情</Text>
        </View>

        <View className='grey-block'></View>


        {/*// <!--底部加入购物车-->*/}
        <View className='bottom'>
          <View className='up'>
            <View className='up-left'>
              <View className='price'>
                <View className='price-left'>￥11.00</View>
                <View className='vip'>
                  <View className='vip-left'>vip</View>
                  <View className='vip-right'>￥10.45</View>
                </View>
              </View>
              <View className='in-text'>常规冰+常规糖</View>
            </View>

            <View className='up-right'>
              <View className='minus-circle'>
                <View className='minus'></View>
              </View>
              <View className='num'>0</View>
              <View className='add-circle'>
                <View className='add-horizontal'></View>
                <View className='add-vertical'></View>
              </View>
            </View>
          </View>

          <View className='down'>
            <View className='left'>
              <View className='at-icon at-icon-external-link'>
                <View className='share'>分享</View>
              </View>
              <View className='vertical-line'></View>
              <View className='at-icon at-icon-shopping-cart'>
                <View className='shoppingCart'>购物车</View>
              </View>
            </View>

            <View className='right'>
              <View className='button' onClick={this.addcart.bind(this)}>加入购物车</View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
