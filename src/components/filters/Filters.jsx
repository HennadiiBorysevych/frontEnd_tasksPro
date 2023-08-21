import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useBoards, useModal } from 'hooks';
import { selectUserFilter, setUserFilter } from 'redux/userFilterSlice';

import { Modal, PopUpLayout } from 'components';

import {
  Container,
  FilterHeader,
  FiltersIcon,
  FiltersLink,
  FilterTitle,
  Label,
  LabelsTitle,
  Line,
  Priority,
  Radio,
  ShowAllLabel,
  ShowAllRadio,
} from './Filters.styled';

const Filters = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoards();
  const userFilter = useSelector(selectUserFilter);
  const dispatch = useDispatch();

  function changeValue(event) {
    const newValue = event.target.value;
    localStorage.setItem(activeBoardId, newValue);
    dispatch(setUserFilter(newValue));
  }

  return (
    <>
      <FiltersLink onClick={toggleModal}>
        <FiltersIcon svgName="icon-filter" variant="header" isActive="true" />
        <FilterTitle variant="columnTitle">Filters</FilterTitle>
      </FiltersLink>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <Container>
            <PopUpLayout title="Filters" handleClose={toggleModal}>
              <Line>
                <FilterHeader>
                  <LabelsTitle>Label color</LabelsTitle>
                  <ShowAllLabel htmlFor="showAll">
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
              </Line>
              <div>
                <Priority>
                  <Label htmlFor="without">
                    <Radio
                      type="radio"
                      id="without"
                      name="priority"
                      value="without"
                      checked={userFilter === 'without'}
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
              </div>
            </PopUpLayout>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default Filters;
