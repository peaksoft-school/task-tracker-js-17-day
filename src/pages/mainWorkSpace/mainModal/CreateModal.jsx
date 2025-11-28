import { Box, Typography, styled } from '@mui/material'
import { AppButton } from '../../../components/UI/AppButton'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_THUNK } from '../../../store/slices/workspaces/mainThunk'

function CreateModal({ onClose }) {
   const [emails, setEmails] = useState([])
   const [emailInput, setEmailInput] = useState('')
   const [emailError, setEmailError] = useState('')

   const { token } = useSelector((state) => state.auth)

   const link = window.location.origin + '/workspace'

   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: '',
      },
   })

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault()

         const email = emailInput.trim()

         const emailRegex = /^\S+@\S+$/i

         if (!email) return

         if (!emailRegex.test(email)) {
            setEmailError('Введите корректный email')
            return
         }

         if (emails.includes(email)) {
            setEmailError('Этот email уже добавлен')
            return
         }

         setEmails([...emails, email])
         setEmailInput('')
         setEmailError('')
      }
   }

   const handleRemoveEmail = (indexToRemove) =>
      setEmails(emails.filter((_, index) => index !== indexToRemove))

   const onSubmit = async (data) => {
      const finalData = {
         name: data.name,
         emails: emails,
         role: 'MEMBER',
         link,
      }

      dispatch(
         MAIN_THUNK.modalCreateWorkSpase({ data: finalData, onClose, token })
      )
   }

   return (
      <ContainerModalCreate onSubmit={handleSubmit(onSubmit)}>
         <LabelTitle variant="h6">Create a new workspace</LabelTitle>

         <InputContainer>
            <InputGroup>
               <Label htmlFor="workspace-name">Name of the workspace*</Label>

               <InputTextName
                  id="workspace-name"
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: 'Имя обязательно' })}
                  maxLength={11}
               />

               {errors?.name && (
                  <ErrorMessage>{errors?.name?.message}</ErrorMessage>
               )}
            </InputGroup>

            <InputGroup sx={{ mt: 2.5 }}>
               <Label htmlFor="member-email">Invite members</Label>

               <TagsInputContainer isError={!!emailError}>
                  {emails?.map((email, index) => (
                     <Tag key={index}>
                        <TagLabel>{email}</TagLabel>

                        <TagClose onClick={() => handleRemoveEmail(index)}>
                           &times;
                        </TagClose>
                     </Tag>
                  ))}

                  <StyledInput
                     id="member-email"
                     type="text"
                     placeholder={emails?.length > 0 ? '' : 'example@gmail.com'}
                     value={emailInput}
                     onChange={(e) => {
                        setEmailInput(e.target.value)
                        setEmailError('')
                     }}
                     onKeyDown={handleKeyDown}
                  />
               </TagsInputContainer>

               {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
               <HintText>Press Enter to add email</HintText>
            </InputGroup>
         </InputContainer>

         <ContainerButton>
            <CancelButton onClick={onClose} type="button">
               Cancel
            </CancelButton>

            <CreateButton type="submit">Create</CreateButton>
         </ContainerButton>
      </ContainerModalCreate>
   )
}

export default CreateModal

const ContainerModalCreate = styled('form')({
   width: '361px',
   minHeight: '260px',
})

const LabelTitle = styled(Typography)({
   width: '100%',
   textAlign: 'center',
   fontWeight: 600,
   fontSize: '18px',
   color: '#333',
   marginBottom: '10px',
})

const InputContainer = styled(Box)({
   flexGrow: 1,
   marginTop: '15px',
})

const InputGroup = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
})

const Label = styled('label')({
   width: '159px',
   height: '18px',
   fontSize: '14px',
   color: 'rgba(145, 145, 145, 1)',
   fontWeight: 400,
   marginBottom: '6px',
   display: 'block',
})

const InputTextName = styled('input')({
   width: '100%',
   padding: '10px 12px',
   fontSize: '16px',
   border: '1px solid #ddd',
   borderRadius: '8px',
   outline: 'none',
   boxSizing: 'border-box',
   '&:focus': {
      borderColor: '#007bff',
   },
})

const TagsInputContainer = styled('div')(({ isError }) => ({
   display: 'flex',
   alignItems: 'center',
   flexWrap: 'wrap',
   gap: '5px',
   width: '100%',
   minHeight: '42px',
   padding: '5px 8px',
   border: `1px solid ${isError ? 'red' : '#ddd'}`,
   borderRadius: '8px',
   backgroundColor: '#fff',
   boxSizing: 'border-box',
   '&:focus-within': {
      borderColor: isError ? 'red' : '#007bff',
   },
}))

const Tag = styled('div')({
   display: 'flex',
   alignItems: 'center',
   backgroundColor: '#f0f0f0',
   borderRadius: '16px',
   padding: '4px 8px 4px 10px',
   fontSize: '14px',
   color: '#333',
})

const TagLabel = styled('span')({
   marginRight: '6px',
})

const TagClose = styled('span')({
   cursor: 'pointer',
   color: '#888',
   fontWeight: 'bold',
   fontSize: '16px',
   lineHeight: '1',
   '&:hover': {
      color: '#333',
   },
})

const StyledInput = styled('input')({
   border: 'none',
   outline: 'none',
   fontSize: '16px',
   flexGrow: 1,
   minWidth: '120px',
   padding: '4px 0',
})

const ErrorMessage = styled(Typography)({
   color: 'red',
   fontSize: '12px',
   marginTop: '4px',
})

const HintText = styled(Typography)({
   color: '#999',
   fontSize: '11px',
   marginTop: '2px',
})

const ContainerButton = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '10px',
   marginTop: '20px',
})

const CancelButton = styled(AppButton)({
   backgroundColor: '#e0e0e0',
   color: '#555',
   '&:hover': {
      backgroundColor: '#d5d5d5',
   },
})

const CreateButton = styled(AppButton)(({ disabled }) => ({
   backgroundColor: disabled ? 'rgba(178, 178, 178, 1)' : '#007bff',
   color: '#ffffff',
   '&:disabled': {
      backgroundColor: 'rgba(178, 178, 178, 1)',
      cursor: 'not-allowed',
      color: '#ffffff',
   },
   '&:not(:disabled)': {
      '&:hover': {
         backgroundColor: '#0056b3',
      },
   },
}))
