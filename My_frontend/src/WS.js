import {io} from 'socket.io-client'

 function connectWS(){
    return io('http://localhost:3001')
}

export default connectWS;