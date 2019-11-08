import React from 'react';
import {Container, ContainerItem, ItemCourse} from './styles';

const CourseScrollView = props => {
  return (
    // <SessionTitle>{}</SessionTitle>
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <ContainerItem>
        <ItemCourse />
        <ItemCourse />
        <ItemCourse />
        <ItemCourse />
      </ContainerItem>
    </Container>
  );
};

export default CourseScrollView;
