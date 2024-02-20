import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil"
import { countAtom, evenSeletor } from "./store/atoms/count"

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}


function Count() {
  return <div>
      <CountRenderer />
      <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSeletor);
  return <div>
    {isEven ? "It is even" : "It is odd"}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount((count) => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount((count) => count - 1)
    }}>Decrease</button>
  </div>
}

export default App