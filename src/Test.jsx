import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { GraphicIcon, NotificationIcon } from './assets/AllExportIcon'
import styled from '@emotion/styled'

export default function TemporaryDrawer() {
   const [open, setOpen] = React.useState(false)

   const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen)
   }

   const DrawerList = (
      <Box
         sx={{ width: 250 }}
         role="presentation"
         onClick={toggleDrawer(false)}
      >
         <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {index % 2 === 0 ? (
                           <GraphicIcon />
                        ) : (
                           <NotificationIcon />
                        )}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {index % 2 === 0 ? (
                           <GraphicIcon />
                        ) : (
                           <NotificationIcon />
                        )}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   )

   return (
      <div>
         <Button_Sidebar onClick={toggleDrawer(true)}>
            Open drawer
         </Button_Sidebar>
         <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
         </Drawer>
      </div>
   )
}

const Button_Sidebar = styled.button``

{
   /* Boards + button */
}

{
   /* <SubMenuBoards /> */
}

{
   /* Static menu items */
}

{
   /* <div className="space-y-2 mt-6">
            <SubMenu
               icon={<FilesAndFoldersIcon />}
               label="All issues"
               count={267}
            />
            <SubMenu icon={<PeopleIcon />} label="Participants" count={17} />
            <SubMenu icon={<ToolsIcon />} label="Setting" />
         </div> */
}

{
   /* Workspaces header */
}

{
   /* <div className="mt-8 mb-2 flex items-center justify-between text-sm text-gray-500">
            <span>Workspaces</span>
            <button className="text-lg font-bold">+</button>
         </div> */
}

{
   /* Workspace list */
}

{
   /* <div className="space-y-2">
            <DropDownSideBar label="Accounting" initial="A" />
            <DropDownSideBar label="LMS" initial="L" />
            <DropDownSideBar label="Accounting" initial="A" />
            <DropDownSideBar label="LMS" initial="L" />
            <DropDownSideBar label="Accounting" initial="A" />
            <DropDownSideBar label="LMS" initial="L" />
         </div> */
}

{
   /* <button className="mt-4 text-sm text-gray-500">Show more</button> */
}
