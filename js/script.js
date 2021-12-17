const app = new Vue({
    el: "#app",
    data: {
        inputText: "",
        tasks: []
    },
    methods: {
        addTask(){
            if(this.inputText != "") {
                let aNewTask = {
                    taskName: this.inputText,
                    done: false,
                    color: this.getRand()
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
        },
        getRand(){
            return Math.floor(Math.random()*5);
        }
    },
    created() {
        this.tasks = [
            {
                taskName: "A task",
                done: false,
                color: this.getRand()
            }
        
        ]
    }
})