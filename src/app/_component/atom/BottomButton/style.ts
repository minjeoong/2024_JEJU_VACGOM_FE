import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const BottomButtonWrap = styled.button`
  &.confirm_button {
    border: none;
    height: 56px;
    width: 100%;
    max-width: 500px;
    padding: 20px 20px 55px 20px;
    ${fontGenerator('16px', '600', '16px', '-0.3px')}
    color: ${Colors.Gray500};
    background-color: ${Colors.Gray100};
    position: fixed;
    bottom: 0;
  }
  &.confirm_button_Filled {
    border: none;
    height: 56px;
    width: 100%;
    max-width: 500px;
    padding: 20px 20px 55px 20px;
    ${fontGenerator('16px', '600', '16px', '-0.3px')}
    color: ${Colors.White};
    background-color: ${Colors.Primary};
    position: fixed;
    bottom: 0;
  }
`;
