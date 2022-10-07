import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author='Diego Fernandes'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius, turpis vitae commodo ornare, enim lorem semper nisl, a laoreet ex turpis quis augue. Duis ut odio at dui egestas porta. Quisque a turpis eu lacus posuere venenatis. Nulla ultricies sem sed ex cursus, at laoreet dui lobortis.'
      />
      <Post
        author='Gabriel Buzzi'
        content='Lorem ipsum dolor sit amet,consectetur adipiscing elit.'
      />
    </div>
  );
}

export default App;
