import { useState, type ChangeEvent, type FormEvent } from 'react';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import type { SigninData } from '../../../models/models';
import './Signin.scss';

interface SigninProps {
    onSubmit: (data: SigninData) => void;
}

const Signin = ({ onSubmit }: SigninProps) => {
    const [data, setData] = useState<SigninData>({
        email: '',
        password: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(data);
        setData({
            email: '',
            password: '',
        });
    };

    return (
        <form className="form  form--signin" onSubmit={handleSubmit}>
            <TextInput
                placeholder="Email placeholder"
                label="Email label"
                description="Email description"
                error="Prop value"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <TextInput
                placeholder="Password placeholder"
                variant="filled"
                radius="sm"
                size="sm"
                isDisabled={false}
                isAsterisk={false}
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <Button type="submit" isDisabled={false}>
                Войти
            </Button>
        </form>
    );
};

export default Signin;
