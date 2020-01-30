import React, {Component} from 'react';
import Group from './Group'
import Content from './Content'
import storage from './storage/storage'

class App extends Component{
  constructor(props){
    super(props)
    this.addStorage = { text: '', group: 'new group' }
    this.handleAddContent = this.handleAddContent.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      storage: storage 
    }
  }

  // 알림 추가 기능
  // 입력창 변경시 addStorage에 적용
  handleChange(text=this.addStorage.text, group=this.addStorage.group) {
    this.addStorage.text = text
    this.addStorage.group = group 
  }
  // (+) 버튼 클릭시에 addStorage를 참조하여 this.storage 업데이트
  handleAddContent() {
    // this.state.storage 카피 & 업데이트
    let updateStorage = this.state.storage.map(el => Object.assign({}, el))
    updateStorage.push({
      content: this.addStorage.text,
      complete: false,
      group: this.addStorage.group
    })
    // this.state 변경 적용
    this.setState({storage: updateStorage})
  }


  render(){
    console.log(this.state.storage)
    return (
      <div className="app">
        <h1 id="title">My Todo List</h1>
        <div className="group col-md-4">
          <Group
            storage={this.state.storage}
            handleChange={this.handleChange}
            handleAddContent={this.handleAddContent}
          />
        </div>
        <div className="content col-md-8">
          <Content
            storage={this.state.storage}
            addStorage={this.addStorage}
            handleChange={this.handleChange}
            handleAddContent={this.handleAddContent}
          />
        </div>
      </div>
    );
  }
}

export default App;
