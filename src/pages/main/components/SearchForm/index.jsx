import { useState } from "react";
import { Form } from "../../../../components/ui/Form";
import { Field } from "../../../../components/ui/Field";
import { Input } from "../../../../components/ui/Input";
import { Button } from "../../../../components/ui/Button";

export const SearchForm = ({ onSubmitForm }) => {
    const [formValue, setFormValue] = useState('');
    
    const onChange = (value) => {
        setFormValue(value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formValue);
        setFormValue('');
    };
    
    const disabled = !formValue;

    return (
        <Form onSubmit={onSubmit}>
            <Field>
                <Input 
                    type="text" 
                    placeholder="Имя пользователя"
                    value={formValue}
                    onChange={(e) => onChange(e.target.value)}
                />
            </Field>
            <Button type="submit" disabled={disabled}>Найти</Button>
        </Form>
    )
};