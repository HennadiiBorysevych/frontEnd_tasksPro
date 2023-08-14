import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'hooks';
import { selectUserFilter, setUserFilter } from 'redux/userFilterSlice';

import { Modal, PopUpLayout, SvgIcon } from 'components';

import {
  Container,
  FilterHeader,
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
  const dispatch = useDispatch();

  const userFilter = useSelector(selectUserFilter);

  const { isModal, toggleModal, onBackdropClick } = useModal();

  function changeValue(event) {
    const newValue = event.target.value;
    dispatch(setUserFilter(newValue));
  }

  return (
    <>
      <FiltersLink onClick={toggleModal}>
        <SvgIcon svgName="icon-filter" variant="header" isActive="true" />
        <FilterTitle>Filters</FilterTitle>
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
