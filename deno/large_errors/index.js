// old broken version, huge errors
import { WabtModule } from "https://cdn.jsdelivr.net/gh/sharpiro/wabt.js@3c13807f1008e4451544a90fc108e8307cc5fc80/index.js"

// new deno-compatible version
// import { WabtModule } from "https://cdn.jsdelivr.net/gh/sharpiro/wabt.js@9ea629b1c31f80c70efdf9d01b489274beb0ddb1/index.js"

const watProgram =
  `(module (func (export "isLessThan") (param i32) (param i32) (result i32)
    local.get 0
    local.get 1
    i32.lt_s
  ))`
const wasmModule = WabtModule().parseWat("temp", watProgram)
const { buffer } = wasmModule.toBinary({})

WebAssembly.instantiate(buffer).then(instantiatedSource => {
  const wasmFunctions = (instantiatedSource.instance.exports)
  if (!wasmFunctions.isLessThan(1, 2)) {
    throw new Error("failure")
  }
  console.log("success")
})
