import React from 'react';
import { PrimaryButton } from '../components';

const WelcomePage = () => {
  return (
    <>
      <PrimaryButton hasIcon={true} svgName="icon-plus" type='button' onClick={() => console.log('Click PrimaryButton')}>
        Add
      </PrimaryButton>
      {/* <SvgIcon svgName="icon-Project" stroke="#FFFFFF" /> */}
      {/* <Input placeholder="Title" /> */}
    </>
  );

};

export default WelcomePage;
