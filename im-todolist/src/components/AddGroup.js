import React from 'react'
import GroupListEntry from './GroupListEntry'

const AddGroup = () => {
    return (
        <div>
            나의 목록
            <div className="group-list">
                <GroupListEntry />
            </div>
            <span className="click-add-group mousePointer">
                <button>+</button>
                목록 추가
            </span>
        </div>
    )
}

export default AddGroup