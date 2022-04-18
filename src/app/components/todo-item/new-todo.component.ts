import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem, FilterStatus } from '../index/index.component';

@Component({
    selector: 'app-new-todo',
    templateUrl: './new-todo.component.html',
    styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
    @Input() todo: any
    @Input() key: number = 0
    @Output() childDelMatters = new EventEmitter()
    @Output() childChangeState = new EventEmitter()  //子组件调用父组件的方法用的是 Output
    constructor() { }
    public ischecked: FilterStatus = FilterStatus.ALL
    ngOnInit(): void {
        // console.log(this.todo)
    }


    changeState(event: any, key: number) {
        // console.log(event, key)
        this.childChangeState.emit({ event: event, key: key })
    }
    delTodo(key: number) {
        this.childDelMatters.emit(key)
    }




    // delMatters(key: number) {
    //     this.todoList.splice(key, 1)
    //     this.todoList = this.todoList.slice()
    // }
    // changeState(event: any, key: number) {
    //     console.log(event.target.checked, event.target.value)
    //     const isFinished = event.target.checked ? FilterStatus.FINISHED : FilterStatus.UNFINISHED;
    //     this.todoList[key].isFinish = isFinished;
    //     this.todoList = this.todoList.slice() // ？？？
    // }



}
