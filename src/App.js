
import { useState } from 'react';
import './App.css';

function App() {
    const [state,setState]  = useState(1)

    const action = (index)=>{
        setState(index)
        console.log(index)
    }

  return (
    <div className="App">
         <div className='container'>
            <div className='tabs'>
              <div className={`${state === 1 ? 'tab active-tab' : 'tab'}`} onClick={()=>action(1)} >Tab 1</div>
              <div className={`${state === 2 ? 'tab active-tab' : 'tab'}`} onClick={()=>action(2)} >Tab 1</div>
              <div className={`${state === 3 ? 'tab active-tab' : 'tab'}`}onClick={()=>action(3)} >Tab 1</div>
            </div>
            {/* contents  */}
            <div className='content'>
                <div className={`${state === 1 ? 'content active-content' : 'active-content'}`}><p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i</p></div>

                <div className={`${state === 2 ? 'content active-content' : 'active-content'}`}><p> is simply dummy text of the printing and typesetting industry. ed i</p></div>

                <div className={`${state === 3 ? 'content active-content' : 'active-content'}`}><p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i</p></div>
                
            </div>
         </div>
    </div>
  );
}

export default App;
