import { EIP1193Provider, JSONRpcResponse} from './types'
// This implements the current EIP-1193 spec is NOT backwards compatabile
// To be clear, it does not support deprecated methods including send() and sendAsync()
export class Web3Provider {
    readonly provider: EIP1193Provider

    constructor(provider: EIP1193Provider) {
        this.provider = provider;
    }

    request(method: string,  params?: any[]): Promise<JSONRpcResponse> {
        return this.provider.request({ method, params})
    }
}