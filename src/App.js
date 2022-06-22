import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'redux/app/actions';

function App() {
  const dispatch = useDispatch();
  const { error, loading, companies } = useSelector(state => state.ts)
  const fetchDataDispatch = useCallback(() => dispatch(fetchData()), [dispatch])

  useEffect(() => {
    fetchDataDispatch();
  }, [fetchDataDispatch])

  console.log(error, loading, companies);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
