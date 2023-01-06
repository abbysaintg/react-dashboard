import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
// import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${colors.primary[400]} !important`,
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                },
                '& .pro-inner-item:hover': {
                    color: '#868dfb !important',
                },
                '& .pro-menu-item.active': {
                    color: '#6870fa !important',
                },
            }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <ArrowForwardOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100],
                        }}>
                        {!isCollapsed && (
                            <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                                <Typography variant='h3' color={colors.grey[100]}>
                                    
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <ArrowBackOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <img alt='profile-user' width='100px' height='100px' src={`../../assets/user.png`} style={{ cursor: 'pointer', borderRadius: '50%' }} />
                            </Box>
                            <Box textAlign='center'>
                                <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{ m: '10px 0 0 0' }}>
                                    Abby
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item title='Dashboard' to='/' icon={<HomeOutlinedIcon fontSize='large'/>} selected={selected} setSelected={setSelected} />
                        <Item title='Calendar' to='/calendar' icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        {/* <Item title='Tasks' to='/tasks' icon={<TaskAltOutlinedIcon />} selected={selected} setSelected={setSelected} /> */}
                        <Item title='Notes' to='/notes' icon={<CreateOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title='Bookmarks' to='/bookmarks' icon={<BookmarkBorderOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title='Contacts' to='/contacts' icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title='Budget' to='/budget' icon={<AccountBalanceOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar
