import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () =>{
 return(
     <ChatEngine 
     height = '100vh'
     projectID ='0182b46e-87ec-4b76-a9b7-7ed36e52b332'
     userName='IanHancock'
     userSecret ='123123'
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
     /> 
 )
}
export default App