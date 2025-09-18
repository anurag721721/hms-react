import { ActionIcon } from '@mantine/core'
import { IconLayoutSidebarLeftExpandFilled, IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'


const Header = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className=' w-full  bg-primary-300 h-16'>
            {collapsed ? (
                <IconMenu2 onClick={() => setCollapsed(false)} />
            ) : (
                <IconLayoutSidebarLeftExpandFilled onClick={() => setCollapsed(true)} />
            )}


        </div>
    )
}

export default Header
