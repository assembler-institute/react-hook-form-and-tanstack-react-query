import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'
import ProductList from './components/ProductList';

function App() {

  // create the client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // retry: 1, // retry the query once
        // retry: false  // disable the retry
        // retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 2000), // retry the query with a delay
        refetchOnWindowFocus: false, // disable the refetch on window focus
        // refetchInterval: 2000 // refetch the query every 2 seconds
      }
    }
  });

  return (
    <>
      <QueryClientProvider client={ queryClient }>
        <div className="App">
          <ProductList />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
