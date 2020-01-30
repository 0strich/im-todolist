import React from 'react'
import Entry from './Entry'

const Content = (props) => {
    let contents = []
    for(let i in props.storage){
        contents.push(props.storage[i].content)
    }

    return (
        <div className="inside-content">
            <div className="pad">
                <input type="text" placeholder="input text" onChange={e => props.handleChange(e.target.value, props.addStorage.group)}></input>
                <input type="text" placeholder="input group" onChange={e => props.handleChange(props.addStorage.text, e.target.value)}></input>
                <button className="add-content float-right" onClick={props.handleAddContent.bind(this)}>+</button>
            </div>
            <div className="complete-content">
                <span>0개 완료됨</span>
                <span className="float-right">보기</span>
            </div>
            <div className="not-complete-content">
                {contents.map(content => (
                    content !== '' ? 
                    <div>
                        <input className="float-left" type="radio"></input>
                        <Entry entry={content} />
                    </div> : null
                ))}
            </div>
        </div>
    )
}

export default Content