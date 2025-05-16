import { useState, type ChangeEvent, type FormEvent } from 'react';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import Icon from '../../../assets/icon.png';
import type { SignupData } from '../../../models/models';
import './Signup.scss';

interface SignupProps {
    onSubmit: (data: SignupData) => void;
}

const Signup = ({ onSubmit }: SignupProps) => {
    const [data, setData] = useState<SignupData>({
        name: '',
        nickname: '',
        email: '',
        sex: 'male',
        password: '',
        confirmPassword: '',
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
            name: '',
            nickname: '',
            email: '',
            sex: 'male',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <form className="form  form--signup" onSubmit={handleSubmit}>
            <TextInput
                placeholder="Name placeholder"
                label="Name label"
                description="Name description"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <TextInput
                placeholder="Nickname placeholder"
                label="Nickname label"
                description="Nickname description"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="text"
                name="nickname"
                value={data.nickname}
                onChange={handleChange}
                icon={Icon}
            />
            <TextInput
                placeholder="Email placeholder"
                label="Email label"
                description="Email description"
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
                placeholder="Sex placeholder"
                label="Sex label"
                description="Sex description"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="radio"
                name="sex"
                value={data.sex}
                onChange={handleChange}
                options={[
                    { name: 'male', value: 'male' },
                    { name: 'female', value: 'female' },
                ]}
            />
            <TextInput
                placeholder="Password placeholder"
                label="Password label"
                description="Password description"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <TextInput
                placeholder="Confirm password placeholder"
                label="Confirm password label"
                description="Confirm password description"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
            />
            <Button type="submit" isDisabled={false}>
                Войти
            </Button>
        </form>
    );
};

export default Signup;
