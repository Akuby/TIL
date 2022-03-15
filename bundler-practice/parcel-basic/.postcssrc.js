// import나 export 명령어는 ESM (ECMA Script Module).
// node.js에선 ESM이 아닌 CommonJS만 지원.

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
