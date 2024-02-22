// wagmi 用来创建配置的方法 wagmi 用来创建 HTTP JSON RPC 连接的方法，通过它你可以通过 HTTP 请求访问区块链
import { createConfig,http } from "wagmi";
// 代表以太坊主网
import { mainnet } from "wagmi/chains";
// Ant Design Web3 用来接收 wagmi 配置的 Provider
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { Address, NFTCard } from "@ant-design/web3";

// 完成 wagmi 的基础配置
const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http()
    }
})

export default function Web3() {
    return (
        <WagmiWeb3ConfigProvider config={config}>
            <div style={{
                height: "100vh",
                padding: 64
            }}>
                {/* 合约地址是OURM NFT */}
                <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
                <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
            </div>      
        </WagmiWeb3ConfigProvider>
    )
}