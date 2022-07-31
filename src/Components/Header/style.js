import styled from 'styled-components'
import {device} from '../../contants'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  @media ${device.mobileL}{
    display: none;
  }
`