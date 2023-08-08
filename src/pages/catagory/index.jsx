import {Image, View,Text} from '@tarojs/components'

import './index.scss'
import TabBar from '../common/Index'
import { AtTabs, AtTabsPane } from 'taro-ui'
import {Component} from "react";

export default class Index extends Component{

  componentDidMount() {

  }

  constructor() {
    super();
    this.state={
      current:0,
      br:'\n',
      firstCategoryArr: [
        {id: 1, title: "手机产品"},
        {id: 2, title: "时尚耳机"},
        {id: 3, title: "MINI相机"},
        {id: 4, title: "电脑硬盘"},
        {id: 5, title: "鼠标键盘"},
        {id: 6, title: "平板电脑"},
        {id: 7, title: "手机产品"},
        {id: 8, title: "时尚耳机"},
        {id: 9, title: "MINI相机"},
        {id: 10, title: "电脑硬盘"},
        {id: 11, title: "鼠标键盘"},
        {id: 12, title: "平板电脑"},
        {id: 13, title: "手机产品"},
        {id: 14, title: "时尚耳机"},
        {id: 15, title: "MINI相机"},
        {id: 16, title: "电脑硬盘"},
        {id: 17, title: "鼠标键盘"},
        {id: 18, title: "平板电脑"},
      ],
      secondCategoryArr: [
        {pId: 1, id: 111, title: "手机产品1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'},
        {pId: 1, id: 112, title: "手机产品2",img: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'},
        {pId: 1, id: 113, title: "手机产品3",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 1, id: 115, title: "手机产品4",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 1, id: 116, title: "手机产品5",img: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        {pId: 2, id: 211, title: "时尚耳机1",img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'},
        {pId: 2, id: 212, title: "时尚耳机2",img: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'},
        {pId: 2, id: 213, title: "时尚耳机3",img: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png'},
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
      ]
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
                          <View className='paneContent'>
                            <Image style='height: 80px;width: 80px' src={secondLeveMenu.img}></Image>
                            <Text>{this.state.br}</Text>
                            <Text>{secondLeveMenu.title}</Text>
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
