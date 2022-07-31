import styled from "styled-components";
import {device} from '../../contants'

export const PageSearchWrapper = styled.div`
  width: 100%;
  padding: 10px 75px;
  @media ${device.tablet}{
    padding: 10px;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
    @media ${device.mobileL}{
      font-size: 1.3rem;
  }
  }
  .listSearch{
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }
`