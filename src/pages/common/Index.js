
import {Component} from "react";
import { View, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui'
import Taro from "@tarojs/taro";


export default class Index extends Component {

  handleClick(current){
    /*
    如果current是0，则跳转到首页
    如果current是1，则跳转到分类
    如果current是2，则跳转到购物车
     */
    if(current==0){
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    }else if (current==1){
      Taro.reLaunch({
        url: '/pages/catagory/index'
      })
    }else if (current==2){
      Taro.reLaunch({
        url: '/pages/cart/index'
      })
    }else if (current==3){
      Taro.reLaunch({
        url: '/pages/me/index'
      })
    }

  }


  render(){
    let BASE_URL='http://43.139.94.243/icon';
    return(
      <View className='index'>
      <AtTabBar
        fixed
        tabList={[
          {title: '首页', image: `${BASE_URL}/index.png`, selectedImage: `${BASE_URL}/index0.png`},
          {title: '分类', image: `${BASE_URL}/sort.png`, selectedImage: `${BASE_URL}/sort0.png`},
          {title: '购物车', image: `${BASE_URL}/cart.png`, selectedImage: `${BASE_URL}/cart0.png`},
          {title: '我的', image: `${BASE_URL}/me.png`, selectedImage: `${BASE_URL}/me0.png`}
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.props.current}
      />
      </View>
      )

  }

}
