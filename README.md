Нужно реализовать два компонента: `<Signin />` и `<Signup />`.

В компоненте `<Signin />` необходимо сделать форму, в которой есть `<input type="email">`, `<input type="password">` и кнопка “Войти”. Также компонент в props принимает функцию `onSubmit()`, в ее аргументы необходимо передать значения полей после отправки формы.

Тоже самое нужно сделать для компонента `<Signup />`, но полей будет больше:

 - Имя
 - Ник
 - Почта
 - Пол (с помощью `<input type="radio">`)
 - Пароль
 - Повторить пароль

В формах использовать собственный компонент для `<input>`, который можно будет настраивать с помощью props. Необходимо реализовать все настройки как на форме справа:
![enter image description here](https://fs.gcfiles.net/fileservice/file/thumbnail/h/f55dd5995edbbeb8757fa455d4629433.png/s/s1200x/a/177331/sc/219)

Поле «Ник» должно начинаться с символа «@», но вместо «@» должно быть возможно использовать любую иконку, переданную через prop `icon`. Placeholder задается непосредственно для input-элемента:
![enter image description here](https://fs.gcfiles.net/fileservice/file/thumbnail/h/58d41f3a0e02d721428ea6e7c766a835.png/s/s1200x/a/177331/sc/98)

<hr>

Стек:

 - <a href="https://react.dev/">![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)</a>
 - <a href="https://www.typescriptlang.org/">![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)</a>
 - <a href="https://sass-lang.com/">![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)</a>
 - <a href="https://vite.dev/">![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)</a>

Приложение содержит 4 компонента:

 1. `<Signin />` - форма авторизации, принимающая функцию `onSubmit()` для передачи в нее значений полей после отправки формы, выводящую значения полей в консоль;
 2. `<Signup />` - форма регистрации, принимающая функцию `onSubmit()`, работающую по аналогии с формой `<Signin />`;
 3. `<TextInput />` - поле ввода данных;
 4. `<Button />` - кнопка входа.

`<TextInput />` принимает TextInputProps:

 - placeholder: string;
 - label?: string;
 - description?: string;
 - error?: string;
 - variant: Variant `(type Variant = 'default' | 'filled' | 'unstyled')`;
 - radius: ControlPoints `(type ControlPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl')`;
 - size: ControlPoints;
 - isDisabled: boolean;
 - isAsterisk: boolean;
 - type: Type `(type Type = 'text' | 'email' | 'radio' | 'password')`;
 - name: string;
 - value: string;
 - onChange: (event: ChangeEvent`<HTMLInputElement>`) =>  void;
 - options?: Option[] `(interface Option = { name: string; value: string; })`;
 - icon?: string.

`<TextInput />` настраивается с помощью динамического рендера классов. Реализована валидация почты с помощью regex и пароля по минимальной длине.

`<Button />` принимает ButtonProps:

 - type: Type `(type Type = 'button' | 'submit' | 'reset')`;
 - isDisabled: boolean;
 - children: string.
