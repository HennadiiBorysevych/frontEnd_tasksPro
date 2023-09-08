import { BoardProvider, ToggleProvider } from 'contexts';

import { Header, SideBar } from 'blocks';

import { MainWrapper, ScreenWrapper } from './SharedLayouts.styled';

const SharedLayout = ({ children }) => {
  return (
    <ScreenWrapper>
      <ToggleProvider>
        <BoardProvider>
          <SideBar />
        </BoardProvider>
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </ToggleProvider>
    </ScreenWrapper>
  );
};
export default SharedLayout;
