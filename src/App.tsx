import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'redux/app/actions';
import { RootReducer } from './redux/reducers/index'
import './app.scss'
import Company from 'components/Company';

function App() {
  const dispatch = useDispatch();
  const { isLoading, companies } = useSelector((state: RootReducer) => state.ts)
  const fetchDataDispatch = useCallback(() => dispatch(fetchData()), [dispatch])

  useEffect(() => {
    fetchDataDispatch();
  }, [fetchDataDispatch])

  return (
    isLoading || !companies ? <p>Loading...</p> : (
      <div className="container">
        { companies.map((item, index) => (
          <Company {...item} key={index} index={ index } />
        ))}
      </div>
    )
  );
}

export default App;
