import React, { useState, useMemo, useEffect } from 'react'
import { Paper, Box, CircularProgress } from '@mui/material'
import { Header } from '../../layouts/header/Header'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IssuesFilterBar } from './IssuesFilterBar'
import { IssuesTable } from './IssuesTable'
import { StyledBackground, MainLayout, IssuesContainer } from './issues.styles'
import { ISSUES_THUNK } from '../../store/slices/issuses/IssusesThunk'
import Sidebar from '../../components/UI/sidebar/Sidebar'

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
   const { id } = useParams()

   const { issues: rawIssues, isLoading } = useSelector((state) => state.issues)

   const [startDate, setStartDate] = useState(null)
   const [endDate, setEndDate] = useState(null)
   const [selectedLabels, setSelectedLabels] = useState([])
   const [selectedAssignees, setSelectedAssignees] = useState([])
   const [showWithChecklist, setShowWithChecklist] = useState(false)

   useEffect(() => {
      const filterParams = {
         id,
         startDate: startDate?.format('YYYY.MM.DD').replaceAll('.', '-'),
         endDate: endDate?.format('YYYY.MM.DD').replaceAll('.', '-'),
         labelId: selectedLabels,
         assigneeId: selectedAssignees[0],
         hasChecklist: showWithChecklist,
      }
      console.log('ID для thunk :', id)

      dispatch(ISSUES_THUNK.getAllIssues(filterParams))
   }, [
      dispatch,
      id,
      startDate,
      endDate,
      selectedLabels,
      selectedAssignees,
      showWithChecklist,
   ])

   console.log(startDate?.format('YYYY.MM.DD').replaceAll('.', '-'))

   const transformedRows = useMemo(() => {
      let filteredIssues = rawIssues

      if (showWithChecklist) {
         filteredIssues = rawIssues.filter((issue) => {
            return (
               issue.checklistProgress !== '1/1' &&
               issue.checklistProgress !== '0/0'
            )
         })
      }

      return filteredIssues.map((row) => ({
         created: dayjs(row.createdDate).format('YYYY.MM.DD'),
         period: row.period,
         creator: row.creatorEmail,
         column: row.columnTitle,
         assignee: row.assignees.map((a) => a.avatarUrl),
         labels: row.labels.map((l) => mapApiColorToHex(l.colorType)),
         checklist: row.checklistProgress,
         description: row.description,
      })) 
   }, [rawIssues, showWithChecklist])

   const allAssignees = useMemo(() => {
      const assigneeMap = new Map()

      rawIssues.forEach((issue) => {
         issue.assignees.forEach((assignee) => {
            if (!assigneeMap.has(assignee.id)) {
               assigneeMap.set(assignee.id, assignee)
            }
         })
      })

      return Array.from(assigneeMap.values())
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
                  allAssignees={allAssignees}
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
