import React, { useState, useMemo, useEffect } from 'react'
import { Paper, Box, CircularProgress } from '@mui/material' 
import { Header } from '../../layouts/header/Header'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IssuesFilterBar } from './IssuesFilterBar'
import { IssuesTable } from './IssuesTable'
import { StyledBackground, MainLayout, IssuesContainer } from './issues.styles'
import { ISSUES_THUNK } from '../../store/slices/issuses/IssusesThunk'

// Хелпер для конвертации цвета из API в HEX (для <Label>)
const mapApiColorToHex = (colorType) => {
   const colors = {
      RED: '#EB5A46',
      GREEN: '#61BD4F',
      BLUE: '#0079BF',
      ORANGE: '#EB8900',
      // Добавь остальные цвета по необходимости
   }
   return colors[colorType] || '#82ca9d' // Цвет по умолчанию
}

export default function Issues() {
   const dispatch = useDispatch()
   const { boardId } = useParams() // 👈 Получаем ID доски из URL

   // 5. Получаем "сырые" данные и статус загрузки из Redux
   const { issues: rawIssues, isLoading } = useSelector((state) => state.issues)

   // 6. Состояния для фильтров (остаются здесь)
   const [startDate, setStartDate] = useState(null)
   const [endDate, setEndDate] = useState(null)
   const [selectedLabels, setSelectedLabels] = useState([]) // Ожидаем массив ID
   const [selectedAssignees, setSelectedAssignees] = useState([]) // Ожидаем массив ID
   const [showWithChecklist, setShowWithChecklist] = useState(false)

   // 7. useEffect для загрузки данных при изменении фильтров
   useEffect(() => {
      // API ожидает один ID, а не массив.
      // Если API поддерживает массив, измени `labelId` на `labelIds`
      // и передавай `selectedLabels` (аналогично для assignee).
      // Пока что берем только первый элемент из массива.
      const filterParams = {
         boardId,
         startDate,
         endDate,
         labelId: selectedLabels[0], // 👈 Внимание: API принимает 1 ID
         assigneeId: selectedAssignees[0], // 👈 Внимание: API принимает 1 ID
         hasChecklist: showWithChecklist,
      }

      dispatch(ISSUES_THUNK.getFilteredIssues(filterParams))
   }, [
      dispatch,
      boardId,
      startDate,
      endDate,
      selectedLabels,
      selectedAssignees,
      showWithChecklist,
   ])

   // 8. useMemo для ТРАНСФОРМАЦИИ данных из API в формат для IssuesTable
   const transformedRows = useMemo(() => {
      if (!rawIssues) return []

      return rawIssues.map((row) => ({
         // Поля, которые ожидает IssuesTable:   <-- Поля из API
         created: dayjs(row.createdDate).format('DD.MM.YYYY'), // Форматируем дату
         period: row.period,
         creator: row.creatorEmail,
         column: row.columnTitle,
         assignee: row.assignees.map((a) => a.avatarUrl), // Превращаем массив объектов в массив URL
         labels: row.labels.map((l) => mapApiColorToHex(l.colorType)), // Превращаем в массив цветов
         checklist: row.checklistProgress, // (API отдает "3/5", что совпадает)
         description: row.description,
      }))
   }, [rawIssues])
   return (
      <StyledBackground>
         <Header />
         <MainLayout>
            <Sidebar />
            <IssuesContainer component={Paper}>
               <IssuesFilterBar
                  rowsLength={transformedRows.length}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  // Передаем новые пропсы
                  selectedLabels={selectedLabels}
                  setSelectedLabels={setSelectedLabels}
                  selectedAssignees={selectedAssignees}
                  setSelectedAssignees={setSelectedAssignees}
                  showWithChecklist={showWithChecklist}
                  setShowWithChecklist={setShowWithChecklist}
               />

               {isLoading ? (
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '400px',
                     }}
                  >
                     <CircularProgress />
                  </Box>
               ) : (
                  <IssuesTable rows={transformedRows} /> // 👈 Передаем трансф. данные
               )}
            </IssuesContainer>
         </MainLayout>
      </StyledBackground>
   )
}
