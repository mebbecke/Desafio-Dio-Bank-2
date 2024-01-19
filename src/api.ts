const conta = {
    email: 'ma@dio.bank',
    password: '123456',
    name: 'Marina Ebbecke'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})