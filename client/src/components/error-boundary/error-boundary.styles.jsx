import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  text-align:center;

  span{
    font-size:18px;
  }
`;

export const TryAgainLink = styled(Link)`
  text-decoration: underline;
  color: #684CFF;
`;