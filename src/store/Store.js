import {makeAutoObservable} from "mobx"

export default class QuestionStore{
    constructor(){ 
        this._answer = []
        this._task = []
        this._question = []
        this._category = []
        this._sertificate = []

        this._selectedCategories={}
        this._selectedTask={}
        makeAutoObservable(this)
    }

    setAnswer(answer){
        this._answer = answer
    }
    setTask(task){
        this._task = task
    }
    setQuestion(question){
        this._question = question
    }
    setCategory(category){
        this._category = category
    }
    setSertificate(sertificate){
        this._sertificate = sertificate
    }

    setSelectedCategories(category){
        this._selectedCategories = category
    }
    setSelectedTask(task){
        this._selectedTask = task
    }


    get answer(){
        return this._answer
    }
    get task(){
        return this._task
    }
    get question(){
        return this._question
    }
    get category(){
        return this._category
    }
    get sertificate(){
        return this._sertificate
    }

    get selectedCategories(){
        return this._selectedCategories
    }
    get selectedTask(){
        return this._selectedTask
    }
}









