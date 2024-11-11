import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "/React JS Project/Gemini_Clone/Images/assets";
import { Context } from "../../Context/context";

const Sidebar = () => {
  const [Extended, setExtended] = useState(false);
  const {onSent , PreviousPrompt , setRecentPrompt , NewChat  } = useContext(Context)

   
  return (
    <div className="Sidebar">
      <div className="Top">
        <img onClick={()=>setExtended(previous=>!previous)} className="Menu_icon" src={assets.menu_icon} alt="" />

        <div onClick={() =>NewChat()} className="New_chat">
          <img src={assets.plus_icon} alt="" />
          {Extended ? <p className="chat-text">New Chat</p> : null}
        </div>

        {Extended ? 
          <div className="Recent">
            <p className="Recent-Title">Recent</p>
            {PreviousPrompt.map((item, index) => {
                return (
                  <div key={index}  className="Recent-Entry">
                    <img className="Msg-icon" src={assets.message_icon} alt="" />
                    <p>{item.slice(0 , 20)}...</p>
                  </div>
                );
              })}
          </div>
         : null
        } 
      </div>

      <div className="Bottom">
        <div className="Bottom-item Recent-Entry">
          <img className="Question-icon " src={assets.question_icon} alt="" />
          {Extended ? <p>Help</p> : null }
        </div>

        <div className="Bottom-item Recent-Entry">
          <img className="Question-icon " src={assets.history_icon} alt="" />
          {Extended ? <p>Activity</p> : null }
        </div>

        <div className="Bottom-item Recent-Entry">
          <img className="Question-icon " src={assets.setting_icon} alt="" />
          {Extended ? <p>Settings</p> : null }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
