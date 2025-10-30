import styled from '@emotion/styled'
import { Box, Input, Typography } from '@mui/material'
import { AppButton } from '../../../components/UI/AppButton'

function CreateModal() {
   return (
      <ContainerModalCreate>
         {/* Заголовок */}
         <LabelTitle variant="h6">Create a new workspace</LabelTitle>

         {/* Контейнер для полей ввода */}
         <InputContainer>
            {/* Поле для имени */}
            <InputGroup>
               <Label htmlFor="workspace-name">Name of the workspace*</Label>
               <InputText id="workspace-name" type="text" placeholder="Name" />
            </InputGroup>

            {/* Поле для email */}
            <InputGroup sx={{ mt: 2.5 }}>
               <Label htmlFor="member-email">Invite a member</Label>
               <InputText
                  id="member-email"
                  type="email"
                  placeholder="example@gmail.com"
               />
            </InputGroup>
         </InputContainer>

         {/* Контейнер для кнопок */}
         <ContainerButton>
            <CancelButton>Cancel</CancelButton>
            {/* Кнопка Create по умолчанию неактивна (disabled) и имеет темный фон */}
            <CreateButton disabled>Create</CreateButton>
         </ContainerButton>
      </ContainerModalCreate>
   )
}

export default CreateModal

const ContainerModalCreate = styled(Box)({
   width: '361px',
   height: '260px',
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

const InputText = styled('input')({
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

const ContainerButton = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '10px', // Расстояние между кнопками
   marginTop: '20px',
})

const CancelButton = styled(AppButton)({
   backgroundColor: '#e0e0e0', // Светло-серый
   color: '#555',
   '&:hover': {
      backgroundColor: '#d5d5d5',
   },
})

const CreateButton = styled(AppButton)({
   backgroundColor: 'rgba(178, 178, 178, 1)', // Темно-серый (для disabled)
   color: '#ffffff',
   '&:disabled': {
      // Стили неактивной кнопки на изображении
      backgroundColor: '#a0a0a0',
      cursor: 'not-allowed',
   },
   // Убираем, если кнопка активна:
   '&:not(:disabled)': {
      backgroundColor: '#007bff',
      '&:hover': {
         backgroundColor: '#0056b3',
      },
   },
})
