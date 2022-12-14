const encode = (
  data: { [key: string]: string | number | boolean | undefined } | undefined
) => {
  return (
    data &&
    Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data?.[key] ?? '')
      )
      .join('&')
  );
};
export default encode;
