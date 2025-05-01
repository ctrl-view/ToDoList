import { useState } from "react";
import css from "../../../styles/taskList.css"
import Button from "../../comps/Button"
import { FaTrash } from 'react-icons/fa'
import { BiCheck, BiRevision } from "react-icons/bi";
const {DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem} = css

const TaskList = (props) => {

    const [filters, setFilters] = useState({
        category: '',
        completed: ''
    })
    const{data=[], onDelete, taskChange} = props

    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }))
    }

    const filterData = data.filter(item => {
        return (
            (filters.category === '' || item.category === filters.category) &&
            (filters.completed === '' || item.completed.toString() === filters.completed)
        );
    }
    )
    return (
        <>
            <div style={{ margin: '10px auto', maxWidth: '800px' }}>
            <select name="category"
                value={filters.category}
                onChange={handleFilterChange}
                style={{ marginRight: '10px' }}>
                <option value="">Все категории</option>
                <option value="учеба">Учёба</option>
                <option value="работа">Работа</option>
                <option value="домашние дела">Домашние дела</option>
                <option value="другое">Другое</option>
            </select>
            <select name="completed" value={filters.completed}
                onChange={handleFilterChange}
                style={{ marginRight: '10px' }}>
                <option value="">Все задачи</option>
                <option value="false">Активные</option>
                <option value="true">Завершённые</option>
            </select>
            </div>  
            <DataContainer>
                {filterData.map((item, index) => {
                    
                    return (
                <ContentLine key={item.id} style={{marginBottom: '10px'}}>
                    <ContentCell style={{textDecoration: item.completed===true ? 'line-through' : ''}} width={'80%'}>{item.task}</ContentCell>
                    <ContentCell width={'10%'}>
                        <Button onClick={()=>taskChange(item.id)}>{ item.completed===false ? <BiCheck /> : <BiRevision />}</Button>
                    </ContentCell>
                    <ContentCell width={'10%'}>
                        <Button onClick={()=>onDelete(item.id)}><FaTrash /></Button>
                    </ContentCell>
                </ContentLine>
                    )
                })}

            </DataContainer>

        </>
    )
}

export default TaskList