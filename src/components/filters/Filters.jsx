import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserFilter, setUserFilter } from 'redux/userFilterSlice';

import { useBoardsCollector } from 'hooks';

import { PopUpLayout, Priority, SvgIcon } from 'ui';

import {
  Container,
  FilterContainer,
  FilterHeader,
  FiltersButton,
  // FiltersIcon,
  FiltersTitle,
  FilterWrapper,
  LabelsTitle,
  Line,
} from './Filters.styled';

const Filters = () => {
  const { activeBoardId } = useBoardsCollector();
  const [isOpen, setIsOpen] = useState(false);
  const priority = useSelector(selectUserFilter);
  const dispatch = useDispatch();
  const filterContainerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleWindowClick = e => {
      if (
        isOpen &&
        filterContainerRef.current &&
        !filterContainerRef.current.contains(e.target)
      ) {
        closeDropdown();
      }
    };
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    window.addEventListener('mousedown', handleWindowClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function changeValue(value) {
    localStorage.setItem(activeBoardId, value);
    dispatch(setUserFilter(value));
  }

  return (
    <Container>
      <FiltersButton
        onClick={toggleDropdown}
        aria-label="Open filters popup"
        isOpen={isOpen}
      >
        <SvgIcon svgName="icon-filter" variantIcon="header" isActive="true" />
        <FiltersTitle variant="columnTitle">Filters</FiltersTitle>
      </FiltersButton>
      {isOpen && (
        <FilterContainer ref={filterContainerRef}>
          <PopUpLayout title="Filters" handleClose={toggleDropdown}>
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
        </FilterContainer>
      )}
    </Container>
  );
};

export default Filters;
