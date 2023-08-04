import { Board, BoardHead } from 'components';
import SharedLayout from 'sharedLayout/SharedLayout';
import { BoardBody, WelcomeText } from './homePage.styled';

const HomePage = () => {
  const boardName = false;
  return (
    <div>
      <SharedLayout />
      <BoardHead boardName={boardName} />

      <BoardBody>
        {boardName ? (
          <Board />
        ) : (
          <WelcomeText>
            Before starting your project, it is essential to create a board to
            visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </WelcomeText>
        )}
      </BoardBody>
    </div>
  );
};
export default HomePage;
