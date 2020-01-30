import React from 'react'
// import Search from './Search'
// import AddGroup from './AddGroup'
import Entry from './Entry'

const Group = (props) => {
    let groups = []
    for(let i in props.storage){
        groups.push(props.storage[i].group)
    }
    // 중복 제거
    groups = [...new Set(groups)]

    return (
        <div>
            <div>
                <input type="text" placeholder="검색" />
                <button className="btn">
                    <span className="glyphicon glyphicon-search"></span>
                </button>
            </div>

            <div>
                <input type="text" placeholder="input group" onChange={e => props.handleChange('', e.target.value)}></input>
                <span className="click-add-group mousePointer float-right">
                    <button onClick={props.handleAddContent.bind(this)}>+ 목록 추가</button>
                </span>
            </div>

            <div>
                {groups.map(group => (
                    <Entry entry={group} />
                ))}
            </div>

        </div>
    )
}

export default Group