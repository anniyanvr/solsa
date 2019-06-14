function valueWrapForEnv (val) {
  if (val.valueFrom) return { valueFrom: val.valueFrom }
  if (val.value) return { value: val.value.toString() }
  return { value: val.toString() }
}

function enumerate (env) {
  return Object.keys(env).map(key => Object.assign({ name: key }, valueWrapForEnv(env[key])))
}

function either (x, y) {
  return typeof x !== 'undefined' ? x : y
}

module.exports = { enumerate, either }
