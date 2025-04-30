import { useState } from "react";
import css from "../../../styles/taskList.css"
import Button from "../../comps/Button"
import { FaTrash } from 'react-icons/fa'
import { BiCheck, BiRevision } from "react-icons/bi";
const {DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem} = css

const TaskList = (props) => {

    const [filter, setFilter] = useState('все')
    const{data=[], onDelete, taskChange} = props
    const filterData = data.filter(item => {
        if (filter==='активные') return item.completed === false
        if (filter==='завершенные') return item.completed === true
    }
    )
    return (
        <>
            <ButtonsLine>
                <ButtonItem style={{fontWeight: filter==='все' ? 'bold' : ''}} onClick={()=>setFilter('все')}>
                    Все задачи
                </ButtonItem>
                <ButtonItem style={{fontWeight: filter==='активные' ? 'bold' : ''}} onClick={()=>setFilter('активные')}>
                    Активные задачи
                </ButtonItem>
                <ButtonItem style={{fontWeight: filter==='завершенные' ? 'bold' : ''}} onClick={()=>setFilter('завершенные')}>
                    Завершенные задачи
                </ButtonItem>
            </ButtonsLine>
            <DataContainer>
                {filter!=='все' ? <>
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
                })}</> : 
                <>
                {data.map((item) => {
                    
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
                })}</>
            }
            </DataContainer>

        </>
    )
}

export default TaskList