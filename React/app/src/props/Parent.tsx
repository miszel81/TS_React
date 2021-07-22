import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log('clicked')}>
      iugfidug
    </ChildAsFC>
  );
};

export default Parent;
