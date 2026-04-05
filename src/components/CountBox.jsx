import counterStore from '../stores/counterStore.jsx';

const CountBox = () => {
  const count = counterStore((state) => state.count);

  return (
    <div>
      <h2>CountBox: {count}</h2>
    </div>
  );
};

export default CountBox;