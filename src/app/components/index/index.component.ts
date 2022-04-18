import { Component, OnInit } from '@angular/core';
export interface TodoItem {
    title: string;
    isFinish: FilterStatus;
}
export enum FilterStatus {
    ALL = -1,
    FINISHED = 1,
    UNFINISHED = 0
}
//  api/query?is_finished=0|1|2
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    public inputVal: string = '';
    // FIX: use TodoItem interface type
    private _todoList: TodoItem[] = [];
    // private _todoLists: TodoItem[] = [];
    // public arrLength: number = 0

    // null - 所有; true - 完成; false - 未完成
    public isFinished: FilterStatus = FilterStatus.ALL;

    constructor() { }

    get todoList() {
        // this.refreshData()
        console.log(this._todoList)
        return this._todoList
    }

    set todoList(v: TodoItem[]) {
        this._todoList = v;
        this.refreshData()
    }
    // listLength() {
    //     this.arrLength = this.toDoList.length
    // }
    refreshData() {
        // console.log(this.todoList);
        localStorage.setItem("TodoData", JSON.stringify(this.todoList))
    }
    get filterTodos() {
        if (this.isFinished === FilterStatus.ALL) {
            return this.todoList
        } else {
            return this.todoList.filter(item => item.isFinish == this.isFinished)
        }
    }

    ngOnInit(): void {
        // FIX: if tododata is empty
        let getLocalData = localStorage.getItem('TodoData')
        if (getLocalData != null) {
            this.todoList = JSON.parse(getLocalData)
        }
        // console.log(this.artical)

        // FIX: duplicate code logic
        // this.listLength()
    }
    // FIX: function name shoud be humanize     函数名字 语义化  
    addTodo() {
        let inputValIndex = this.todoList.findIndex((item: TodoItem) => item.title == this.inputVal) == -1 ? true : false
        if (this.inputVal != "" && inputValIndex) {
            // this.todoList.push({ title: this.inputVal, isFinish: false })
            this.todoList = [...this.todoList, { title: this.inputVal, isFinish: FilterStatus.UNFINISHED }]
            // this.listLength()
            this.inputVal = ''
            console.info('asd');

        } else {
            alert('该事项已经存在了！')
        }
    }
    delMatters(key: number) {
        this.todoList.splice(key, 1)
        this.todoList = this.todoList.slice()
    }
    changeState({ event: event, key: key }: any) {
        const isFinished = event.target.checked ? FilterStatus.FINISHED : FilterStatus.UNFINISHED;
        this.todoList[key].isFinish = isFinished;
        this.todoList = this.todoList.slice() //   为了能够触发  set这种方法
    }
    changeFilter(value: FilterStatus) {

        this.isFinished = value;
    }







    // delMatters(key: number) {
    //     console.log(this.todoList)
    //     this.todoList.splice(key, 1)
    //     this.todoList = this.todoList.slice()
    // }
    // changeState(event: any, key: number) {
    //     console.log(event.target.checked, event.target.value)
    //     const isFinished = event.target.checked ? FilterStatus.FINISHED : FilterStatus.UNFINISHED;
    //     this.todoList[key].isFinish = isFinished;
    //     this.todoList = this.todoList.slice() //   为了能够触发  set这种方法
    // }


    //冗余代码
    // allMatters() {
    //     // let getLocalData = localStorage.getItem('TodoData')
    //     // if (getLocalData != null) {
    //     //     this.toDoList = JSON.parse(getLocalData)
    //     // } else {
    //     //     console.error("Tododata is null")
    //     // }
    //     // this.listLength()

    //     this.isFinished = null;
    // }

    // // CRUD, Create Read Update Delete

    // // Filter, array = 
    // unFinished() {
    //     // this.toDoList = []
    //     // let getLocalData: string | null = localStorage.getItem('TodoData')
    //     // // const isGetData = getLocalData != '[]' && getLocalData != null ? true : false
    //     // if (getLocalData != null) {
    //     //     this.toDoList = JSON.parse(getLocalData).filter((item: TodoItem) => !item.isFinish)
    //     //     this.listLength()
    //     // }
    //     this.isFinished = false;
    // }
    // // FIX: use cample name rule  
    // offTheStocks() {
    //     this.isFinished = true
    //     // this.toDoList = []

    //     // let getLocalData = localStorage.getItem('TodoData')
    //     // console.log(getLocalData)
    //     // // FIX: use array.filter function
    //     // if (getLocalData != null) {
    //     //     this.toDoList = this.toDoList.filter((item: TodoItem) => item.isFinish)
    //     //     this.listLength()
    //     // }
    // }
}
