import * as React from 'react';

type Props = {
  //jsx po domace je element javascriptu v reactu ki zgleda kot html -> poglej scroll v App.tsx
  children?: JSX.Element
}
const Scroll = (props:Props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;