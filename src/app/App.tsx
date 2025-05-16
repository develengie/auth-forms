import Signin from './components/forms/Signin/Signin';
import type { SigninData } from './models/models';

const App = () => {
    const handleSubmit = (data: SigninData) => {
        console.log(data);
    };

    return (
        <div className="container">
            <Signin onSubmit={handleSubmit} />
        </div>
    );
};

export default App;
