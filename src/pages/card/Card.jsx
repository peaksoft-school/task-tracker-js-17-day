import React, { useEffect, useState } from 'react'
import {
   ArchiveIcon,
   AttachIcon,
   CheckIcon,
   ClockIcon,
   DeleteIcon,
   DownIcon,
   EditIcon,
   LabelIcon,
   MemberIcon,
   SearchIcon,
   VectorIcon,
   XIcon,
} from '../../assets/AllExportIcon'
import { Box, styled, Typography, TextField, Button } from '@mui/material'
import { AppButton } from '../../components/UI/AppButton'
import { CustomModal } from '../../components/UI/modal/Modal'
import { Input } from '../../components/UI/Input'
import CustomDateRangeCalendar from '../../components/UI/DatePicker'
import { Select } from '../../components/UI/Select'
import { useDispatch, useSelector } from 'react-redux'

export const Card = ({ handler }) => {
   const [openDescription, setOpenDescription] = useState(false)
   const [description, setDescription] = useState('')
   const [modalMembers, setModalMembers] = useState(false)
   const [modalEstimation, setModalEstimation] = useState(false)
   const [modalLabel, setModalLabel] = useState(false)
   const [modalChecklist, setModalChecklist] = useState(false)

   const hendleOpenMembers = () => setModalMembers(!modalMembers)
   const hendleOpenEstimation = () => setModalEstimation(!modalEstimation)
   const hendleOpenLabel = () => setModalLabel(!modalLabel)
   const hendleOpenChecklist = () => setModalChecklist(!modalChecklist)

   return (
      <StyledWrapper>
         <StledBoxtitle>
            <Typography>Какая-то задача, которую нужно выполнить</Typography>
            <XIcon style={{ cursor: 'pointer' }} onClick={handler} />
         </StledBoxtitle>
         <StyledContiner>
            {/* DESCRIPTION */}
            <Box mt={2}>
               <StyledBoxDowun
                  onClick={() => setOpenDescription(!openDescription)}
               >
                  <DownIcon />
                  <Typography>Description</Typography>
               </StyledBoxDowun>

               {openDescription && (
                  <StyledDescriptionBox>
                     <TextField
                        multiline
                        fullWidth
                        placeholder="Add a description"
                        minRows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     />
                     <StyledActionsRow>
                        <StyledButton>Cancel</StyledButton>
                        <AppButton>Save</AppButton>
                     </StyledActionsRow>
                  </StyledDescriptionBox>
               )}
            </Box>
            <Box>
               {/* ADD SECTION */}
               <StyledAddSection>
                  <StyledSectionBlock>
                     <StyledSectionButton onClick={hendleOpenMembers}>
                        <MemberIcon /> Members
                     </StyledSectionButton>
                     <StyledSectionButton onClick={hendleOpenLabel}>
                        <LabelIcon /> Label
                     </StyledSectionButton>
                     <StyledSectionButton onClick={hendleOpenChecklist}>
                        <CheckIcon /> Checklist
                     </StyledSectionButton>
                  </StyledSectionBlock>

                  <StyledSectionBlock>
                     <StyledSectionButton onClick={hendleOpenEstimation}>
                        <ClockIcon /> Estimation
                     </StyledSectionButton>
                     <StyledSectionButton>
                        <AttachIcon /> Attachment
                     </StyledSectionButton>
                  </StyledSectionBlock>
               </StyledAddSection>

               {/* ACTIONS */}
               <StyledActionsSection>
                  <StyledSectionButton>
                     <StyledDeleteIcon /> Delete
                  </StyledSectionButton>
                  <StyledSectionButton>
                     <ArchiveIcon /> Archive
                  </StyledSectionButton>
               </StyledActionsSection>

               {/* COMMENTS */}
               <StyledCommentsBox>
                  <StyledCommentsBoxHeader>
                     <Typography fontSize="14px" color="gray">
                        Comments
                     </Typography>
                     <VectorIcon />
                  </StyledCommentsBoxHeader>

                  <StyledTextField placeholder="Write a comment" fullWidth />
               </StyledCommentsBox>
            </Box>
         </StyledContiner>

         {modalMembers && (
            <CustomModal
               isVisible={modalMembers}
               handleVisible={hendleOpenMembers}
            >
               <StyledBoxModal>
                  <StyledContinerModal>
                     <Box></Box>
                     <Typography>Members</Typography>
                     <StyledXIcon onClick={hendleOpenMembers} />
                  </StyledContinerModal>

                  <Input icon={<SearchIcon />} iconPosition="end" />
                  <Typography> Board members</Typography>
                  <Box></Box>
               </StyledBoxModal>
            </CustomModal>
         )}

         {modalEstimation && (
            <CustomModal
               isVisible={modalEstimation}
               handleVisible={hendleOpenEstimation}
            >
               <StyledModalEstimation>
                  <StyledContinerModal>
                     <Box></Box>
                     <Typography>Estimation</Typography>
                     <StyledXIcon onClick={hendleOpenEstimation} />
                  </StyledContinerModal>
                  <CustomDateRangeCalendar />
                  <StyledSelectBox>
                     <Select
                        label="None"
                        options={[
                           { label: '5 min. before', value: '5' },
                           { label: '15 min. before', value: '15' },
                           { label: '30 min. before', value: '30' },
                           { label: '1 hour before', value: '60' },
                        ]}
                     />
                  </StyledSelectBox>

                  <StyledAppButtonn>Create a new template</StyledAppButtonn>
               </StyledModalEstimation>
            </CustomModal>
         )}
         {modalLabel && (
            <CustomModal isVisible={modalLabel} handleVisible={hendleOpenLabel}>
               <Box>
                  <StyledContinerModal>
                     <Box></Box>
                     <Typography>Label</Typography>
                     <StyledXIcon onClick={hendleOpenLabel} />
                  </StyledContinerModal>
                  <StyledInputBox>
                     <StyledInputColorss
                        color="#61bd4f"
                        type="text"
                        placeholder="Done"
                     />
                     <EditIcon />
                  </StyledInputBox>
                  <StyledInputBox>
                     <StyledInputColorss
                        color="#eb8900"
                        type="text"
                        placeholder="In progress"
                     />
                     <EditIcon />
                  </StyledInputBox>
                  <StyledInputBox>
                     <StyledInputColorss
                        color="#0079bf"
                        type="text"
                        placeholder="Done"
                     />
                     <EditIcon />
                  </StyledInputBox>
                  <StyledInputBox>
                     <StyledInputColorss
                        color="#eb5a46"
                        type="text"
                        placeholder="Done"
                     />
                     <EditIcon />
                  </StyledInputBox>
               </Box>
            </CustomModal>
         )}
         {modalChecklist && (
            <CustomModal
               isVisible={modalChecklist}
               handleVisible={hendleOpenChecklist}
            >
               <StyledBoxChecklist>
                  <StyledContinerModal>
                     <Box></Box>
                     <Typography>Label</Typography>
                     <StyledXIcon onClick={hendleOpenChecklist} />
                  </StyledContinerModal>
                  <Input icon={<SearchIcon />} iconPosition="end" />
                  <StyledAppButton>Add Checklist</StyledAppButton>
               </StyledBoxChecklist>
            </CustomModal>
         )}
      </StyledWrapper>
   )
}
const StyledInputColorss = styled('input')((color) => ({
   backgroundColor: color.color,
   border: 'none',
   marginTop: '10px',
   marginBottom: '10px',
   borderRadius: '8px',
   height: '32px',
   color: '#ffffff',
}))

const StyledAppButtonn = styled(AppButton)(() => ({
   width: '100%',
}))

const StyledSelectBox = styled(Box)(() => ({
   marginTop: '20px',
   marginBottom: '20px',
}))

const StyledModalEstimation = styled(Box)(() => ({
   height: '700px',
}))

const StyledBoxChecklist = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
}))

const StyledAppButton = styled(AppButton)(() => ({
   marginTop: '20px',
}))

const StyledInputBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: '12px',
}))

const StyledXIcon = styled(XIcon)(() => ({
   cursor: 'pointer',
}))

const StyledBoxModal = styled(Box)(() => ({
   width: '250px',
   height: '500px',
}))

const StyledContinerModal = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '20px',
   gap: '12px',
}))

const StyledCommentsBoxHeader = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const StyledTextField = styled(TextField)(() => ({
   marginTop: '80px',
   width: '333px',
   borderRadius: '8px',
}))

const StyledButton = styled(Button)(() => ({
   backgroundColor: '#f0f0f0',
   color: '#919191',
   borderRadius: '20px',
}))

const StyledDeleteIcon = styled(DeleteIcon)(() => ({
   '& path': {
      color: 'red',
   },
}))

const StyledContiner = styled(Box)(() => ({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '12px',
}))

const StyledWrapper = styled(Box)(() => ({
   padding: '20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '12px',
}))

const StledBoxtitle = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyledBoxDowun = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   cursor: 'pointer',
}))

const StyledDescriptionBox = styled(Box)(() => ({
   marginTop: '10px',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
}))

const StyledActionsRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '10px',
}))

const StyledAddSection = styled(Box)(() => ({
   marginTop: '20px',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '20px',
}))

const StyledSectionBlock = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
}))

const StyledSectionButton = styled('button')(() => ({
   padding: '8px 12px',
   borderRadius: '8px',
   border: '1px solid #ddd',
   background: '#f8f8f8',
   textAlign: 'left',
   cursor: 'pointer',
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '8px',
}))

const StyledActionsSection = styled(Box)(() => ({
   marginTop: '10px',
   display: 'flex',
   gap: '10px',
}))

const StyledCommentsBox = styled(Box)(() => ({
   marginTop: '20px',
   backgroundColor: '#f5f6f7',
   width: '100%',
   height: '190px',
   borderRadius: '8px',
   padding: '12px',
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
}))
