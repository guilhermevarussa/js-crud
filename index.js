
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    name: "guitest",
    email: "test2",
    phoneNumber: "test2",
    city: "test2"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []

const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()



const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

//!layout references

const isValidField = () => {
    return document.getElementById('client-form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const saveClient = () => {
    if (isValidField()) {
        const client = {
            name: document.getElementById('name').nodeValue,
            email: document.getElementById('email').nodeValue,
            cell: document.getElementById('cell').nodeValue,
            city: document.getElementById('city').nodeValue,
        }
        createClient(client)
        clearFields()
        closeModal()
    } else {
        throw new Error("formulário invalido")
    }
}


//*Events

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
document.getElementById('salvar')
    .addEventListener('click', saveClient)