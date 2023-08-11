import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'hooks';
import { selectUserFilter, setUserFilter } from 'redux/userFilterSlice';

import { Modal, PopUpLayout, SvgIcon } from 'components';

import {
  FilterHeader,
  FiltersLink,
  Label,
  LabelsTitle,
  Priority,
  Radio,
  SettingsBlock,
  ShowAllLabel,
  ShowAllRadio,
} from './Filters.styled';

const Filters = () => {
  const dispatch = useDispatch();

  const userFilter = useSelector(selectUserFilter);

  // const [value, setValue] = useState('without');

  const { isModal, toggleModal, onBackdropClick } = useModal();

  function changeValue(event) {
    const newValue = event.target.value;
    console.log(newValue);
    dispatch(setUserFilter(newValue));
  }

  return (
    <>
      <FiltersLink onClick={toggleModal}>
        <SvgIcon svgName="icon-filter" stroke="rgba(255, 255, 255, 0.8" />
        Filters
      </FiltersLink>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <PopUpLayout title="Filters" handleClose={toggleModal}>
            <FilterHeader>
              <LabelsTitle>Label color</LabelsTitle>
              <ShowAllLabel htmlFor="Show all">
                <ShowAllRadio
                  type="radio"
                  id="showAll"
                  name="priority"
                  value="showAll"
                  checked={userFilter === 'showAll'}
                  onChange={changeValue}
                />
                Show all
              </ShowAllLabel>
            </FilterHeader>
            <SettingsBlock>
              <Priority>
                <Label htmlFor="without priority">
                  <Radio
                    type="radio"
                    id="without priority"
                    name="priority"
                    value="without priority"
                    checked={userFilter === 'without priority'}
                    onChange={changeValue}
                  />
                  Without priority
                </Label>
                <Label htmlFor="low">
                  <Radio
                    type="radio"
                    id="low"
                    name="priority"
                    value="low"
                    checked={userFilter === 'low'}
                    onChange={changeValue}
                  />
                  Low
                </Label>
                <Label htmlFor="medium">
                  <Radio
                    type="radio"
                    id="medium"
                    name="priority"
                    value="medium"
                    checked={userFilter === 'medium'}
                    onChange={changeValue}
                  />
                  Medium
                </Label>
                <Label htmlFor="high">
                  <Radio
                    type="radio"
                    id="high"
                    name="priority"
                    value="high"
                    checked={userFilter === 'high'}
                    onChange={changeValue}
                  />
                  High
                </Label>
              </Priority>
            </SettingsBlock>
          </PopUpLayout>
        </Modal>
      )}
    </>
  );
};

export default Filters;
