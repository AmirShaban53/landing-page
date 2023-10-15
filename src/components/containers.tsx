import type { FC } from 'react';

const Container: FC<any> = (props) => {
  return (
    <div className="mx-3 h-full sm:mx-6 md:mx-12 lg:mx-28">
      {props.children}
    </div>
  );
};

const ContainerFluid: FC<any> = (props) => {
  return (
    <div className="m-0 w-full overflow-hidden p-0">
      <div>{props.children}</div>
    </div>
  );
};
export { Container, ContainerFluid };
