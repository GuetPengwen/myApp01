import { View, Text ,Icon,Image} from '@tarojs/components'

import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import TabBar from '../common/Index'
import {Component} from "react";

export default class Index extends Component {


  componentDidMount() {
    let _this=this;
    Taro.request({
      url:'https://676f575b25.imdo.co/productList',
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
  constructor () {
    super(...arguments)
    this.state = {
      productList: [],
      current: 0,
      product: {},
      num: 0,
      sum:0
    }
  }
reduce(){
    console.log("减一");
    if(this.state.num!=0){
      this.state.num--;
      this.setState({
      })
    }


}
add(){
  console.log("加一");
  this.state.num++;
  this.setState({

  })
}
 /* totalPrice(){
    console.log("结算");
    this.state.productList.map((product)=>{
      if(this.state.num!=0){
        this.state.sum+=this.state.num*product.price;
      }
    })
    this.setState({
    })
}
onClick={this.totalPrice.bind(this)}
*/
  //选择
  select(e){
    console.log("选择");
    const index=e.currentTarget.dataset.id;
      let p=this.state.productList;
      const seclected=productList[id].selected;




    this.state.productList.splice(id)
    this.setState({
    })
  }
  //全选
  selectAll(e){
    console.log("全选");
    var that = this
    var allSelect = e.currentTarget.dataset.select//判断是否选中 circle是 success否
    var newList = that.state.productList
    if (allSelect == "circle") {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "success"
      }
      var select = "success"
    } else {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "circle"
      }
      var select = "circle"
    }
    this.setState({
      productList: newList,
      allSelect: select
    })
  }
  //删除
  delete(id){
    console.log("删除");
    this.state.productList.splice(id)
    this.setState({
    })
  }
  //清空购物车
  clearcar(id){
    console.log("清空购物车");
    this.state.productList.splice(id)
    this.setState({
    })
  }
render() {
  this.state.productList.map((product)=>{
    if(this.state.num!=0){
      this.state.sum+=this.state.num*product.price;
    }
  })
  return (
    <View className='cart'>
      <View>
    {
      this.state.productList.map((product)=> {

        return (
              <View data-id="{{item.id}}" className='icon-box' data-index="{{index}}">
                <View class='icon' onClick={this.select.bind(this)}>
                  <Icon type="success" color="#ff0000" size="22" bindtap="selectIcon" data-index="{{index}}"/>
                  <Icon type="circle" bindtap="selectIcon" size="22" data-index="{{index}}"/>
                </View>
                <View>
                  {/*// <!--商品信息-->*/}
                  <View className='left-image'>
                    <Image className='addcart-image'
                           src={product.src}></Image>
                  </View>
                  <View className='left-detail'>
                    <Text className='cart-title'>{product.title}</Text>
                    <Text className='cart-price'>￥{product.price.toFixed(2)}</Text>
                    <Text className="input" onClick={this.reduce.bind(this)}>-</Text>
                    <Text className="input cart-amount">{this.state.num}</Text>
                    <Text className="input" onClick={this.add.bind(this)}>+</Text>
                  </View>
                  {/*// <!--删除图标-->*/}
                  <View className='right' onClick={this.delete.bind(this)}>
                    <Image src='http://43.139.94.243/images/delete.png'></Image>
                  </View>
                </View>
              </View>
            )
            })
            }
      </View>
            {/*// <!-- 底部 -->*/}
            <View className='cart-total'>
              <Text className='total-text'>合计：</Text>
              <Text className='total-color'>￥{this.state.sum.toFixed(2)}元</Text>
            </View>
            <View className='total-bottom' onClick={this.selectAll.bind(this)}>
              <Icon className='cart-icon' type="success" color="#ff0000" size="22" bindtap="select"
                    data-index="{{index}}"/>
              <Icon className='cart-icon' size="22" bindtap="select" />
              <Text className="checked-all" >全选</Text>
              <View className="clear-car">
                <text className="pay" bindtap="goPay">结算</text>
              </View>
              <View className='clear-car'>
                <text className='clear-text' onClick={this.clearcar.bind(this)}>清空购物车</text>
              </View>
            </View>
          </View>
        )

      }
    }


