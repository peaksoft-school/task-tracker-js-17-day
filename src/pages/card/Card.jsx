import React, { useRef, useState } from 'react'
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
import {
   Box,
   styled,
   Typography,
   TextField,
   Button,
   Avatar,
} from '@mui/material'
import { AppButton } from '../../components/UI/AppButton'
import { CustomModal } from '../../components/UI/modal/Modal'
import { Input } from '../../components/UI/Input'
import CustomDateRangeCalendar from '../../components/UI/DatePicker'
import { Select } from '../../components/UI/Select'
import { useDispatch, useSelector } from 'react-redux'
import { CARD_THUNK } from '../../store/slices/card/cardThunk'
import { LABEL_THUNK } from '../../store/slices/label/labelThunk'
import { LABEL_OPTIONS } from '../../assets/colorsLabel/colorsLabel'
import dayjs from 'dayjs'
import { Chipp } from '../../components/UI/Chip'

export const Card = ({ handler, titele }) => {
   const [openDescription, setOpenDescription] = useState(false)
   const [description, setDescription] = useState('')
   const [modalMembers, setModalMembers] = useState(false)
   const [modalEstimation, setModalEstimation] = useState(false)
   const [modalLabel, setModalLabel] = useState(false)
   const [modalChecklist, setModalChecklist] = useState(false)
   const [selectValue, setSelectValue] = useState('')

   const [checklistValue, setChecklistValue] = useState('')
   const [titeleZadacha, setTiteleZadacha] = useState('')

   const [labelss, setLabels] = useState({
      GREEN: '',
      ORANGE: '',
      BLUE: '',
      RED: '',
   })

   const dispatch = useDispatch()
   const createdCard = useSelector((state) => state.card.createdCard)

   const { cards } = useSelector((state) => state.card)
   console.log(cards.id, 'cards000009')
   const id = cards.id

   const label = useSelector((state) => state.label.labels)

   const { main } = useSelector((state) => state.main)
   const userId = main[0]?.userId

   console.log(userId, 'userId')

   const hendleOpenMembers = () => {
      setModalMembers(!modalMembers)
      dispatch(CARD_THUNK.userThunk({ cardId: id, userId: userId }))
   }
   // const hendleOpenEstimation = () => setModalEstimation(!modalEstimation)
   const hendleOpenLabel = () => {
      setModalLabel(!modalLabel)
      dispatch(LABEL_THUNK.getLabel())
   }
   const handleInputChange = (colorType, value) => {
      setLabelValue((prev) => ({ ...prev, [colorType]: value }))
   }
   const hendleOpenChecklist = () => setModalChecklist(!modalChecklist)
   const hendleEstimation = () => setModalEstimation(!modalEstimation)

   const handleLabelChange = (colorType, event) => {
      setLabels((prev) => ({
         ...prev,
         [colorType]: event.target.value,
      }))
   }

   const hendlerChecklistChange = (e) => {
      setChecklistValue(e.target.value)
   }

   const handlerLabel = (colorType) => {
      const selected = LABEL_OPTIONS.find((l) => l.type === colorType)

      dispatch(
         CARD_THUNK.labelsThunk({
            cardId: id,
            labelId: selected.id,
         })
      )
   }

   const handleAddChecklist = () => {
      if (!checklistValue) return

      dispatch(
         CARD_THUNK.checklistThunk({
            cardId: id,
            title: checklistValue,
         })
      )
      setChecklistValue('')
   }
   const fileInputRef = useRef(null)

   // 👉 2. функции
   const handleOpenFile = () => {
      fileInputRef.current.click()
   }

   const handleFileChange = (e) => {
      const file = e.target.files[0]
      console.log(file, 'file')

      if (!file) return

      dispatch(
         CARD_THUNK.attachmentsThunk({
            cardId: id,
            file: file,
         })
      )
   }

   const [dates, setDates] = useState({ start: null, end: null })

   const handleCreate = () => {
      const { start, end, time } = dates

      const dueDateWithTime = dayjs(end)
         .hour(time.hour())
         .minute(time.minute())
         .second(0)

      const estimatePayload = {
         startDate: start.toISOString(),
         dueDateWithTime: dueDateWithTime.toISOString(),
         reminder: Number(selectValue),
      }

      dispatch(
         CARD_THUNK.estimateThunk({ cardId: id, estimate: estimatePayload })
      )
   }

   // const handlerUsers = () => {
   //    dispatch(CARD_THUNK.userThunk({ cardId: id, userId: userId }))
   // }

   const {
      idd,
      title,
      descriptionn,
      creatorEmail,
      assignees,
      labels,
      checklists,
      period,
      createdDate,
      columnTitle,
      state,
      checklistProgress,
   } = cards

   console.log(labels, 'test009')

   return (
      <StyledWrapper>
         <StledBoxtitle>
            <Box
               display={'flex'}
               alignItems={'center'}
               justifyContent={'center'}
               gap={'10px'}
            >
               <EditIcon />
               <Typography>{title}</Typography>
            </Box>

            <XIcon style={{ cursor: 'pointer' }} onClick={handler} />
         </StledBoxtitle>
         <StyledContiner>
            {/* DESCRIPTION */}
            <Box mt={2}>
               <Box>
                  {labels?.map((item) => (
                     <Chipp color={item.colorType} label={item.titele} />
                  ))}
               </Box>
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
                  </StyledDescriptionBox>
               )}{' '}
               <StyledActionsRow>
                  <StyledButton>Cancel</StyledButton>
                  <AppButton>Save</AppButton>
               </StyledActionsRow>
               <Box>
                  {checklists.map((item) => (
                     <StyledBoxCheklistt>
                        <Typography>
                           <EditIcon /> {item.title}
                        </Typography>
                     </StyledBoxCheklistt>
                  ))}
               </Box>
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
                     <StyledSectionButton onClick={hendleEstimation}>
                        <ClockIcon /> Estimation
                     </StyledSectionButton>

                     <>
                        <StyledSectionButton onClick={handleOpenFile}>
                           <AttachIcon /> Attachment
                        </StyledSectionButton>

                        <input
                           type="file"
                           ref={fileInputRef}
                           style={{ display: 'none' }}
                           onChange={handleFileChange}
                        />
                     </>
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
                  <StyledTypographyMembers>
                     {' '}
                     Board members
                  </StyledTypographyMembers>
                  {assignees.map((item) => (
                     <Box
                        // onClick={handlerUsers}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'10px'}
                        key={item.id}
                     >
                        <Avatar src={item.avatarUrl}>
                           {item.firstName[0]}
                        </Avatar>
                        <Box>
                           <Typography>
                              {item.firstName} {item.lastName}
                           </Typography>
                           <StyledTypographyEmail>
                              {item.email}
                           </StyledTypographyEmail>
                        </Box>
                     </Box>
                  ))}
               </StyledBoxModal>
            </CustomModal>
         )}

         {modalEstimation && (
            <CustomModal
               isVisible={modalEstimation}
               handleVisible={hendleEstimation}
            >
               <StyledModalEstimation>
                  <StyledContinerModal>
                     <Box></Box>
                     <Typography>Estimation</Typography>
                     <StyledXIcon onClick={hendleEstimation} />
                  </StyledContinerModal>

                  <CustomDateRangeCalendar
                     onChange={({ start, end, time }) =>
                        setDates({ start, end, time })
                     }
                  />

                  <StyledSelectBox>
                     <Select
                        label="None"
                        options={[
                           { label: '5 min. before', value: 5 },
                           { label: '15 min. before', value: 15 },
                           { label: '30 min. before', value: 30 },
                           { label: '1 hour before', value: 60 },
                        ]}
                        value={selectValue}
                        onChange={(val) => setSelectValue(val)}
                     />
                  </StyledSelectBox>

                  <StyledAppButtonn onClick={handleCreate}>
                     Create a new template
                  </StyledAppButtonn>
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
                     <StyledLebelsBox color="#61bd4f">Сделано</StyledLebelsBox>

                     <StyledEditIcon onClick={() => handlerLabel('GREEN')} />
                  </StyledInputBox>

                  <StyledInputBox>
                     <StyledLebelsBox color={'#eb8900'}>
                        Обратите на это внимание
                     </StyledLebelsBox>

                     <StyledEditIcon onClick={() => handlerLabel('ORANGE')} />
                  </StyledInputBox>

                  <StyledInputBox>
                     <StyledLebelsBox color={'#0079bf'}>
                        Хорошего всем настроения, друзья
                     </StyledLebelsBox>

                     <StyledEditIcon onClick={() => handlerLabel('BLUE')} />
                  </StyledInputBox>

                  <StyledInputBox>
                     <StyledLebelsBox color={'#eb5a46'}>
                        Срочно начать с этого
                     </StyledLebelsBox>

                     <StyledEditIcon onClick={() => handlerLabel('RED')} />
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
                  <Input
                     value={checklistValue}
                     onChange={hendlerChecklistChange}
                  />
                  <StyledAppButton onClick={handleAddChecklist}>
                     Add Checklist
                  </StyledAppButton>
               </StyledBoxChecklist>
            </CustomModal>
         )}
      </StyledWrapper>
   )
}
const StyledBoxCheklistt = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'start',
   flexDirection: 'column',
}))

const StyledLeibelsColorBox = styled(Box)((tipe) => ({
   backgroundColor: tipe,
   width: '180px',
   height: '30px',
   color: tipe,
}))

const StyledTypographyMembers = styled(Typography)(() => ({
   marginTop: '10px',
   marginBottom: '10px',
}))

const StyledTypographyEmail = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#8c8c8c',
}))

const StyledLebelsBox = styled(Box)((colors) => ({
   backgroundColor: colors.color,
   borderRadius: '8px',
   color: '#ffffff',
   width: '295px',
   height: '32px',
   padding: '6px 16px',
}))

const StyledEditIcon = styled(EditIcon)(() => ({
   cursor: 'pointer',
}))

const StyledInputZadacha = styled('input')(() => ({
   border: 'none',
   width: '400px',
   height: '32px',
   color: '#000000',
}))

const StyledInputColorss = styled('input')((color) => ({
   backgroundColor: color.color,
   border: 'none',
   marginTop: '10px',
   marginBottom: '10px',
   borderRadius: '8px',
   height: '32px',
   color: '#ffffff',
   padding: '0 10px',
   fontWeight: '500',
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
   width: '370px',
}))

const StyledBoxChecklist = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   width: '400px',
   height: '150px',
}))

const StyledAppButton = styled(AppButton)(() => ({
   marginTop: '20px',
   width: '100%',
}))

const StyledInputBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '10px',
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
   marginTop: '20px',
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
