import { Client, Databases, Storage } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
export const COLLECTION_ID_PUMPS = import.meta.env.VITE_COLLECTION_ID_PUMPS

export const client = new Client()
console.log(typeof PROJECT_ID)

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

export const storage = new Storage(client)
export const databases = new Databases(client)
export { ID } from 'appwrite'
