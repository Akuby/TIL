function a(condition) {
  return new Promise((resolve, reject) => {
    if(condition === 'reject'){
      reject()
      return
    }
    setTimeout(() => {
      console.log('waiting complete')
      resolve()
    }, 2000);
  })
}

function b() {
  console.log('resolved!')
}

function c() {
  console.log('rejected!')
}

function d() {
  console.log('All Done!!')
}

// by using promise
function test() {
  a('resolve')
  .then(()=>{b()})
  .catch(()=>{c()})
  .finally(()=>{d()})
}

//by async await (try & catch)
async function test() {
  try{
    await a('reject')
    b()
  } catch (error) {
    c()
  } finally {
    d()
  }
}

test()

