const Skeleton = ({ width, height, styled = '' }) => (
  <div
    className={`bg-gray-200 animate-pulse ${styled}`}
    style={{ width, height }}
  />
);

export default Skeleton;