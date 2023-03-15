import React from 'react'


const Messages = () => {
  return (
    <div id="sidebar">
    <div className="sidebar__compose">
      <a href="#" className="btn compose">
        Compose <span className="fa fa-pencil"></span>
      </a>
    </div>
    <ul className="sidebar__inboxes">
      <li ><a>
        <span className="fa fa-inbox"></span> Inbox
        <span className="item-count">Unread</span></a></li>
      <li><a>
        <span className="fa fa-paper-plane"></span> Sent
        <span className="item-count">0</span></a></li>
      <li><a>
        <span className="fa fa-pencil-square-o"></span> Drafts
        <span className="item-count">0</span>
        </a></li>
      <li ><a>
        <span className="fa fa-trash-o"></span> Trash
        <span className="item-count">Total Deleted</span>
        </a></li>
    </ul>
  </div>
  )
}

export default Messages
