import React, { useContext } from 'react';
import './Main.css';
import { assets } from '/React JS Project/Gemini_Clone/Images/assets'
; // Corrected import path
import { Context } from '/React JS Project/Gemini_Clone/src/Context/context'

const Main = () => 
{

  const { onSent, RecentPrompt, showResult, loading, resultData, SetInput, input } = useContext(Context);

  return (
    <div className='Main'>
      <div className='Nav'>
        <p className='Main-Heading'>Gemini</p>
        <img src={assets.user_icon} alt='User Icon' /> {/* Added alt attribute */}
      </div>

      <div className='Main-Container'>
        {!showResult 
        ? (
          <>
            <div className='Great'>
              <p className='Great-text'><span>Hello, Aniket.</span></p>
              <p className='great-text2'>How Can I Help You Today?</p>
            </div>

            {/* Card section start */}
            <div className='Cards'>
              {/* Card 1 */}
              <div className='card'>
                <p>Suggest a place to visit in monsoon</p>
                <img src={assets.compass_icon} alt='Compass Icon' /> {/* Added alt attribute */}
              </div>
              {/* Card 2 */}
              <div className='card card2'>
                <p>Act like Mowgli from the Jungle Book and answer questions</p>
                <img src={assets.bulb_icon} alt='Bulb Icon' /> {/* Added alt attribute */}
              </div>
              {/* Card 3 */}
              <div className='card card3'>
                <p>What is meant by React JS?</p>
                <img src={assets.message_icon} alt='Message Icon' /> {/* Added alt attribute */}
              </div>
              {/* Card 4 */}
              <div className='card card4'>
                <p>Help design a database schema for a business</p>
                <img src={assets.code_icon} alt='Code Icon' /> {/* Added alt attribute */}
              </div>
            </div>
          </>
        ) : 
        (
          <div className='result'>
            <div className='resultTitle'>
              <img src={assets.user_icon} alt='User Icon' /> {/* Added alt attribute */}
              <p>{RecentPrompt}</p>
            </div>

            <div className='ResultData'>
              <img src={assets.gemini_icon} alt='Gemini Icon'  className='loader-icon'/> {/* Added alt attribute */}

              {loading ? <div className='loader'>
                <hr /><hr /><hr />  
              </div>
              :
              <p dangerouslySetInnerHTML={{ __html: resultData }} style={{color:"white"}}></p>
              }
            </div>
          </div>
        )}

        {/* Cards section end here */}
        <div className='Main-Bottom'>
          <div className='Search-Box'>
            <input
              onChange={(e) => SetInput(e.target.value)}
              value={input} type='text' placeholder='Enter a Prompt Here' className='input-text'/>
            <div>
              <img src={assets.gallery_icon} alt='Gallery Icon' /> {/* Added alt attribute */}
              <img src={assets.mic_icon} alt='Mic Icon' /> {/* Added alt attribute */}
              {input ? <img onClick={onSent} src={assets.send_icon} alt='Send Icon' /> : null} {/* Added alt attribute */}
            </div>
          </div>
          <div className='Bottom-info'>
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;
