import css from "../../styles/form.css"
import InputComponent from "../comps/Input"
import Button from "../comps/Button"
import TaskList from "../views/local/TaskList"
import { useState, useEffect } from "react"
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'


const {FormContainer, Wrap} = css

const Main = () => {

    const [task, setTask ] = useState('')
    const [data, setData] = useState([])
    const [category, setCategory] = useState('')
    const [deadline, setDeadline] = useState('')
    const [priority, setPriority] = useState('средний')

    const handleAdd = () => {
        if (category!=='' && task.trim()!='') {
            setData(
                prev => { const newData = [ { 
                    id: Date.now(),
                    task: task.trim(), 
                    completed: false,
                    category: category,
                    deadline: deadline,
                    priority: priority,
                    createdAt: new Date().toISOString()
                }, ...prev]
                localStorage.setItem('tasks', JSON.stringify(newData))
                console.log(newData)
                return newData
            }
            )

            setTask('')
            setDeadline('')
            setPriority('средний')
        }
    }

    const onComplete = (id) => {
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

    const handleChange = (event) => {
        setCategory(event.target.value)
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
                <InputComponent 
                inputValue={task} 
                action={setTask} 
                placeholder={'Введите задачу'} 
                type="text">
                </InputComponent>
                <InputComponent
                    inputValue={deadline}
                    action={setDeadline}
                    placeholder={'Введите срок выполнения'}
                    type="date"
                />
                <FormControl>
                    <FormLabel>Приоритет задачи</FormLabel>
                    <RadioGroup
                        row
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <FormControlLabel value="низкий" control={<Radio />} label="Низкий" />
                        <FormControlLabel value="средний" control={<Radio />} label="Средний" />
                        <FormControlLabel value="высокий" control={<Radio />} label="Высокий" />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип задачи</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={category}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="учеба" control={<Radio />} label="Учёба" />
                        <FormControlLabel value="работа" control={<Radio />} label="Работа" />
                        <FormControlLabel value="домашние дела" control={<Radio />} label="Домашние дела" />
                        <FormControlLabel value="другое" control={<Radio />} label="Другое" />
                    </RadioGroup>
                </FormControl>
                
                <Button value={category && task.trim() ? 'primary' : ''} onClick={handleAdd}>Добавить задачу</Button>
            </FormContainer>
            <TaskList data={data} onDelete={handleDelete} taskChange={onComplete}></TaskList>
        </Wrap>
        </>
    )
}

export default Main