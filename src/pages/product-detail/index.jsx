import {Component} from "react";
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import Taro from "@tarojs/taro";
import './index.scss'
import {AtTag,AtButton, AtActionSheet, AtActionSheetItem} from 'taro-ui'

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
      temTags:['常规冰'],
      sweetTags:['常规糖'],
      materialTags:['椰果'],
      activeTags:[],
      price:11,
      isActionSheetOpened: false,
    }
  }
  handleClickShare() {
    this.setState({ isActionSheetOpened: true });
  }

  handleCancel = () => {
    this.setState({ isActionSheetOpened: false });
  }


  handleAddClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      price: (prevState.count + 1) * prevState.price,
    }));
  };

  handleMinusClick = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
        price: (prevState.count - 1) * prevState.price,
      }));
    }
  };


  onClick(tagName, tagType) {
    const newState = {};
    const tagStateKey = `${tagType}Tags`;

    if (!this.state[tagStateKey].includes(tagName)) {
      newState[tagStateKey] = [tagName];
    } else {
      newState[tagStateKey] = [];
    }

    this.setState(newState, () => {
      this.updateActiveTags(); // 在更新后立即更新活动标签
    });
  }

  handleTagClick(tagName) {
    const { materialTags } = this.state;
    const updatedMaterialTags = materialTags.includes(tagName)
      ? materialTags.filter(tag => tag !== tagName) // 如果已选中，则从数组中移除
      : [...materialTags, tagName]; // 如果未选中，则添加到数组中

    this.setState({
      materialTags: updatedMaterialTags,
    }, () => {
      this.updateActiveTags(); // 在更新后立即更新活动标签
    });
  }

  updateActiveTags() {
    const { temTags, sweetTags, materialTags } = this.state;
    const activeTags = [...temTags, ...sweetTags, ...materialTags];
    this.setState({ activeTags });
  }



  addCart() {
    console.log('所选标签:', this.state.activeTags);
    console.log("count>>>",this.state.count);
    console.log('总价:', this.state.price);
  }


  render() {
    const selectedTagsText = this.state.activeTags.join('+');
    const isTagsEmpty = this.state.temTags.length === 0||this.state.sweetTags.length===0;
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
                name='常规冰'
                type='primary'
                circle
                active={this.state.temTags.includes('常规冰')}
                onClick={() => this.onClick('常规冰','tem')}
              >
                常规冰
              </AtTag>
              <AtTag
                name='沙冰'
                type='primary'
                circle
                active={this.state.temTags.includes('沙冰')}
                onClick={() => this.onClick('沙冰','tem')}
              >
                沙冰
              </AtTag>
              <AtTag
                name='水果茶'
                type='primary'
                circle
                active={this.state.temTags.includes('水果茶')}
                onClick={() => this.onClick('水果茶','tem')}
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
                active={this.state.sweetTags.includes('常规糖')}
                onClick={() => this.onClick('常规糖','sweet')}
              >
                常规糖
              </AtTag>
              <AtTag
                name='7分糖'
                type='primary'
                circle
                active={this.state.sweetTags.includes('7分糖')}
                onClick={() => this.onClick('7分糖','sweet')}
              >
                7分糖
              </AtTag>
              <AtTag
                name='5分糖'
                type='primary'
                circle
                active={this.state.sweetTags.includes('5分糖')}
                onClick={() => this.onClick('5分糖','sweet')}
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
                active={this.state.materialTags.includes('椰果')}
                onClick={() => this.handleTagClick('椰果')}
              >
                椰果
              </AtTag>
              <AtTag
                name='寒天'
                type='primary'
                circle
                active={this.state.materialTags.includes('寒天')}
                onClick={() => this.handleTagClick('寒天')}
              >
                寒天
              </AtTag>
              <AtTag
                name='芋圆'
                type='primary'
                circle
                active={this.state.materialTags.includes('芋圆')}
                onClick={() => this.handleTagClick('芋圆')}
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
              <View className='in-text'>{selectedTagsText}</View>
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
            <AtActionSheet
              isOpened={this.state.isActionSheetOpened}
              cancelText='取消'
              onCancel={this.handleCancel}
            >
              <AtActionSheetItem>
                发送给朋友
              </AtActionSheetItem>
              <AtActionSheetItem>
                生成海报
              </AtActionSheetItem>
              <AtActionSheetItem>
                生成短链接
              </AtActionSheetItem>
            </AtActionSheet>
            <View className='left'>
              <View className='at-icon at-icon-external-link' onClick={() => this.handleClickShare()}>
                <View className='share'>分享</View>
              </View>
              <View className='vertical-line'></View>
              <View className='at-icon at-icon-shopping-cart'>
                <View className='shoppingCart'>购物车</View>
              </View>
            </View>

            <View className='right'>
              <AtButton
                className='button'
                type='primary'
                disabled={isTagsEmpty}
                onClick={this.addCart.bind(this)}>加入购物车
              </AtButton>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
