import css from "../../styles/form.css"
import InputComponent from "../comps/Input"
import Button from "../comps/Button"
import TaskList from "../views/local/TaskList"
import { useState, useEffect } from "react"


const {FormContainer, Wrap} = css

const Main = () => {

    const [task, setTask ] = useState('')
    const [data, setData] = useState([])

    const handleAdd = () => {
        console.log('OK')
        setData(
            prev => { const newData = [ { 
                id: Date.now(),
                task: task, 
                completed: false,
            }, ...prev]
            localStorage.setItem('tasks', JSON.stringify(newData))
            return newData
        }
        )

        setTask('')
    }

    const handleChange = (id) => {
        setData(prev => {
            const newData =  prev.map(item => 
                item.id === id 
                ? {...item, completed: !item.completed}
                : item)
            localStorage.setItem('tasks', JSON.stringify(newData))
            return newData
            }
            )
        
    }


    const handleDelete = (id) => {
        setData(prev => {
            const newData = prev.filter(item => item.id !== id)
            localStorage.setItem('tasks', JSON.stringify(newData))
            return newData
        })
    }

    useEffect(()=> {
        const savedData = JSON.parse(localStorage.getItem('tasks'))
        if (savedData) {
            setData(savedData)
        }
    },[])


    return (
        <>
        <Wrap>
            <FormContainer>
                <InputComponent inputTask={task} action={setTask} placeholder={'Введите задачу'}></InputComponent>
                <Button onClick={handleAdd}>Добавить задачу</Button>
            </FormContainer>
            <TaskList data={data} onDelete={handleDelete} taskChange={handleChange}></TaskList>
        </Wrap>
        </>

    )
}

export default Main