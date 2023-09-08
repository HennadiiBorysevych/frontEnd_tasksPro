import { baseColors } from 'constants';

const getPriorityColor = priority => {
  const formattedPriority = priority.toLowerCase();
  switch (formattedPriority) {
    case 'high':
      return baseColors.priorityColors.high;
    case 'low':
      return baseColors.priorityColors.low;
    case 'medium':
      return baseColors.priorityColors.medium;
    case 'without':
      return baseColors.priorityColors.default;
    default:
      return baseColors.priorityColors.default;
  }
};

export default getPriorityColor;
