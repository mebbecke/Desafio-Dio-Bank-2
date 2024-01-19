import { login } from "./login";
import { api } from "../api";

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'ma@dio.bank'

    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda ${mockEmail}!`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', async() => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        await login('email@inválido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
})