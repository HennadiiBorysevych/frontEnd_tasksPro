import { useDispatch } from 'react-redux';
import { useColumnsRedux } from 'redux/services';

import { processDndResult } from 'helpers';

const useDragEnd = () => {
  const { columnsAndTasks } = useColumnsRedux();
  const dispatch = useDispatch();

  const onDragEnd = async result => {
    const resultProcessed = processDndResult(result, columnsAndTasks);
    if (resultProcessed) {
      const { process, arg } = resultProcessed;
      await dispatch(process(arg));
    }
  };

  return {
    onDragEnd,
  };
};

export default useDragEnd;
