// wagmi 用来创建配置的方法 wagmi 用来创建 HTTP JSON RPC 连接的方法，通过它你可以通过 HTTP 请求访问区块链
import { createConfig,http } from "wagmi";
// 代表以太坊主网
import { mainnet } from "wagmi/chains";
// Ant Design Web3 用来接收 wagmi 配置的 Provider
import { WagmiWeb3ConfigProvider, MetaMask } from "@ant-design/web3-wagmi";
import { Address, NFTCard, Connector, ConnectButton } from "@ant-design/web3";
import { injected } from "wagmi/connectors";

// 完成 wagmi 的基础配置
// https://api.zan.top/node/v1/eth/mainnet/0860789265ba48c6a39de61b09ae7453
const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http()
    },
    connectors: [
        injected({
            target: "metaMask",
        })
    ]
})

export default function Web3() {
    return (
        <WagmiWeb3ConfigProvider config={config} wallets={[MetaMask()]}>
            <div style={{
                height: "100vh",
                padding: 64
            }}>
                {/* 合约地址是OURM NFT */}
                <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
                <NFTCard address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
                <Connector>
                    <ConnectButton />
                </Connector>
            </div>      
        </WagmiWeb3ConfigProvider>
    )
}