const getData = async (url) => {
  let initialState;
  try {
    const data = await fetch(url);
    initialState = await data.json();
  } catch (err) {
    console.error(err);
  }
  return initialState;
};

export default getData;
