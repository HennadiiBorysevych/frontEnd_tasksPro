import React from 'react';
import { PrimaryButton, Welcome } from '../components';

const WelcomePage = () => {
  return (
    <>
      <Welcome />
      <PrimaryButton hasIcon={true} svgName="icon-plus">
        Add
      </PrimaryButton>
      {/* <SvgIcon svgName="icon-Project" stroke="#FFFFFF" /> */}
      {/* <Input placeholder="Title" /> */}
    </>
  );

};

export default WelcomePage;
