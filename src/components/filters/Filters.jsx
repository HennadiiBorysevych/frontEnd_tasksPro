import React, { useEffect, useRef, useState } from 'react';
import { useBoardsRedux, useFilterRedux } from 'redux/services';

import { PopUpLayout, Priority } from 'ui';

import * as styles from './Filters.styled';

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filterContainerRef = useRef(null);

  const { activeBoardId } = useBoardsRedux();
  const { userFilter, updateFilter } = useFilterRedux();

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
    updateFilter(value);
  }

  return (
    <styles.Container>
      <styles.FiltersButton
        onClick={toggleDropdown}
        aria-label="Open filters popup"
        isOpen={isOpen}
      >
        <styles.FiltersIcon
          svgName="icon-filter"
          variantIcon="header"
          isActive="true"
        />
        <styles.FiltersTitle variant="buttonPopUpAndDropdownText">
          Filters
        </styles.FiltersTitle>
      </styles.FiltersButton>
      {isOpen && (
        <styles.FilterContainer ref={filterContainerRef}>
          <PopUpLayout title="Filters" handleClose={toggleDropdown}>
            <styles.FilterWrapper>
              <styles.Line>
                <styles.FilterHeader>
                  <styles.LabelsTitle variant="buttonPopUpAndDropdownText">
                    Label color
                  </styles.LabelsTitle>
                </styles.FilterHeader>
              </styles.Line>
              <div>
                <Priority
                  priority={userFilter}
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
            </styles.FilterWrapper>
          </PopUpLayout>
        </styles.FilterContainer>
      )}
    </styles.Container>
  );
};

export default Filters;
