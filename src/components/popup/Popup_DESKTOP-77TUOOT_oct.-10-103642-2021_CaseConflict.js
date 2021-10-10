import {Back, Close, Content, Title, Overlay} from './Popup.styled';


const Popup = ({children, title, visible, setVisible}) => {
    return (
        <Back visible={visible}>
            <Overlay onClick={ () => setVisible(false)} />
            <Content>
                <Close onClick={() => {
                    setVisible(false)
                }}/>
                <Title>{title}</Title>
                {children}
            </Content>

        </Back>
    );
}

export default Popup;