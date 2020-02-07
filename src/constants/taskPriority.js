// Define options for task priority

const taskPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};

export default taskPriority;

/**
 * Returns a priority value based on a numerical index
 *
 * @param {Number} index 
 */
export const getPriorityByIndex = index => {
  switch (index) {
    case 2:
      return taskPriority.HIGH;
    case 1:
      return taskPriority.MEDIUM;
    case 0:
    default:
      return taskPriority.LOW;
  }
};

