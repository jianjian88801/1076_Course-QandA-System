const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot7vkr1/",
            name: "springboot7vkr1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot7vkr1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "课程答疑系统"
        } 
    }
}
export default base
