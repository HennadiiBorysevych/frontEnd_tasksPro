import { BoardProvider, ToggleProvider } from 'contexts';

import { Header, SideBar } from 'blocks';

import * as styles from './SharedLayouts.styled';

const SharedLayout = ({ children }) => {
  return (
    <styles.ScreenWrapper>
      <ToggleProvider>
        <BoardProvider>
          <SideBar />
        </BoardProvider>
        <styles.MainWrapper>
          <Header />
          {children}
        </styles.MainWrapper>
      </ToggleProvider>
    </styles.ScreenWrapper>
  );
};
export default SharedLayout;
