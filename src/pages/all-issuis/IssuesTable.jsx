import { Avatar, AvatarGroup, TableRow } from '@mui/material'
import {
   Label,
   StyledTableBody,
   StyledTableCellAssignee,
   StyledTableCellBodyAssignee,
   StyledTableCellBodyChecklist,
   StyledTableCellBodyColumn,
   StyledTableCellBodyCreated,
   StyledTableCellBodyCreator,
   StyledTableCellBodyDescription,
   StyledTableCellBodyLabels,
   StyledTableCellBodyPeriod,
   StyledTableCellChecklist,
   StyledTableCellColumn,
   StyledTableCellCreated,
   StyledTableCellCreator,
   StyledTableCellDescription,
   StyledTableCellLabels,
   StyledTableCellPeriod,
   StyledTableRow,
   TableHeadGrayLine,
   TableIssues,
} from './issues.styles'

export const IssuesTable = ({ rows }) => {
   return (
      <>
         <TableIssues>
            <TableHeadGrayLine>
               <TableRow>
                  <StyledTableCellCreated>Created</StyledTableCellCreated>
                  <StyledTableCellPeriod>Period</StyledTableCellPeriod>
                  <StyledTableCellCreator>Creator</StyledTableCellCreator>
                  <StyledTableCellColumn>Column</StyledTableCellColumn>
                  <StyledTableCellAssignee>Assignee</StyledTableCellAssignee>
                  <StyledTableCellLabels>Labels</StyledTableCellLabels>
                  <StyledTableCellChecklist>Checklist</StyledTableCellChecklist>
                  <StyledTableCellDescription>
                     Description
                  </StyledTableCellDescription>
               </TableRow>
            </TableHeadGrayLine>

            <StyledTableBody>
               {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                     <StyledTableCellBodyCreated>
                        <span>{row.created}</span>
                     </StyledTableCellBodyCreated>
                     <StyledTableCellBodyPeriod>
                        {row.period}
                     </StyledTableCellBodyPeriod>
                     <StyledTableCellBodyCreator>
                        {row.creator}
                     </StyledTableCellBodyCreator>
                     <StyledTableCellBodyColumn>
                        {row.column}
                     </StyledTableCellBodyColumn>
                     <StyledTableCellBodyAssignee>
                        <AvatarGroup max={3}>
                           {row.assignee.map((src, i) => (
                              <Avatar key={i} src={src} />
                           ))}
                        </AvatarGroup>
                     </StyledTableCellBodyAssignee>
                     <StyledTableCellBodyLabels>
                        {row.labels.map((color, i) => (
                           <Label key={i} color={color} />
                        ))}
                     </StyledTableCellBodyLabels>
                     <StyledTableCellBodyChecklist>
                        {row.checklist}
                     </StyledTableCellBodyChecklist>
                     <StyledTableCellBodyDescription>
                        {row.description}
                     </StyledTableCellBodyDescription>
                  </StyledTableRow>
               ))}
            </StyledTableBody>
         </TableIssues>
      </>
   )
}
