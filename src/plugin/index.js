import hello from '../components/hello.vue';
const install = function(Vue){
    // console.info(install.installed);
    //注册全局组件
    Vue.component(hello.name,hello);
    //添加实例方法
    Vue.prototype.$sayHello = function(){
        // alert('hello');
    };
    //添加指令
    Vue.directive('test',{
        bind(el,binding,vnode){
            el.innerHTML = binding.value;
            console.info(binding);
        },
        inserted(el,binding,vnode){

        },
        update(el,binding,vnode,oldVnode){

        },
        componentUpdated(el,binding,vnode,oldVnode){

        },
        unbind(el,binding,vnode){

        }
    });

    //快速添加指令
    Vue.directive('test-1',function(el,binding,vnode,oldVnode){
        el.innerHTML = binding.value + 'kkk';
        console.info(binding);
    });


};

export default {
    install
};