import "./App.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

function App() {
  const { wallets, wallet, connect, disconnect, network, connected, account } =
    useWallet();

  const handleConnectClick = async (walletName: any) => {
    if (connected) {
      // If already connected, disconnect on click
      await disconnect();
    } else {
      // If not connected, connect on click
      await connect(walletName);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>APTOS ADAPTER TEST</p>

        {wallets.map((val) => (
          <button
            key={val.name}
            onClick={() => handleConnectClick(val.name)}
            style={{
              borderRadius: "8px",
              height: "2.5rem",
              width: "10rem",
              fontSize: "1rem",
            }}
          >
            <div className="flex flex-row justify-between items-center gap-x-9">
              <img
                alt="icon"
                src={val.icon}
                width={30}
                height={30}
                className="block rounded-full"
              />
              {val.name}
            </div>
          </button>
        ))}

        {connected && (
          <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
            Wallet Connected
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
