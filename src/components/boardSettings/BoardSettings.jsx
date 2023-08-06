
import {
  Row,
  RadioField,
  IconContainer,
  Svg,
  BoardText,
 } from './BoardSettings.styled';



import React from 'react';
import { Formik } from 'formik';
import icon from '../../assets/images/sprite.svg';


const BOARD_ICONS = [
  'icon-Project',
  'icon-star',
  'icon-loading',
  'icon-puzzle-piece',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
];

const BoardSettings = () => {
  return (
    
    <Formik
      initialValues={{
        icon: BOARD_ICONS[0],
        }}>
        <BoardText>Icons</BoardText>
            <Row>
              {BOARD_ICONS.map(id => (
                <label key={id} title={id}>
                  <RadioField name="icon" type="radio" value={id} />
                  <IconContainer>
                    <Svg>
                      <use xlinkHref={`${icon}#${id}`} />
                    </Svg>
                  </IconContainer>
                </label>
              ))}
            </Row>
      </Formik>
      
  );
};

export default BoardSettings;
