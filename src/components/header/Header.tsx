import { Container } from "../container/container"
import logo from '../../assets/logo.png';
import darkTheme from '../../assets/darkTheme.png'
export const Header = ({themeChange}: any) => {
  return (
    <Container backgroundColor='red'>
        <Container maxWidth='1140px' margin="auto" padding="8px" justifyContent='space-between'>
            <img src={logo} style={{maxWidth: '150px'}} />
            <button onClick={themeChange} style={{height: 'fit-content', padding: '8px', margin: 'auto 0'}}><img src={darkTheme} style={{maxWidth: '20px'}}/></button>
        </Container>
    </Container>
  )
}