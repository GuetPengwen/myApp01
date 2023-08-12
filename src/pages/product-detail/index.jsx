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
      count:1,
      activeTags:[],
      price:11,
      totalPrice:0
    }
  }

  handleAddClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      totalPrice: (prevState.count + 1) * prevState.price,
    }));
  };

  handleMinusClick = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
        totalPrice: (prevState.count - 1) * prevState.price,
      }));
    }
  };


  onClick(tagName) {
    this.setState((prevState) => {
      const activeTags = [...prevState.activeTags];
      const tagIndex = activeTags.indexOf(tagName);

      if (tagIndex === -1) {
        activeTags.push(tagName);
      } else {
        activeTags.splice(tagIndex, 1);
      }

      return { activeTags };
    });
  }

  addCart() {
    console.log('所选标签:', this.state.activeTags);
    console.log("count>>>",this.state.count);
    console.log('总价:', this.state.totalPrice);
  }


  render() {
    return (
      <View className='product-detail'>
        <View className='head'>
          <image src='https://img2.baidu.com/it/u=3483381524,4210975000&fm=253&fmt=auto&app=120&f=JPEG?w=661&h=500'></image>
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
                name='沙冰'
                type='primary'
                circle
                active={this.state.activeTags.includes('沙冰')}
                onClick={() => this.onClick('沙冰')}
              >
                沙冰
              </AtTag>
              <AtTag
                name='常规冰'
                type='primary'
                circle
                active={this.state.activeTags.includes('常规冰')}
                onClick={() => this.onClick('常规冰')}
              >
                常规冰
              </AtTag>
              <AtTag
                name='水果茶'
                type='primary'
                circle
                active={this.state.activeTags.includes('水果茶')}
                onClick={() => this.onClick('水果茶')}
              >
                水果茶
              </AtTag>
            </View>
          </View>

          <View className='sweetness'>
            <Text>甜度</Text>
            <View className='sweet-button'>
              <AtTag
                name='常规糖'
                type='primary'
                circle
                active={this.state.activeTags.includes('常规糖')}
                onClick={() => this.onClick('常规糖')}
              >
                常规糖
              </AtTag>
              <AtTag
                name='7分糖'
                type='primary'
                circle
                active={this.state.activeTags.includes('7分糖')}
                onClick={() => this.onClick('7分糖')}
              >
                7分糖
              </AtTag>
              <AtTag
                name='5分糖'
                type='primary'
                circle
                active={this.state.activeTags.includes('5分糖')}
                onClick={() => this.onClick('5分糖')}
              >
                5分糖
              </AtTag>
            </View>
          </View>
          <View className='material'>
            <Text>加料</Text>
            <View className='material-button'>
              <AtTag
                name='椰果'
                type='primary'
                circle
                active={this.state.activeTags.includes('椰果')}
                onClick={() => this.onClick('椰果')}
              >
                椰果
              </AtTag>
              <AtTag
                name='寒天'
                type='primary'
                circle
                active={this.state.activeTags.includes('寒天')}
                onClick={() => this.onClick('寒天')}
              >
                寒天
              </AtTag>
              <AtTag
                name='芋圆'
                type='primary'
                circle
                active={this.state.activeTags.includes('芋圆')}
                onClick={() => this.onClick('芋圆')}
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
              <View className='minus-circle' onClick={this.handleMinusClick}>
                <View className='minus'></View>
              </View>
              <View className='num'>{this.state.count}</View>
              <View className='add-circle' onClick={this.handleAddClick}>
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
              <View className='button' onClick={this.addCart.bind(this)}>加入购物车</View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
