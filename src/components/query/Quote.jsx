const Quote = ({ quote }) => {
  return (
    <div>
      <h1>Get Quotes using fetch API</h1>

      <div>{quote?.content}</div>
    </div>
  );
};

export default Quote;
