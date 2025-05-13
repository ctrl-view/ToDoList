import { useState } from "react";
import css from "../../../styles/taskList.css"
import Button from "../../comps/Button"
import { FaTrash } from 'react-icons/fa'
import { BiCheck, BiRevision } from "react-icons/bi";
const { DataContainer, ContentLine, ContentCell, SelectContainer, Select, PriorityBadge } = css

const TaskList = (props) => {
    const [filters, setFilters] = useState({
        category: '',
        completed: '',
        priority: ''
    })
    const { data = [], onDelete, taskChange } = props

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }))
    }

    const filterData = data.filter(item => {
        return (
            (filters.category === '' || item.category === filters.category) &&
            (filters.completed === '' || item.completed.toString() === filters.completed) &&
            (filters.priority === '' || item.priority === filters.priority)
        );
    })

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return '#ff4d4d';
            case 'medium': return '#ffd700';
            case 'low': return '#7cff6b';
            default: return '#7cff6b';
        }
    }

    return (
        <>
            <SelectContainer>
                <Select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                >
                    <option value="">Все категории</option>
                    <option value="учеба">Учёба</option>
                    <option value="работа">Работа</option>
                    <option value="домашние дела">Домашние дела</option>
                    <option value="другое">Другое</option>
                </Select>
                <Select
                    name="completed"
                    value={filters.completed}
                    onChange={handleFilterChange}
                >
                    <option value="">Все задачи</option>
                    <option value="false">Активные</option>
                    <option value="true">Завершённые</option>
                </Select>
                <Select
                    name="priority"
                    value={filters.priority}
                    onChange={handleFilterChange}
                >
                    <option value="">Все приоритеты</option>
                    <option value="low">Низкий</option>
                    <option value="medium">Средний</option>
                    <option value="high">Высокий</option>
                </Select>
            </SelectContainer>
            <DataContainer>
                {filterData.map((item) => (
                    <ContentLine key={item.id}>
                        <ContentCell style={{ textDecoration: item.completed ? 'line-through' : '' }} width="70%">
                            <PriorityBadge color={getPriorityColor(item.priority)} />
                            {item.task}
                            {item.deadline && <span style={{ color: 'rgb(89,154,4)', marginLeft: '8px' }}>{item.deadline}</span>}
                        </ContentCell>
                        <ContentCell width="15%">
                            <Button onClick={() => taskChange(item.id)}>{item.completed ? <BiRevision /> : <BiCheck />}</Button>
                        </ContentCell>
                        <ContentCell width="15%">
                            <Button onClick={() => onDelete(item.id)}><FaTrash /></Button>
                        </ContentCell>
                    </ContentLine>
                ))}
                {filterData.length === 0 && (
                    <ContentLine style={{ justifyContent: 'center', color: '#6c757d' }}>
                        Нет задач
                    </ContentLine>
                )}
            </DataContainer>
        </>
    )
}

export default TaskList