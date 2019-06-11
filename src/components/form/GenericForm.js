import React from 'react';
import FormLine from './FormLine';
import InputValidation from './InputValidation';
import inputNotBlank from './validation/inputNotBlank';
import FoneMask from '../masks/FoneMask';
import './generic-form.css'

const initState = {
    nome: '',
    sobrenome: '',
    nascimento: '',
    telefone: '',
    email: '',
}

const Nome = InputValidation(inputNotBlank)(FormLine);
const Sobrenome = InputValidation(inputNotBlank)(FormLine);
const Fone = FoneMask(FormLine);

export default class GenericForm extends React.Component {

    state = initState;

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { nome, sobrenome, nascimento, telefone, email } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Nome label="Nome" type="text" name="nome" value={nome} onChange={this.handleChange}></Nome>
                <Sobrenome label="Sobrenome" type="text" name="sobrenome" value={sobrenome} onChange={this.handleChange}></Sobrenome>
                <FormLine label="Nascimento" type="date" name="nascimento" value={nascimento} onChange={this.handleChange}></FormLine>
                <Fone label="Telefone" type="text" name="telefone" value={telefone} onChange={this.handleChange}></Fone>
                {/* <FormLine label="Nome" type="text" name="nome" value={nome} onChange={this.handleChange}></FormLine>
                <FormLine label="Sobrenome" type="text" name="sobrenome" value={sobrenome} onChange={this.handleChange}></FormLine>
                <FormLine label="Nascimento" type="date" name="nascimento" value={nascimento} onChange={this.handleChange}></FormLine>
                <FormLine label="Telefone" type="text" name="telefone" value={telefone} onChange={this.handleChange}></FormLine>
                <FormLine label="E-Mail" type="text" name="email" value={email} onChange={this.handleChange}></FormLine> */}
                <button>Submit</button>
            </form>
        );
    }

}