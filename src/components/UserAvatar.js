import React, {Fragment} from "react";
import {Avatar} from "@material-ui/core";
import clsx from "clsx";

export default function UserAvatar(props) {
    const {user, classes} = props
    return (
        <Fragment>
            {user.avatarURL
                ? (
                    <Avatar className={clsx(classes.avatar, classes.avatarColor)} alt={user.name} src={user.avatarURL}/>
                )
                : (
                    <Avatar className={clsx(classes.avatar, classes.avatarColor)} alt={user.name}>
                        {user.name.match(/\b(\w)/g).join('')}
                    </Avatar>
                )
            }
        </Fragment>
    )
}
