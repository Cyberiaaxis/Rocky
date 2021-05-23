https://gist.github.com/theskillwithin/547f958ced35a46067d8a9a3bc81f6f1

import { Link, useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { useUser } from '~/provider/User'
import SvgChevron from '~/components/icons/Chevron'
import SvgGear from '~/components/icons/Gear'
import SvgSignOut from '~/components/icons/SignOut'
import { colors } from '~/styles'

const Dropdown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  min-width: 200px;
  padding: 8px 0;
  background: ${colors.white};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px 0px 4px 4px;
  z-index: 100;
`

const UserMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 32px 0 24px;
  height: 72px;

  &:hover {
    ${Dropdown} {
      display: block;
    }
  }
`

const Username = styled.span`
  display: inline-block;
  font-size: 19px;
  font-weight: 600;
  color: ${colors.graysBlacks};
  margin-right: 0.8em;
`

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 14px;
  font-weight: 600;
  font-size: 19px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.graysBlacks};
  border: unset;
  background: transparent;
  width: 100%;
  outline: 0;

  svg {
    color: ${colors.graysGray70};
  }

  &:hover {
    background: ${colors.graysGray5};
  }
`

const ItemButton = ItemLink.withComponent('button')

const UserMenu = () => {
  const history = useHistory()
  const [, { signOut }] = useUser()
  return (
    <UserMenuWrapper>
      <Username>JR Farr</Username> <SvgChevron />
      <Dropdown>
        <ItemLink to="/settings">
          <SvgGear /> Settings
        </ItemLink>
        <ItemButton onClick={() => signOut(() => history.push('/login'))} type="button">
          <SvgSignOut /> Sign&nbsp;Out
        </ItemButton>
      </Dropdown>
    </UserMenuWrapper>
  )
}

export default UserMenu