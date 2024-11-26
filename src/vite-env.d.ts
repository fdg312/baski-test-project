/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_PROJECT_ID: string
	readonly VITE_DATABASE_ID: string
	readonly VITE_COLLECTION_ID_PUMPS: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
