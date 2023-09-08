import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserFilter, setUserFilter } from 'redux/userFilterSlice';

import { useBoards, useModal } from 'hooks';

import { Modal, PopUpLayout, Priority } from 'ui';

import {
  Container,
  FilterHeader,
  FiltersButton,
  FiltersIcon,
  FiltersTitle,
  FilterWrapper,
  LabelsTitle,
  Line,
} from './Filters.styled';

const Filters = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoards();
  const priority = useSelector(selectUserFilter);
  const dispatch = useDispatch();

  function changeValue(value) {
    localStorage.setItem(activeBoardId, value);
    dispatch(setUserFilter(value));
  }

  return (
    <>
      <FiltersButton onClick={toggleModal} aria-label="Open filters popup">
        <FiltersIcon svgName="icon-filter" variant="header" isActive="true" />
        <FiltersTitle variant="columnTitle">Filters</FiltersTitle>
      </FiltersButton>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <Container>
            <PopUpLayout title="Filters" handleClose={toggleModal}>
              <FilterWrapper>
                <Line>
                  <FilterHeader>
                    <LabelsTitle>Label color</LabelsTitle>
                  </FilterHeader>
                </Line>
                <div>
                  <Priority
                    priority={priority}
                    setPriority={changeValue}
                    options={[
                      { value: 'showAll', label: 'ShowAll' },
                      { value: 'without', label: 'Without priority' },
                      { value: 'low', label: 'Low' },
                      { value: 'medium', label: 'Medium' },
                      { value: 'high', label: 'High' },
                    ]}
                    variant="Filters"
                  />
                </div>
              </FilterWrapper>
            </PopUpLayout>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default Filters;
