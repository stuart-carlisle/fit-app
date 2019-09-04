import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv'

DotEnv.config({ path: '.env.test' })

Enzyme.configure({
    adapter: new Adapter()
})

var localStorageMock = (function() {
    var store = {};
  
    return {
      getItem: function(key) {
          return store[key] || null;
      },
      setItem: function(key, value) {
          store[key] = value.toString();
      },
      removeItem: function(key) {
        store[key] = undefined;
      },
      clear: function() {
          store = {};
      }
    }; 
  })();
  
  Object.defineProperty(window, 'localStorage', {
   value: localStorageMock
  });