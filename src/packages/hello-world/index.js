
import LabexHelloWorld from './labex-hello-world'

LabexHelloWorld.install = Vue => Vue.component(LabexHelloWorld.name, LabexHelloWorld);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LabexHelloWorld);
}

export default LabexHelloWorld