import React, { FC } from 'react'

import { WindowBox } from '../styled'

import WindowHead, { IWindowHeadProps } from '../window-head/window-head'

interface IWindowProps {
    withHead?: boolean,
    headProps?: IWindowHeadProps
}

const Window: FC<IWindowProps> = (props) => {
    const {
        children,
        withHead = false,
        headProps = {}
    } = props

    return (
        <WindowBox>
            {withHead && (
                <WindowHead
                    title={headProps.title}
                    handleCloseButtonClick={headProps.handleCloseButtonClick}
                />
            )}
            {children}
        </WindowBox>
    )
}

export default Window
