unction test() {
  a('reject')
  .then(()=>{b()})
  .catch(()=>{c()})
  .finally(()=>{d()})
}