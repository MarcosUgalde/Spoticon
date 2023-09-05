import Styled from './style'
import { Link, useRoute } from 'wouter'
const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)

    return (
        <Link {...(href)}>
            <Styled.Anchor {...{ href, isActive}}>{children}</Styled.Anchor>
        </Link>
    )
}

const NavBar = () => {
    return (
        <Styled.Nav>
            <CustomLink></CustomLink>
            <CustomLink></CustomLink>
        </Styled.Nav>
    )
    
}

export default NavBar