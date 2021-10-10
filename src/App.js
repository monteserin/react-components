import {useState} from "react";
import {GlobalStyle} from "./components/basic-styles";
import Popup from './components/popup/';
import InfoBtn from './components/infobtn';

function App() {
    const [visible, setVisible] = useState();
    return (
        <div>
            <GlobalStyle/>
            <InfoBtn onClick={() => setVisible(true)}/>
            <Popup title="Title" className={"rrrrrrrrrrr"} visible={visible} setVisible={ () =>setVisible(false)}>Content</Popup>
        </div>
    );
}

export default App;
