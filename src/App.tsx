import styled from "styled-components";

import logo from "./assets/logo.png";

// test setup
import { useCount } from "./contexts/CountContext";
import { BaseComponent } from "./components";
import { Wallet } from "lucide-react";
// end test setup

const AppWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 300px;

  border: 1px #000 solid;
  border-radius: 6px;

  text-align: center;

  & > p {
    margin: 1rem 0 0 0;
  }
`;

const WalletImageLabel = styled.span`
  vertical-align: middle;
  margin-left: 1em;
`;

const WalletImageContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

function App() {
  const { countState, dispatch } = useCount();
  return (
    <AppWrapper>
      <BaseComponent title={"Primer"} />
      <img src={logo} alt="Primer logo" width="128" height="128" />
      <p>Primer React Challenge Boilerplate</p>

      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>

      <span>Count: {countState.count}</span>

      <div>
        <WalletImageContainer>
          <Wallet color="red" size={48} />
        </WalletImageContainer>
        <WalletImageLabel>wallet image from lucide</WalletImageLabel>
      </div>
    </AppWrapper>
  );
}

export default App;
