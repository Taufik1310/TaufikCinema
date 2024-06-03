// Import styles, initialize component theme here.
// import '../src/common.css';
import {
  beforeMount,
  afterMount,
} from "@playwright/experimental-ct-react/hooks"
import { BrowserRouter } from "react-router-dom"
import "../src/index.css"

beforeMount(async ({ hooksConfig, App }) => {
  console.log(`Before mount: ${JSON.stringify(hooksConfig)}`)

  if (hooksConfig?.routing)
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
})

afterMount(async () => {
  console.log(`After mount`)
})
