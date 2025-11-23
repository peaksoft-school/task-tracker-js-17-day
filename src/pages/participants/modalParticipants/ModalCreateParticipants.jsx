import { Box, Typography, IconButton } from '@mui/material'
import { AppButton } from '../../../components/UI/AppButton'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { PARTISPANTS_THUNK } from '../../../store/slices/participants/participansThunk'

function ModalCreateParticipants({ onClose, workspaceId }) {
   const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         role: 'member',
      },
   })

   const onSubmit = (data) => {
      dispatch(
         PARTISPANTS_THUNK.postParticipant({
            workspaceId: workspaceId,
            email: data.email,
            role: data.role,
         })
      )

      if (onClose) {
         onClose()
      }
   }

   return (
      <ContainerModalCreate onSubmit={handleSubmit(onSubmit)}>
         <Header>
            <LabelTitle variant="h6">Invite a new participant</LabelTitle>
            <StyledIconButton onClick={onClose}>
               <CloseIcon />
            </StyledIconButton>
         </Header>

         <InputContainer>
            <InputGroup>
               <InputTextName
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register('email', {
                     required: 'Email обязателен',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Некорректный email',
                     },
                  })}
               />
               {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
               )}
            </InputGroup>

            <RadioGroup>
               <RadioLabel>
                  <RadioInput
                     type="radio"
                     value="member"
                     {...register('role')}
                  />
                  Member
               </RadioLabel>

               <RadioLabel>
                  <RadioInput
                     type="radio"
                     value="admin"
                     {...register('role')}
                  />
                  Admin
               </RadioLabel>
            </RadioGroup>
         </InputContainer>

         <ContainerButton>
            <DeleteButton onClick={onClose} type="button">
               Delete
            </DeleteButton>
            <CreateButton type="submit">Invite</CreateButton>
         </ContainerButton>
      </ContainerModalCreate>
   )
}

export default ModalCreateParticipants

const ContainerModalCreate = styled('form')({
   minWidth: '400px',
   backgroundColor: 'white',
   borderRadius: '10px',
   display: 'flex',
   flexDirection: 'column',
})

const Header = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   position: 'relative',
   marginBottom: '10px',
})

const LabelTitle = styled(Typography)({
   flexGrow: 1,
   textAlign: 'center',
   fontSize: '20px',
   color: '#333',
})

const StyledIconButton = styled(IconButton)({
   position: 'absolute',
   right: 0,
   top: -5,
   padding: 0,
   color: '#999',
})

const InputContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '15px',
})

const InputGroup = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
})

const InputTextName = styled('input')({
   width: '100%',
   padding: '12px 16px',
   fontSize: '16px',
   border: '1px solid #ddd',
   borderRadius: '10px',
   outline: 'none',
   boxSizing: 'border-box',
   color: '#555',
   '&::placeholder': {
      color: '#ccc',
   },
   '&:focus': {
      borderColor: '#007bff',
   },
})

const RadioGroup = styled(Box)({
   display: 'flex',
   gap: '20px',
   marginTop: '10px',
})

const RadioLabel = styled('label')({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   cursor: 'pointer',
   fontSize: '16px',
   color: '#333',
})

const RadioInput = styled('input')({
   width: '18px',
   height: '18px',
   cursor: 'pointer',
   accentColor: '#007bff',
})

const ErrorMessage = styled(Typography)({
   color: 'red',
   fontSize: '12px',
   marginTop: '4px',
   paddingLeft: '5px',
})

const ContainerButton = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '12px',
   marginTop: '30px',
})

const DeleteButton = styled(AppButton)({
   backgroundColor: '#f0f0f0',
   color: '#888',
   textTransform: 'none',
   fontSize: '16px',
   fontWeight: 500,
   borderRadius: '8px',
   padding: '8px 24px',
   '&:hover': {
      backgroundColor: '#e5e5e5',
   },
})

const CreateButton = styled(AppButton)({
   backgroundColor: '#007bff',
   color: '#ffffff',
   textTransform: 'none',
   fontSize: '16px',
   fontWeight: 500,
   borderRadius: '8px',
   padding: '8px 24px',
   '&:hover': {
      backgroundColor: '#0069d9',
   },
})
