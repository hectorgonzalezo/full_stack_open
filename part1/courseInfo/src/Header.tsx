import React from 'react';

function Header({course}: { course: string }){
  return <h1>{course}</h1>;
}

export default Header;