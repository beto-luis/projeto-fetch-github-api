import { baseUrl, repositoriesQuantities } from "/src/scripts/variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantities}`)
    return await response.json()
}

export { getRepositories }