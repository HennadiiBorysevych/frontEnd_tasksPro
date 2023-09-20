import { BASE_COLORS } from 'constants';

const getPriorityColor = priority => {
  const formattedPriority = priority.toLowerCase();
  switch (formattedPriority) {
    case 'high':
      return BASE_COLORS.priorityColors.high;
    case 'low':
      return BASE_COLORS.priorityColors.low;
    case 'medium':
      return BASE_COLORS.priorityColors.medium;
    case 'without':
      return BASE_COLORS.priorityColors.default;
    default:
      return BASE_COLORS.priorityColors.default;
  }
};

export default getPriorityColor;
