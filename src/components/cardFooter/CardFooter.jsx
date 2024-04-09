import React from 'react';
import { useCardsRedux } from 'redux/services';

import { ControlIcons, Typography } from 'ui';

import CardFooterPropTypes from './propTypes';

import * as styles from './CardFooter.styled';

const CardFooter = ({
  priority,
  id,
  toggleModal,
  formattedDeadline,
  deadlineToday,
  deadlineExpired,
}) => {
  const { removeCard } = useCardsRedux();

  return (
    <styles.Details>
      <styles.DetailsContainer>
        <div>
          <styles.DetailLabel variant="subTitle">Priority:</styles.DetailLabel>
          <styles.PriorityBlock>
            <styles.Circle priority={priority} />
            <Typography variant="subText">{priority}</Typography>
          </styles.PriorityBlock>
        </div>
        <div>
          <styles.DetailLabel variant="subTitle">Deadline:</styles.DetailLabel>
          <Typography variant="subText">{formattedDeadline}</Typography>
        </div>
      </styles.DetailsContainer>
      <ControlIcons
        deadlineToday={deadlineToday}
        deadlineExpired={deadlineExpired}
        onClick={toggleModal}
        ariaLabel="Edit card button"
        variantIcon="popUp"
        onDeleteAction={() => removeCard(id)}
        item="task"
        owner="tasks"
      />
    </styles.Details>
  );
};

export default CardFooter;

CardFooter.propTypes = CardFooterPropTypes;
