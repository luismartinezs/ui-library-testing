const WidthWrapper = ({ children, noPadding = false }) => {
  let classes = `container mx-auto flex space-y-4 flex-col`;
  if (!noPadding) {
    classes += " px-8 lg:px-0";
  }

  return <div className={classes}>{children}</div>;
};

export default WidthWrapper;
