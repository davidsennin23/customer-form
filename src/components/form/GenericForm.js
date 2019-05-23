import React from 'react';
import FormLine from './FormLine';
import './generic-form.css'

export default class GenericForm extends React.Component {

    render() {
        return (
            <form>
                <FormLine label="Nome" type="text" name="nome"></FormLine>
                <FormLine label="Sobrenome" type="text" name="sobrenome"></FormLine>
                <FormLine label="Nascimento" type="date" name="nascimento"></FormLine>
                <FormLine label="Telefone" type="text" name="telefone"></FormLine>
                <FormLine label="E-Mail" type="text" name="email"></FormLine>
            </form>
        );
    }

}