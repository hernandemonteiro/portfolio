import React from 'react';
import NavCurriculum from '../../components/NavCurriculum';
import Template from '../../components/Template';

export default function Curriculum() {
  return (
    <Template nav={<NavCurriculum />}>
      <h5>Curriculum</h5>
      <hr />
    </Template>
  )
}