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

const mapApiColorToHex = (colorType) => {
   const colors = {
      RED: '#EB5A46',
      GREEN: '#61BD4F',
      BLUE: '#0079BF',
      ORANGE: '#EB8900',
   }
   return colors[colorType] || '#82ca9d' 
}

export default function Issues() {
   const dispatch = useDispatch()
   const { boardId } = useParams()

   const { issues: rawIssues, isLoading } = useSelector((state) => state.issues)

   const [startDate, setStartDate] = useState(null)
   const [endDate, setEndDate] = useState(null)
   const [selectedLabels, setSelectedLabels] = useState([]) 
   const [selectedAssignees, setSelectedAssignees] = useState([])
   const [showWithChecklist, setShowWithChecklist] = useState(false)

   useEffect(() => {
      const filterParams = {
         boardId,
         startDate,
         endDate,
         labelId: selectedLabels[0], 
         assigneeId: selectedAssignees[0], 
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

   const transformedRows = useMemo(() => {
      if (!rawIssues) return []

      return rawIssues.map((row) => ({
         created: dayjs(row.createdDate).format('DD.MM.YYYY'), 
         period: row.period,
         creator: row.creatorEmail,
         column: row.columnTitle,
         assignee: row.assignees.map((a) => a.avatarUrl),
         labels: row.labels.map((l) => mapApiColorToHex(l.colorType)), 
         checklist: row.checklistProgress,
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
                  <IssuesTable rows={transformedRows} /> 
               )}
            </IssuesContainer>
         </MainLayout>
      </StyledBackground>
   )
}
