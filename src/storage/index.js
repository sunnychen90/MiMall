/*存放 cookie localstorage 或SessionStorage*/

const STORAGE_KEY = "mall";

export default{
    //第一步获取
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    //设置 存储值
    setItem(key, value, module_name) {
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value;
            this.setItem(module_name, val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }

    },
    //获取  某一个模块下面的 属性  user模块名下面的userName
    getItem(key, module_name) {
        if (module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    
    clear(key, module_name) {
        let val = this.getStorage();
        if(module_name){
            if(!val[module_name]) return;
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));

    }
}