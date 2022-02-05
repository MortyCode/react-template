

import Home from './Home'
import { KeepAlive} from 'react-activation'

export default function HomeCache(){
    
    return (<div>
        <KeepAlive name='data'>
            <Home />
        </KeepAlive>
    </div>);
}