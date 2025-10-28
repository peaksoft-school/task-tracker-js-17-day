import React, { useState, useMemo } from 'react'
import { Paper } from '@mui/material'
import { Header } from '../../layouts/header/Header'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

// 1. Импортируем наши новые компоненты
import { IssuesFilterBar } from './IssuesFilterBar'
import { IssuesTable } from './IssuesTable'
// 2. Импортируем моковые данные (allRows - это rows из твоего старого файла)
import { rows as allRows } from './issues.data'
// 3. Импортируем стили
import { StyledBackground, MainLayout, IssuesContainer } from './issues.styles'

export default function Issues() {
   // 4. Вся логика фильтрации ЖИВЕТ ЗДЕСЬ, В РОДИТЕЛЕ
   const [startDate, setStartDate] = useState(null)
   const [endDate, setEndDate] = useState(null)
   // Добавляем стейты для остальных фильтров
   const [selectedLabels, setSelectedLabels] = useState([])
   const [selectedAssignees, setSelectedAssignees] = useState([])
   const [showWithChecklist, setShowWithChecklist] = useState(false)

   // 5. Расширенная логика фильтрации
   const filteredRows = useMemo(() => {
      return allRows.filter((row) => {
         // --- Фильтр по дате ---
         const rowDate = dayjs(row.created)
         let isAfterStart = true
         let isBeforeEnd = true

         if (startDate) {
            isAfterStart =
               rowDate.isAfter(startDate, 'day') ||
               rowDate.isSame(startDate, 'day')
         }
         if (endDate) {
            isBeforeEnd =
               rowDate.isBefore(endDate, 'day') ||
               rowDate.isSame(endDate, 'day')
         }

         // --- Фильтр по Ярлыкам (Labels) ---
         // (Предполагаем, что 'NO_LABEL' - это строка, которую ты будешь
         //  добавлять в `selectedLabels`, если нажат чекбокс "No labels")
         const byLabel =
            selectedLabels.length === 0
               ? true // Если ничего не выбрано, показываем все
               : (() => {
                    // Проверяем, хочет ли пользователь "No labels" И у ряда нет labels
                    if (
                       selectedLabels.includes('NO_LABEL') &&
                       row.labels.length === 0
                    ) {
                       return true
                    }
                    // Проверяем, есть ли у ряда хотя бы один из выбранных цветных ярлыков
                    if (
                       row.labels.some((label) =>
                          selectedLabels.includes(label)
                       )
                    ) {
                       return true
                    }
                    return false // Не совпало ни одно условие
                 })()

         // --- Фильтр по Исполнителям (Assignee) ---
         // (Предполагаем, что 'UNASSIGNED' - строка для "Unassigned")
         // ВНИМАНИЕ: Твои моковые данные для `row.assignee` - это ['/avatars/1.png', ...].
         // Эта логика НЕ СРАБОТАЕТ, т.к. фильтр выбирает по email или ID.
         // Я ВРЕМЕННО использую `row.creator` для примера.
         // Когда `row.assignee` будет содержать email'ы или ID, ты должен будешь
         // изменить `row.creator` на `row.assignee.some(a => ...)`
         const byAssignee =
            selectedAssignees.length === 0
               ? true // Если никто не выбран, показываем всех
               : (() => {
                    if (
                       selectedAssignees.includes('UNASSIGNED') &&
                       row.assignee.length === 0 // Используем `assignee` для проверки на "Unassigned"
                    ) {
                       return true
                    }
                    // TODO: Замени `row.creator` на правильную логику
                    // когда `row.assignee` будет содержать ID или email
                    if (selectedAssignees.includes(row.creator)) {
                       return true
                    }
                    return false
                 })()

         // --- Фильтр по Чек-листу (Checklist) ---
         // (Если `showWithChecklist` = true, показываем только ряды,
         // где `row.checklist` не пустой)
         const byChecklist = !showWithChecklist
            ? true
            : row.checklist && row.checklist.length > 0

         // --- Возвращаем результат ---
         return (
            isAfterStart && isBeforeEnd && byLabel && byAssignee && byChecklist
         )
      })
   }, [
      startDate,
      endDate,
      selectedLabels,
      selectedAssignees,
      showWithChecklist,
      allRows,
   ]) // 5.1 Обновляем зависимости useMemo

   return (
      <StyledBackground>
         <Header />
         <MainLayout>
            <Sidebar />
            <IssuesContainer component={Paper}>
               {/* 6. Передаем все сеттеры и значения в FilterBar */}
               <IssuesFilterBar
                  rowsLength={filteredRows.length}
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

               {/* 7. Передаем отфильтрованные данные в Таблицу */}
               <IssuesTable rows={filteredRows} />
            </IssuesContainer>
         </MainLayout>
      </StyledBackground>
   )
}
