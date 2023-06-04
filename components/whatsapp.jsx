"use client";
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const whatsapp = () => {
    return (
        <FloatingWhatsApp phoneNumber={'9664977979'} accountName={'Jatin Vaishnav'} allowEsc
            allowClickAway
            notification
            darkMode={true}
            notificationSound={true} />
    )
}

export default whatsapp