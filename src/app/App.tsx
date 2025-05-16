import Signin from './components/forms/Signin/Signin';
import Signup from './components/forms/Signup/Signup';
import type { SigninData } from './models/models';

const App = () => {
    const handleSubmit = (data: SigninData) => {
        console.log(data);
    };

    return (
        <div className="container">
            <Signin onSubmit={handleSubmit} />
            <Signup onSubmit={handleSubmit} />
        </div>
    );
};

export default App;
