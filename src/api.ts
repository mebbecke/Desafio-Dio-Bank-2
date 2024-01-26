const conta = {
    email: 'ma@dio.bank',
    password: '123456',
    name: 'Marina Ebbecke',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})