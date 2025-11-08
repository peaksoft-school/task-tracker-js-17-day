import { useState } from 'react'
import { DownIcon } from '../assets/AllExportIcon'
import styled from '@emotion/styled'
import { AppButton } from './UI/AppButton'

export default function DescriptionBox() {
   const [description, setDescription] = useState('')

   const handleSave = () => {
      console.log('Saved:', description)
   }

   const handleCancel = () => {
      setDescription('')
   }

   return (
      <ConteinerDescriptionBox>
         <HeaderDescriptionBox>
            <StyledDownIcon />
            <DescriptionLabel>Description</DescriptionLabel>
         </HeaderDescriptionBox>

         <StyledTextarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a description"
         />

         <ActionsDescriptionBox>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <SaveButton onClick={handleSave}>Save</SaveButton>
         </ActionsDescriptionBox>
      </ConteinerDescriptionBox>
   )
}

const ConteinerDescriptionBox = styled('div')({
   width: '683px',
   minHeight: '148px',
})

const HeaderDescriptionBox = styled('div')({
   display: 'flex',
   gap: '8px',
   marginBottom: '6px',
})

const StyledDownIcon = styled(DownIcon)({
   width: '20px',
   height: '20px',
})

const DescriptionLabel = styled('label')({
   color: 'rgba(145, 145, 145, 1)',
})

const StyledTextarea = styled('textarea')({
   width: '100%',
   height: '83px',
   padding: '6px 16px',

   color: 'grey',
   fontSize: '16px',

   boxSizing: 'border-box',
   borderRadius: '8px',
   resize: 'none',

   border: '1px solid #ccc',
   outline: 'none',
   '&:focus': {
      border: '1px solid #888',
   },
})

const ActionsDescriptionBox = styled('div')({
   display: 'flex',
   gap: '16px',
   marginTop: '10px',
   justifyContent: 'end',
})

const CancelButton = styled(AppButton)({
   padding: '6px 16px',
   borderRadius: '24px',
   background: 'rgba(240, 240, 240, 1)',
   color: 'grey',
   '&:hover': {
      backgroundColor: 'rgba(240, 240, 240, 1)',
   },
})

const SaveButton = styled(AppButton)({
   padding: '6px 16px',
})
