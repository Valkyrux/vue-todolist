const app = new Vue({
    el: "#app",
    data: {
        inputText: "",
        tasks: [
            {
                taskName: "Atask",
                done: false
            }
        ]
    },
    methods: {
        addTask(){
            if(this.inputText != "") {
                let aNewTask = {
                    taskName: this.inputText,
                    done: false
                }
                this.tasks.unshift(aNewTask);
                this.inputText ="";
            }
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        reverseDone(index){
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
})