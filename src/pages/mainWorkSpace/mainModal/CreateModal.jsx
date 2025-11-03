// import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { AppButton } from '../../../components/UI/AppButton'
import { useForm } from 'react-hook-form'
import { MAIN_THUNK } from '../../../store/slices/workspaces/mainThunk'
import { useDispatch, useSelector } from 'react-redux'

function CreateModal({ onClose }) {
   const dispatch = useDispatch()

   const { token } = useSelector((state) => state.auth)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: '',
         email: '',
      },
   })

   const onSubmit = async (data) => {
      const finalData = {
         ...data,
         role: 'OWNER',
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
               />

               {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
               )}
            </InputGroup>

            <InputGroup sx={{ mt: 2.5 }}>
               <Label htmlFor="member-email">Invite a member</Label>
               <InputText
                  id="member-email"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register('email', {
                     pattern: {
                        value: /^\S+@\S+$/i,
                        massage: 'ведите конкреттный email',
                     },
                  })}
               />
               {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
               )}
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

const ErrorMessage = styled(Typography)({
   color: 'red',
   fontSize: '12px',
   marginTop: '4px',
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
