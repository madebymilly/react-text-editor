export function arrowFunctions() {

  //
  function withACallBack(options, callback) {
    callback(options)
  }
  //
  //
  withACallBack('so long', function(options) {
      return options
    }
  )


  withACallBack('a little shorter', (options) => {
      return options
    }
  )


  withACallBack('very short', options => options)
  //
  //
  //
  const store = {
    address: '101 Main Street',
    what: function() {
      return this.address // this = the 'this' from 'store'
    },
    arrow: () => {
      return this.address // this = the 'this' from 'arrowFunctions()'
    }

  }
  //
  console.log(store.what())       // '101 Main Street'
  //console.log(store).arrow())      // undefined
  //
  //
  function Welcome(){
    this.happy = 'yes'
    withACallBack('traditional function', function(option) {
      console.log(this) // this = the 'this' from 'arrowFunctions()'
    })
    withACallBack('arrow', (option) => {
      console.log(this) // this = the 'this' from 'Welcome()'
    })
  }

  new Welcome() // undefined & {happy: 'yes'}

}
