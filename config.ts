import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = "2d205f42b1a122a56f86614a5cea0218"

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://nettao.ai', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet] as const
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    }),
})