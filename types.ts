export interface ProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
} 

export interface JSONRpcResponse {
    jsonrpc: string
    id: number;
    result?: any;
    error?: ProviderRpcError
}

export interface ProviderInfo {
    chainId: string;
}

export interface ProviderMessage {
    readonly type: string;
    readonly data: unknown;
  }
  

export interface EIP1193Provider  {
    request: (request: { method: string, params?: any[] }) => Promise<JSONRpcResponse>
    on(event: "connect", listener: (info: ProviderInfo) => void): void
    on(event: "disconnect", listener: (error: ProviderRpcError) => void): void
    on(event: "message", listener: (message: ProviderMessage) => void): void
    on(event: "chainChanged", listener: (chainId: string) => void): void
    on(event: "accountsChanged", listener: (accounts: string[]) => void): void
}