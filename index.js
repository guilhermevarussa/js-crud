
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    name: "test2",
    email: "test2",
    phoneNumber: "test2",
    city: "test2"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []

const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))


const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

//*Events

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)